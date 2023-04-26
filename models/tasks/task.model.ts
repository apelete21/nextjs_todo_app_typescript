import { Schema, model, models, now } from "mongoose";

const TaskSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
    },
    priority: {
      type: String,
      required: true,
      default: "HIGH",
    },
    delay: {
      type: Date,
      required: false,
      default: `${now().getDate()}/${now().getMonth()}/${now().getFullYear()}`,
    },
    group: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Task = models.Task || model("tasks", TaskSchema);
