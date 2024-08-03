-- apps/api/db/schema.sql

CREATE TABLE todos (
	id int NOT NULL AUTO_INCREMENT,
	title varchar(40) NOT NULL,
  completed_at timestamp NULL,
	created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at timestamp NULL ON UPDATE CURRENT_TIMESTAMP,
	deleted_at timestamp NULL,
  PRIMARY KEY (id)
);
