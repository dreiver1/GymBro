import { PrismaClient } from "@prisma/client";
import Controller from './Controller'
import { Request, Response } from "express";

const prisma = new PrismaClient();

class Role implements Controller {
    async get(req: Request, res: Response): Promise<void> {
        try {
            const roles = await prisma.role.findMany();
            res.status(200).json(roles);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const role = await prisma.role.findUnique({
                where: { id },
            });
            if (role) {
                res.status(200).json(role);
            } else {
                res.status(404).send("Role not found");
            }
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    async post(req: Request, res: Response): Promise<void> {
        try {
            const { name } = req.body;
            const newRole = await prisma.role.create({
                data: { name },
            });
            res.status(201).json(newRole);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    async put(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const updatedRole = await prisma.role.update({
                where: { id },
                data: { name },
            });
            res.status(200).json(updatedRole);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await prisma.role.delete({
                where: { id },
            });
            res.status(204).send();
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
}

export default Role;
