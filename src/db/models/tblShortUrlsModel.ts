import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * This model is used to store user url its generated code and the short url, also
 * there is a date tracking
 */
export const tblShorUrlsSchema = new Schema({
  baseUrl: String,
  urlCode: String,
  shortUrl: String,
  cretionDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now }
});
