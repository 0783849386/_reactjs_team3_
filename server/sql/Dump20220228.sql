CREATE DATABASE db_team3;

USE db_team3;

CREATE TABLE user(
	UserID CHAR(5) PRIMARY KEY,
	Fullname NVARCHAR(50),
	Email VARCHAR(50),
	Password varchar(200),
	Birthdate DATE,
	FLdate DATETIME,
	LLDate DATETIME,
	Admin TINYINT(1),
	StatusUser VARCHAR(20),
`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);
 
CREATE TABLE country(
	CountryID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	CountryName VARCHAR(50),
`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE city(
	CityID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	CityName VARCHAR(50),
	Depends	INT,
`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE district(
	DistrictID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	DistrictName VARCHAR(50),
	Depends	INT,
`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE wards(
	WardsID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	WardsName VARCHAR(50),
	Depends	INT,
`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- INSERT USER
-- TRUNCATE TABLE user;

INSERT INTO user (UserID, Fullname, Email, Password, Birthdate, FLdate, LLdate, Admin, StatusUser) 
VALUES ("001", "Nguyễn Văn A", "nva@gmail.com", "123", "1990-01-01" , "1/1/22 14:00", "1/1/22 17:00", 0, "Inactive"),
				("002", "Nguyễn Văn A", "nva@gmail.com", "123", "1990-01-01" , "1/1/22 14:00", "1/1/22 17:00", 0, "Active"),
				("003", "Nguyễn Văn B", "nva@gmail.com", "123", "1990-01-01" , "1/1/22 14:00", "1/1/22 17:00", 1, "Inactive"),
				("004", "Nguyễn Văn C", "nva@gmail.com", "123", "1990-01-01" , "1/1/22 14:00", "1/1/22 17:00", 0, "Active") ,
				("005", "Nguyễn Văn D", "nva@gmail.com", "123", "1990-01-01" , "1/1/22 14:00", "1/1/22 17:00", 0, "Active") ,
				("006", "Nguyễn Văn E", "nva@gmail.com", "123", "1990-01-01" , "1/1/22 14:00", "1/1/22 17:00", 0, "Active") ,
				("007", "Nguyễn Văn F", "nva@gmail.com", "123", "1990-01-01" , "1/1/22 14:00", "1/1/22 17:00", 0, "Active") ,
				("008", "Nguyễn Văn A", "nva@gmail.com", "123", "1990-01-01" , "1/1/22 14:00", "1/1/22 17:00", 0, "Inactive") ,
				("009", "Nguyễn Văn H", "nva@gmail.com","123",  "1990-01-01" , "1/1/22 14:00", "1/1/22 17:00", 0, "Inactive") 
;

-- INSERT ADDRESS
INSERT INTO country (CountryName)
VALUES ("VN"),
				("country 1"),
				("country 2")
;

INSERT INTO city (CityName, Depends)
VALUES ("city 11", 1),
				("city 12", 1),
				("city 21", 2),
				("city 22", 2),
				("city 31", 3),
				("city 32", 3)
;

INSERT INTO district (DistrictName, Depends)
VALUES ("district 111", 1),
				("district 112", 1),
				("district 121", 2),
				("district 122", 2),
				("district 131", 3),
				("district 132", 3),
				("district 141", 4),
				("district 151", 5),
				("district 161", 6)
;

INSERT INTO wards (WardsName, Depends)
VALUES ("wards 1111", 1),
				("wards 1112", 1),
				("wards 1121", 2),
				("wards 1131", 3),
				("wards 1132", 3),
				("wards 1141", 4),
				("wards 1151", 5),
				("wards 1161", 6),
				("wards 1162", 6),
				("wards 1171", 7),
				("wards 1181", 8),
				("wards 1182", 8),
				("wards 1191", 9),
				("wards 1192", 9)
;

delimiter $
create procedure allAddress(
)
begin
	SELECT CountryID, CountryName, CityID, CityName, DistrictID, DistrictName, WardsID, WardsName
	FROM country as ct, city as c, district as d, wards as w
	WHERE ct.CountryID = c.depends
	AND c.CityID = d.depends
	AND d.DistrictID = w.depends
	ORDER BY CountryID, CityID, DistrictID, WardsID;
end$
delimiter ;

-- drop procedure alladress
