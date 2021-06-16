import { AuthRoute } from "./routes/auth.route";
import Route from "./routes/route";

export const router: Array<Route> = [
    new AuthRoute(),
];
