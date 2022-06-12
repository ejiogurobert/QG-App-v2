import bodyParser from "body-parser";
import cors from "cors";
import routes from "../routes/v1";

const expressConfig = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.disable("x-powered-by");
  app.use(cors());
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Authorization, Origin, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });
  app.use("/api/v1", routes);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error("Route Not Found");
    err.status = 404;
    next(err);
  });
  // error handlers

  // development error handler
  // will print stacktrace
  app.use((err, req, res, next) =>
    res.status(err.code || 500).json({
      status: err.status,
      code: err.code,
      message: err.message,
      data: err.data,
    })
  );
};

export default expressConfig;
