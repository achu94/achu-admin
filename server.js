const express = require("express");
const cors    = require("cors");
const cookieSessions = require("cookie-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const {COOKIE_SECRET, PORT, COOKIE_NAME} = require("./config/config");
const routes = require("./routes");
const isAuth = require("./middleware/isAuth");
const errorHandler = require('./middleware/errorHandler');

const app = express();

const corsOPtions = { origin: 'http://localhost:3000' };
app.use(cors(corsOPtions));

app.use(bodyParser.json());
app.use(cookieParser());

app.use(
    cookieSessions({
        name: COOKIE_NAME,
        secret: COOKIE_SECRET,
        httpOnly: true,
    })
);

// app.use(express.static('./client/build'));

require('./config/mongoose').connect();

// app.use("/", isAuth);
app.use("/api", routes);
app.use(errorHandler);

app.listen(PORT || 3001, () => console.log(`Server is running on port ${PORT}...`));
