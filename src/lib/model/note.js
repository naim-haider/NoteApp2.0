import mongoose from "mongoose";

const noteModel = new mongoose.Schema(
  {
    title: String,
    description: String,
    newDate: String,
  },
  {
    timestamps: true,
  }
);

export const Note = mongoose.models.notes || mongoose.model("notes", noteModel);
