/*
Entendiendo la tabla

*/

-- Adding values

INSERT INTO products_sa 
( section_id, section_title, chapter_id, chapter_title, item_id, item_title, subitem_id , subitem_title, tariff_fraction ) 

VALUES 
(
	1,
	'animales vivos y productos del reino animal',
	01,
	'animales vivos',
	0101,
	'caballos',
	0101.21,
	'caballos reproductores de raza pura',
	0101.2100
);



UPDATE products_sa
	SET 
	item_id = 0101, 
	item_title='Caballos, asnos, mulos y burdéganos, vivos',
	subitem_id = 0101.00,
	subitem_title = 'caballos',
	tariff_fraction = 0101.0000

WHERE product_sa_id = 1;




UPDATE products_sa
	SET 
	item_title='caballos, asnos, mulos y burdéganos, vivos',

WHERE product_sa_id = 1;