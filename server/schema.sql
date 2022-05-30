CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nickname varchar(255),
  password varchar(255),
  profile_img IMAGE,
  questions_id INT,
  answers_id INT,
  studygroup_id INT

);

CREATE TABLE questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  school char(20 char),
  grade char(5 char),
  subject char(5 char),
  title char(30 char),
  content varchar(255),
  qanswers_id int,

);

CREATE TABLE answers (
  id int AUTO_INCREMENT PRIMARY KEY,
  title char(30 char),
  content varchar(255),

);

CREATE TABLE studygroup (
  id int AUTO_INCREMENT PRIMARY KEY,
  groupname char(30 char),
  school char(20 char),
  grade char(5 char),
  subject char(5 char),
  content varchar(255),

);

CREATE TABLE users_studygroup (
  id int AUTO_INCREMENT PRIMARY KEY,
  users_id int,
  studygroups_id int
)
ALTER TABLE users ADD FOREIGN KEY (questions_id) REFERENCES questions (id);
ALTER TABLE users ADD FOREIGN KEY (answers_id) REFERENCES answers (id);
ALTER TABLE users ADD FOREIGN KEY (studygroup_id) REFERENCES users_studygroup (users_id);
ALTER TABLE questions ADD FOREIGN KEY (qanswers_id) REFERENCES answers (id);
ALTER TABLE studygroup ADD FOREIGN KEY (id) REFERENCES users_studygroup (studygroups_id);