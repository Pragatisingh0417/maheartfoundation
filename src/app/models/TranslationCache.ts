import mongoose, { Schema, models, model } from "mongoose";

export interface ITranslationCache {
  key: string;
  targetLang: string;
  sourceText: string;
  translatedText: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const TranslationCacheSchema = new Schema<ITranslationCache>(
  {
    key: { type: String, required: true, unique: true, index: true },
    targetLang: { type: String, required: true, index: true },
    sourceText: { type: String, required: true },
    translatedText: { type: String, required: true },
  },
  { timestamps: true }
);

const TranslationCache =
  models.TranslationCache ||
  model<ITranslationCache>("TranslationCache", TranslationCacheSchema);

export default TranslationCache;
