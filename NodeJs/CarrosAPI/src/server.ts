import express from "express";
import { router } from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specification.routes";
import "./database";



const app = express();

app.use(express.json())
app.use("/api-docs/", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.listen(3333,()=> console.log("Server is running!"))