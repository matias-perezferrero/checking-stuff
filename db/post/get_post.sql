select posts.title, posts.img, posts.content, users.username, users.profile_pic
from posts,users
where author_id=users.id AND posts.id = ${id}

