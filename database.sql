-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "items" (
	"id" serial primary key,
	"name" varchar(80) not null,
	"quantity" decimal not null,
	"unit" varchar(20)
);

INSERT INTO items ("name", "quantity", "unit")
VALUES ('green beans', '3', 'bushel');
