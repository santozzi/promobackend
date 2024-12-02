create table users(
  id int primary key auto_increment,
  name varchar(255),
  last_name varchar(255),
  email varchar(255) unique,
  phone varchar(255),
  avatar varchar(255),
  gender varchar(255),
  country varchar(255),
  state varchar(255),
  city varchar(255),
  username varchar(255),
  password varchar(255),
  role varchar(255),

  created_at datetime default(current_timestamp()),
  updated_at datetime default( current_timestamp())
);





