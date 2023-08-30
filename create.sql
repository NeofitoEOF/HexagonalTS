drop table hexa.card_transaction;
create table hexa.card_transaction(card_number text, description text, amount numberic, currency text, data timestamp);

insert into hexa.card_transaction (card_number, description, amount, currency, date) values ('1234', 'Mercado Livre', 100, 'BRL', '2023-08-01T0:00:00');
insert into hexa.card_transaction (card_number, description, amount, currency, date) values ('1234', 'AMAZON BR', 200, 'USD', '2023-08-01T10:00:00');
insert into hexa.card_transaction (card_number, description, amount, currency, date) values ('1234', 'Submarino', 10, 'BRL', '2023-08-01T0:00:00');
insert into hexa.card_transaction (card_number, description, amount, currency, date) values ('1234', 'Magazine Luiza', 1000, 'BRL', '2023-07-1T0:00:00');
insert into hexa.card_transaction (card_number, description, amount, currency, date) values ('1234', 'Extra', 800, 'BRL', '2023-06-3T0:00:00');
