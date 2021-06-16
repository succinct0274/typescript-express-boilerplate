import { AuthController } from "../controllers/AuthController";
import Route from "./route";

export class AuthRoute extends Route {
    private authController = new AuthController();

    constructor() {
        super();
        this.setRoutes();
    }

    protected setRoutes(): void {
        this.router.get('/login', this.authController.echo);
    }

}