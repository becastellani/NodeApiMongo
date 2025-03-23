import { Router } from "express";

import NotFound from "./routers/helpers/404.js";
import InternalServerError from "./routers/helpers/500.js";

import UserRouter  from "./routers/userRouter.js";
import ProductRouter from "./routers/productRouter.js";

const routes = Router()
  .use("/api/user", UserRouter)
  .use("/api/product", ProductRouter)
  .use(InternalServerError)
  .use(NotFound);

export default routes;