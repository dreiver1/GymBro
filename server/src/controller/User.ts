import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import Controller from './Controller'
import { Request, Response } from "express";
const jwt = require('jsonwebtoken');


const prisma = new PrismaClient();
const saltRounds = 10;

class User implements Controller {
    async get(req: Request, res: Response): Promise<void> {
        try {
            const users = await prisma.user.findMany();
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const user = await prisma.user.findUnique({
                where: { id },
            });
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).send("User not found");
            }
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    async post(req: Request, res: Response): Promise<void> {
        try {
            const { name, cpf, date, email, password, roleId } = req.body;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const newUser = await prisma.user.create({
                data: { 
                    name, 
                    cpf, 
                    date, 
                    email, 
                    password: hashedPassword, 
                    roleId 
                },
            });
            res.status(201).json(newUser);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    async put(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { name, cpf, date, email, password, roleId } = req.body;

            const data: any = { name, cpf, date: new Date(date), email, roleId };

            if (password) {
                data.password = await bcrypt.hash(password, saltRounds);
            }

            const updatedUser = await prisma.user.update({
                where: { id },
                data,
            });
            res.status(200).json(updatedUser);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await prisma.user.delete({
                where: { id },
            });
            res.status(204).send();
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    generateTokens = (userId: string, role: string): { accessToken: string, refreshToken: string } => {
        const payload = { userId, role }; // Incluindo roles no payload
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '15m' });
        const refreshToken = jwt.sign(payload, process.env.REFRESH_JWT_SECRET as string, { expiresIn: '7d' });
        return { accessToken, refreshToken };
    }
    

    loginUser = async (req: Request, res: Response) => {
        try {
            const { email, password }: { email: string, password: string } = req.body;

            if (!email || !password) {
                res.status(401).send('Email and password are required');
                return;
            }

            const user = await prisma.user.findUnique({
                where: { email },
                include: { Role: true }
            });

            if (!user) {
                res.status(401).send('User not found');
                return;
            }

            const isPasswordValid = bcrypt.compareSync(password, user.password);

            if (!isPasswordValid) {
                res.status(401).send('Invalid password');
                return;
            }

            const { accessToken, refreshToken } = this.generateTokens(user.id, user.Role.name);

            res.status(200).json({ accessToken, refreshToken });
        } catch (error) {
            console.log(error);
            res.status(500).send('Error logging in user');
        }
    }

    refreshTokens = async (req: Request, res: Response) => {
        try {
            const refreshToken = req.body.refreshToken;

            if (!refreshToken) {
                return res.status(401).send('Refresh token is required');
            }

            jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET as string, (err: any, decoded: { userId: any; role: any }) => {
                if (err) {
                    return res.status(403).send('Invalid refresh token');
                }

                const { userId, role } = decoded;
                const { accessToken, refreshToken } = this.generateTokens(userId, role);

                res.status(200).json({ accessToken, refreshToken });
            });
        } catch (error) {
            res.status(500).send('Error refreshing tokens');
        }
    }
}

export default User;
