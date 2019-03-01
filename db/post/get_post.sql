select posts.title, posts.img, posts.content, users.username, users.profile_pic
from posts,users
where  posts.id = $1 && author_id=users.id

