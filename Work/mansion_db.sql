DROP DATABASE IF EXISTS Mansion;
CREATE DATABASE Mansion;

USE Mansion;
CREATE TABLE Products(product_id INT AUTO_INCREMENT NOT NULL,
productName VARCHAR(40) ,
location_id INT ,
bedrooms INT NOT NULL,
bathrooms INT NOT NULL,
image VARCHAR(255) NOT NULL,
des_box VARCHAR(1000) NOT NULL,
alt VARCHAR(1000) NOT NULL,
price DECIMAL(10,2),
PRIMARY KEY (product_id)

);

CREATE TABLE Featured (featured_id INT AUTO_INCREMENT NOT NULL,
featuredName VARCHAR(40) ,
image VARCHAR(255) NOT NULL,
alt VARCHAR(1000) NOT NULL,
price VARCHAR(255),
PRIMARY KEY (featured_id)

);

CREATE TABLE Contacts(user_id INT AUTO_INCREMENT NOT NULL,
product_id INT,
firstName VARCHAR(100) NOT NULL,
lastName VARCHAR(100) NOT NULL,
email VARCHAR(255) NOT NULL,
phone VARCHAR(20) NOT NULL,
PRIMARY KEY (user_id)
);
CREATE TABLE HQ(location_id INT NOT NULL,
product_name VARCHAR(100) NOT NULL,
image VARCHAR(255) NOT NULL,
des_box VARCHAR(255) NOT NULL,
PRIMARY KEY (location_id)

);
INSERT INTO Products 
(productName,location_id,image,bedrooms,bathrooms,des_box, alt, price)
VALUES("Beverly Hills, CA",2,"img/house.jpg",10,15,"A spectacular generational estate envisioned by a master who elevates luxury to the next level. This extremely private and very rare nearly 3 acre property is located down a private lane in the most prime section of Beverly Hills. The home has been constructed with the most exquisite taste showcasing rare and decadent materials with sensational views and stunning light quality throughout.","Beverly Hills Mansion", 10000000.00),
("Vail , CO",1, "img/bayarea.jpeg",6,7.5,"Designed with glass view corridors and sliding walls that seamlessly flow the living area into the exterior decks, patios and gardens. Over 6,500 square feet of outdoor heated decks, biometric recognition entry and entertaining roof deck completes this one of a kind residence in Vail Village, providing your own private retreat. Contact us today for more information on this luxurious home.", "Vail Colorado Mansion",45000000.00),
("Seattle, WA", 3,"img/Seattle.jpeg",8,11,"A spectacular generational estate envisioned by a master who elevates luxury to the next level. This extremely private and very rare nearly 3 acre property is located down a private lane in the most prime section of Beverly Hills. The home has been constructed with the most exquisite taste showcasing rare and decadent materials with sensational views and stunning light quality throughout.","Seattle Washington Mansion",10500000.00),
("Denver, CO",1,"img/Vail.jpeg",5,6,"A spectacular generational estate envisioned by a master who elevates luxury to the next level. This extremely private and very rare nearly 3 acre property is located down a private lane in the most prime section of Beverly Hills. The home has been constructed with the most exquisite taste showcasing rare and decadent materials with sensational views and stunning light quality throughout.", "Denver Colorado Mansion",11500000.00),
("San Diego, CA",2,"img/SanDiego.jpeg",9,7,"A spectacular generational estate envisioned by a master who elevates luxury to the next level. This extremely private and very rare nearly 3 acre property is located down a private lane in the most prime section of Beverly Hills. The home has been constructed with the most exquisite taste showcasing rare and decadent materials with sensational views and stunning light quality throughout.","San Diego Mansion",22500000.00),
("Aspen, CO",1,"img/snowCol.jpeg",6,4,"A spectacular generational estate envisioned by a master who elevates luxury to the next level. This extremely private and very rare nearly 3 acre property is located down a private lane in the most prime section of Beverly Hills. The home has been constructed with the most exquisite taste showcasing rare and decadent materials with sensational views and stunning light quality throughout.", "Aspen Mansion",8500000.00);
INSERT INTO Featured
(featuredName,image, alt, price)
VALUES("Beverly Hills, CA", "img/beverlyhills.jpeg","Beverly Hills Mansion","$55,000,000"),
("Seattle, WA", "img/forestSide.jpeg","Seattle Wash Mansion","$10,500,000"),
("Denver, CO", "img/coloHill.jpeg","Denver Co Mansion","$8,000,000"),
("Los Angeles, CA", "img/lahill.jpeg","LA Mansion","$12,000,000");
SELECT * FROM Featured;