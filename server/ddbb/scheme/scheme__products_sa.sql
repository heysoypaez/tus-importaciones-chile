CREATE TABLE IF NOT EXISTS products_sa (
	product_sa_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,	
	section_id TINYINT(2) UNSIGNED NOT NULL,
	section_title VARCHAR(100) NOT NULL,
	chapter_id TINYINT(3) UNSIGNED NOT NULL,
	chapter_title VARCHAR(100) NOT NULL,
	item_id TINYINT(4) UNSIGNED NOT NULL,
	item_title VARCHAR(100) NOT NULL,
	subitem_id DOUBLE(6,2) NOT NULL,
	subitem_title VARCHAR(100) NOT NULL,
	tariff_fraction DOUBLE(8,4) NOT NULL,
	is_capital_good TINYINT(1) NOT NULL DEFAULT 0,
	capital_good_description VARCHAR(100),
	img_url VARCHAR(500),
	is_active TINYINT(1) NOT NULL DEFAULT 1,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ( section_id, section_title, chapter_id, chapter_title, item_id, item_title, subitem_id , subitem_title, tariff_fraction ) 