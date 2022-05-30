CREATE TABLE users (
  id INT AUTO_INCREMENT,
  user_id varchar(255),
  nickname varchar(255),
  password varchar(255),
  profile varchar(255),
  createdAt datetime,
  updatedAt datetime,
  PRIMARY KEY (id)
);

CREATE TABLE questions (
  id INT AUTO_INCREMENT,
  school varchar(255),
  grade varchar(255),
  subject varchar(255),
  title varchar(255),
  content varchar(255),
  questions_id INT,
  qanswers_id INT,
  createdAt datetime,
  updatedAt datetime,
  PRIMARY KEY (id),
  FOREIGN KEY (questions_id) REFERENCES users (id)
);

CREATE TABLE answers (
  id int AUTO_INCREMENT,
  title varchar(255),
  content varchar(255),
  answers_id INT,
  createdAt datetime,
  updatedAt datetime,  
  PRIMARY KEY (id),
  FOREIGN KEY (answers_id) REFERENCES users (id)
);

CREATE TABLE studygroup (
  id INT AUTO_INCREMENT,
  groupname varchar(255),
  school varchar(255),
  grade varchar(255),
  subject varchar(255),
  content varchar(255),
  createdAt datetime,
  updatedAt datetime,
  PRIMARY KEY (id)
);

CREATE TABLE users_studygroup (
  id INT AUTO_INCREMENT,
  users_id INT,
  studygroups_id INT,
  createdAt datetime,
  updatedAt datetime,
  PRIMARY KEY (id),
  FOREIGN KEY (users_id) REFERENCES users (id),
  FOREIGN KEY (studygroups_id) REFERENCES studygroup (id)
);

