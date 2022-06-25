const express = require("express");

const { PORT } = require("./config/config") || 3001;
const routes = require("./routes");

const app = express();

require('./config/mongoose').connect();
require('./config/mongoose').db_switch('hm_trockenbau');

app.use("/api", routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
