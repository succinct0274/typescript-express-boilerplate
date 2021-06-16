import express, { Application } from "express";
import { router } from "./router";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


for (const route of router) {
    app.use(route.getRouter());
}

app.listen(3000);