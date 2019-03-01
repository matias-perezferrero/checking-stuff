require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");

//CONTROLLERS
const ac = require("./controllers/auth_controller");
const pc = require("./controllers/post_controller");

//ENV
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

// SESSION
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);

  console.log("Connected to database");
  app.listen(SERVER_PORT, () => console.log(`10-4 ${SERVER_PORT}`));
});

//AUTH ENDPOINTS
app.post("/api/auth/register", ac.register);
app.post("/api/auth/login", ac.login);
app.get("/api/current", ac.getUser);
app.post("/api/auth/logout", ac.logout);

//POST ENDPOINTS
app.get("/api/posts/:userid", pc.getAllPosts);
app.get("/api/post/:postid", pc.getPost);
app.post("/api/post/:userid", pc.createPost);
