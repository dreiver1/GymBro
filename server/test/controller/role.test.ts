import { describe } from "node:test";
import app from "../../src/app"
import request from "supertest"

const port = 3001;
const server = app.listen(port);



