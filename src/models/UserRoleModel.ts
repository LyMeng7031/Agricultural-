import { Schema, model, Document, Types } from "mongoose";

export interface IUserRole extends Document {
  userId: Types.ObjectId; // MUST match schema
  roleId: Types.ObjectId; // MUST match schema
  assignedAt: Date;
  assignedBy?: Types.ObjectId;
}

const UserRoleSchema = new Schema<IUserRole>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    roleId: { type: Schema.Types.ObjectId, ref: "Role", required: true },
    assignedAt: { type: Date, default: Date.now },
    assignedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: false }
);

// Prevent duplicate role assignment
UserRoleSchema.index({ userId: 1, roleId: 1 }, { unique: true });

export default model<IUserRole>("UserRole", UserRoleSchema);
