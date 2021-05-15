if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
} else {
  console.log("Running in PRODUCTION");
}
const app = require("./src/app");
const http = require("http");
const chalk = require("chalk");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.info(chalk`{green Started Server on port ${PORT}}`);
  console.info(
    chalk`{green Rolled out with {red ❤️} by Kavii Suri - Black Marbles Tech}`
  );
});
