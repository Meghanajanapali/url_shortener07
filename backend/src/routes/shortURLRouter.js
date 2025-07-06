import { Router } from "express";
import { redirectFunction, shortUrl } from "../controllers/shortUrlController.js";
import { protect } from "../middlewares/authMiddleware.js";

const shortURLRouter = Router();

shortURLRouter.post("", protect, shortUrl)
shortURLRouter.get("/:shortcode", redirectFunction)
export default shortURLRouter;
