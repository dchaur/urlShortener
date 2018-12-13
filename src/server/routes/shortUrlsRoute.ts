import { Request, Response, NextFunction } from "express";
import { ShortUrlController } from "../../controllers/shortUrlsController";

export class ShortenerUrlRoutes {
  public shortUrlsController: ShortUrlController = new ShortUrlController();
  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successfulll!!!!"
      });
    });
    // API routes
    app.route("/api/route/:urlCode").get(this.shortUrlsController.getUrlCode);
    app.route("/api/create/url").post(this.shortUrlsController.createShortUrl);
  }
}
