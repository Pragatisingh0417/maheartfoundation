import mongoose, { Schema, models, model } from "mongoose";

const ContactSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;
