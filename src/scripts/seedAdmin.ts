import { UserModel } from "@/models/userModels";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

export const seedAdminUser = async () => {
  if (!process.env.PASSWORD_ADMIN) {
    console.error("❌ ERROR: PASSWORD_ADMIN is missing in .env");
    return;
  }

  const existingAdmin = await UserModel.findOne({
    $or: [
      { email: process.env.EMAIL_ADMIN },
      { userName: process.env.USER_NAME_ADMIN },
      { fullName: process.env.FULL_NAME_ADMIN },
    ],
  });

  if (existingAdmin) {
    existingAdmin.role = "admin";
    existingAdmin.password = await bcrypt.hash(process.env.PASSWORD_ADMIN, 10);
    await existingAdmin.save();
    console.log("♻️ Admin user updated");
  } else {
    const hashedPassword = await bcrypt.hash(process.env.PASSWORD_ADMIN, 10);

    const adminUser = new UserModel({
      firstName: process.env.FIRST_NAME_ADMIN || "Admin",
      lastName: process.env.LAST_NAME_ADMIN || "User",
      userName: process.env.USER_NAME_ADMIN,
      fullName: process.env.FULL_NAME_ADMIN,
      age: 30,
      email: process.env.EMAIL_ADMIN,
      phone: process.env.PHONE_ADMIN || "000000000",
      password: hashedPassword,
      role: "admin",
    });

    await adminUser.save();
    console.log("✅ Admin user seeded successfully");
  }
};
