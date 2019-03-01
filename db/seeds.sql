create table users (
    id serial primary key not null,
    username varchar,
    password varchar,
    profile_pic text
);

create table posts (
    id serial primary key not null,
    title varchar,
    img text,
    content text,
    author_id integer references users (id)
);

insert into users (username, password, profile_pic)
values ('testuser1', 'testpassword1', 'testpic1'), ('testuser2', 'testpassword2', 'testpic2');


insert into posts (title, img, content, author_id)
values ('testtitle1', 'testimg1', 'testcontent1', 1 ), ('testtitle2', 'testimg2', 'testcontent2', 2 ),;









