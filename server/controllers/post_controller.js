module.exports = {
  getAllPosts: (req, res) => {
    const db = req.app.get("db");
    const { userposts } = req.body;
    const { search } = req.query;
    const { id } = req.params;
    if (search !== "" && userposts) {
      return db.post.get_searched_posts([search]).then(resp => {
        res.status(200).send(resp);
      });
    } else if (search == "" && !userposts) {
      return db.post.get_other_user_posts([id]).then(resp => {
        res.status(200).send(resp);
      });
    } else if (search !== "" && !userposts) {
      return db.post.get_searched_other_user_posts([id, search]).then(resp => {
        res.status(200).send(resp);
      });
    } else {
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
