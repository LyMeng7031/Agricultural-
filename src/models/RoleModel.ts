import { Schema, model, Document } from "mongoose";

export interface IRole extends Document {
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const RoleSchema = new Schema<IRole>(
  {
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

RoleSchema.index({ name: 1 }, { unique: true });

export default model<IRole>("Role", RoleSchema);
