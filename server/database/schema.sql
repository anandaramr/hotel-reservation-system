create table users(
    userid int unsigned primary key auto_increment,
    username varchar(255) unique not null,
    password varchar(255) not null,
    name varchar(255),
    dob date,
    email varchar(255),
    phone varchar(13),
    address varchar(255),
    gender enum('Male', 'Female', 'Other', 'Prefer Not To Say') default 'Prefer Not To Say',
    createdAt date not null default (CURRENT_DATE())
);

create table Tokens(
    token varchar(512) primary key not null
);