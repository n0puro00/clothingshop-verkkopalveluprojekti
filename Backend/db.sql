    drop database if exists webshop;

    create database webshop;
    
    use webshop;
    
    drop table if exists customer;
    create table customer (
    id int primary key AUTO_INCREMENT,
    firstname varchar(100) not null,
    lastname varchar(100) not null,
    address varchar(100) not null,
    zip varchar(20) not null,
    city varchar(50) not null
    );
    
    drop table if exists `order`;

    create table `order` (
        id int primary key AUTO_INCREMENT,
        order_date timestamp default CURRENT_TIMESTAMP,
        customer_id int not null,
        index customer_id(customer_id),
        foreign key (customer_id) references customer(id)
        on delete restrict
    );

    
    drop table if exists category;
    create table category (
        id int primary key auto_increment,
        name varchar(255) not null
    );
    
    insert into category (name) values ('Hats');
    insert into category (name) values ('Shirts');
    insert into category (name) values ('Pants');
    insert into category (name) values ('Shoes');
    
    drop table if exists product;
    create table product (
        id int PRIMARY key AUTO_INCREMENT,
        name varchar(100) not null,
        price double (10,2) not null,
        image varchar(50),
        category_id int not null,
        index category_id(category_id),
        FOREIGN KEY (category_id) REFERENCES category(id)
        on delete restrict
    );
 
    drop table if exists order_row;

    create table order_row(
    order_id int not null,
    index order_id(order_id),
    foreign key (order_id) REFERENCES `order`(id),
    product_id int not null,
    index product_id(product_id),
    foreign key (product_id) references product(id),
    amount INTEGER
    );
    
    insert into product (name, price, image, category_id) values ('Hat 1',10,'hat1.jpg',1);
    insert into product (name, price, image, category_id) values ('Hat 2',15,'hat2.jpg',1);
    insert into product (name, price, image, category_id) values ('Hat 3',12,'hat3.jpg',1);
    insert into product (name, price, image, category_id) values ('Hat 4',20,'hat4.jpg',1);

    insert into product (name, price, image, category_id) values ('Shirt 1',20,'shirt1.jpg',2);
    insert into product (name, price, image, category_id) values ('Shirt 2',25,'shirt2.jpg',2);
    insert into product (name, price, image, category_id) values ('Shirt 3',30,'shirt3.jpg',2);
    insert into product (name, price, image, category_id) values ('Shirt 4',45,'shirt4.jpg',2);

    insert into product (name, price, image, category_id) values ('Pants 1',45,'pants1.jpg',3);
    insert into product (name, price, image, category_id) values ('Pants 2',45,'pants2.jpg',3);
    insert into product (name, price, image, category_id) values ('Pants 3',45,'pants3.jpg',3);
    insert into product (name, price, image, category_id) values ('Pants 4',45,'pants4.jpg',3);

    insert into product (name, price, image, category_id) values ('Shoes 1',45,'shoes1.jpg',4);
    insert into product (name, price, image, category_id) values ('Shoes 2',50,'shoes2.jpg',4);
    insert into product (name, price, image, category_id) values ('Shoes 3',30,'shoes3.jpg',4);
    insert into product (name, price, image, category_id) values ('Shoes 4',40,'shoes4.jpg',4);
    
