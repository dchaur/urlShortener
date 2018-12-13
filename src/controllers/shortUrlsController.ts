import * as mongoose from "mongoose";
import { tblShorUrlsSchema } from "../db/models/tblShortUrlsModel";
import { Request, Response } from "express";
import validUrl = require("valid-url");
import shortid = require("shortid");

const ShortURLModel = mongoose.model("shortUrl", tblShorUrlsSchema);

export class shortUrlController {
  /**
   *
   * @param req
   * @param res
   */
  public getUrlCode(req: Request, res: Response) {
    ShortURLModel.findOne({ urlCode: req.params.urlCode }, (err, urlInfo) => {
      if (err) {
        return res.send(err);
      }

      if (urlInfo) {
        return res.redirect(urlInfo.baseUrl);
      } else {
        return res.status(404).json("Not found URL");
      }
    });
  }

  public createShortUrl(req: Request, res: Response) {
    const { baseUrl, shortBaseUrl } = req.body;

    if (!validUrl.isUri(shortBaseUrl)) {
      res.status(401).json("Invalid short base URL");
    }

    if (validUrl.isUri(baseUrl)) {
      const updateDate = new Date();
      const urlCode = shortid.generate();

      ShortURLModel.findOne({ baseUrl: baseUrl }, (err, urlItem) => {
        if (err) {
          return res.send(err);
        }

        // Checking if there is any url if not insert it
        if (urlItem) {
          res.status(200).json(urlItem);
        } else {
          let shortUrl = `${shortBaseUrl}/${urlCode}`;
          const newUrl = new ShortURLModel({
            baseUrl,
            shortUrl,
            urlCode,
            updateDate
          });

          newUrl.save((err, urlItem) => {
            if (err) {
              return res.send(err);
            }
            return res.status(201).json(urlItem);
          });
        }
      });
    }
  }
}
