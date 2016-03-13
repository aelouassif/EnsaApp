create TABLE ensaApp.membres
(
    id int(10) PRIMARY KEY auto_increment,
    prenom char(30),
    nom char(30),
    pseudo char(30),
    password char(30),
    email char(30),
    inscritLe date
);
