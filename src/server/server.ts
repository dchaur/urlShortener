import app from "./app";
const port = 8000;

app.listen(port, () => {
  console.log("URL Shortener Server started on port", port);
});
