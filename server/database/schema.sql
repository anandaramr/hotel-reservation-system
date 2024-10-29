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
    createdAt datetime not null default (CURRENT_TIMESTAMP())
);

create table Tokens(
    token varchar(512) primary key not null
);

create table Rooms (
    roomNo int primary key not null,
    roomType enum('single', 'double', 'deluxe', 'suite', 'family') not null,
    isAc boolean,
    pricePerNight int unsigned not null
);

create table Orders (
    orderId int unsigned primary key auto_increment,
    userId int unsigned not null,
    roomNo int not null,
    totalPrice int unsigned not null,
    createdAt datetime not null default NOW(),
    startDate date not null default (CURRENT_DATE()),
    expiryDate date not null,
    cancelled datetime,
    foreign key(userId) references Users(userId),
    foreign key(roomNo) references Rooms(roomNo)
);

create table Reviews (
    userId int unsigned primary key unique,
    text varchar(255) not null,
    createdAt datetime not null default NOW(),
    foreign key(userId) references Users(userId)
);

create table Menu (
    itemId int unsigned primary key auto_increment,
    itemName varchar(255) not null,
    itemType enum('beverage', 'starter', 'rice', 'bread', 'dessert', 'salad', 'soup') not null,
    isVeg boolean,
    isAvailable boolean default true
);