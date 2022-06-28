const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/config") || 3001;
const routes = require("./routes");
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(bodyParser.json());

require('./config/mongoose').connect();
require('./config/mongoose').db_switch('hm_trockenbau');

app.use("/api", routes);
// app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
