import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  const { name, email, password, role } = req.body;

  res.status(201).json({
    message: "User created",
    data: { name, email, role },
  });
});

export default router;
