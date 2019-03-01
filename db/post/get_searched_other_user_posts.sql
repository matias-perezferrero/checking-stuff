select posts.title, posts.img, posts.content, users.username, users.profile_pic
from posts, users
where author_id=users.id AND users.id != ${id} AND posts.title LIKE ('%' || ${search} || '%')
order by posts.id asc;

-- select posts.title, posts.img, posts.content, users.username, users.profile_pic
-- from posts, users
-- where author_id=users.id AND users.id !=2 AND posts.title LIKE ('%1%')
-- order by posts.id asc;