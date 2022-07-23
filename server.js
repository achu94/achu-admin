const express = require("express");
const cors    = require("cors");
const cookieSessions = require("cookie-session");
const bodyParser = require("body-parser");

const {COOKIE_SECRET, PORT} = require("./config/config");
const routes = require("./routes");
const errorHandler = require('./middleware/errorHandler');

const app = express();

const corsOPtions = { origin: 'http://localhost:3000' };
app.use(cors(corsOPtions));

app.use(bodyParser.json());

app.use(
    cookieSessions({
        name: "session",
        secret: COOKIE_SECRET,
        httpOnly: true,
    })
);

// app.use(express.static('./client/build'));

require('./config/mongoose').connect();
// require('./config/mongoose').db_switch('hm_trockenbau');

app.use("/api", routes);
app.use(errorHandler);

app.listen(PORT || 3001, () => console.log(`Server is running on port ${PORT}...`));
