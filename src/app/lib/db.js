import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectDB() {
  if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI IS UNDEFINED");
    throw new Error("MONGODB_URI missing");
  }

  if (mongoose.connection.readyState >= 1) {
    console.log("🟢 Mongo already connected");
    return;
  }

  console.log("🔌 Connecting to MongoDB...");

  await mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 2000,
  });
  console.log("✅ MongoDB connected");
}
