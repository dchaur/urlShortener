import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { ShortenerUrlRoutes } from "./routes/shortUrlsRoute";

class App {
  public app: express.Application;
  public shortenerRoutes: ShortenerUrlRoutes = new ShortenerUrlRoutes();
  public mongoUrl: string = "mongodb://localhost/urlShortener";
  public mongoConnectOptions = {
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE
  };

  constructor() {
    this.app = express();
    this.config();
    this.shortenerRoutes.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static("public"));
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,POST");
      res.header(
        "Access-Control-Allow-Headers",
        "Content-type,Accept,x-access-token,X-Key"
      );
      if (req.method === "OPTIONS") {
        res.status(200).end();
      } else {
        next();
      }
    });
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(
      this.mongoUrl,
      this.mongoConnectOptions
    );
  }
}

export default new App().app;
