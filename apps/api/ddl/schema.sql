CREATE TABLE todos (
  id serial NOT NULL,
	title varchar(40) NOT NULL,
  completed_at timestamp NULL,
	created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at timestamp NULL,
	deleted_at timestamp NULL,
  PRIMARY KEY (id)
);