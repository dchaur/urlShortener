import { Request, Response, NextFunction } from "express";
import { shortUrlController } from "../../controllers/shortUrlsController";

export class shortenerUrlRoutes {
  public shortUrlsController: shortUrlController = new shortUrlController();
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
