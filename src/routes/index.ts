import { Router } from "express";
import authRoute from "./authRoutes";
import userRoute from "./userRoutes";

const router = Router();

router.use("/auth", authRoute);
router.use("/", userRoute);

export default router;
