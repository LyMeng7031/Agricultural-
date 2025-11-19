import { Router } from "express";

import authRoute from "./authRoutes";
import roleRoute from "./authRoutes";
import userRoleRoute from "./userRoleRoutes";
import userRoute from "./userRoutes";

const router = Router();

router.use("/auth", authRoute);
router.use("/roles", roleRoute);
router.use("/user-roles", userRoleRoute);
router.use("/users", userRoute);

export default router;
