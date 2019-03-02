module.exports = {
  getAllPosts: (req, res) => {
    const db = req.app.get("db");
    const { search, userposts } = req.query;
    console.log(search, userposts);
    const { id } = req.params;
    if (search !== "" && userposts == "true") {
      // console.log("1");
      return db.post.get_searched_posts([search]).then(resp => {
        res.status(200).send(resp);
      });
    } else if (search == "" && userposts == "false") {
      // console.log("2");
      return db.post.get_other_user_posts([id]).then(resp => {
        res.status(200).send(resp);
      });
    } else if (search !== "" && userposts == "false") {
      // console.log("3");
      return db.post.get_searched_other_user_posts([id, search]).then(resp => {
        res.status(200).send(resp);
      });
    } else if (search == "" && userposts == "true") {
      console.log("4");
      return db.post.get_all_posts().then(resp => {
        res.status(200).send(resp);
      });
    }
  },

  createPost: (req, res) => {
    const db = req.app.get("db");
    const { title, img, content } = req.body;
    const { id } = req.params;

    db.post.create_post([title, img, content]).then(resp => {
      res.status(200).send(resp);
    });
  },

  getPost: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.post.get_post([id]).then(resp => {
      res.status(200).send(resp);
    });
  }
};
