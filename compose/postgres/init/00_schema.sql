GRANT ALL PRIVILEGES ON DATABASE local_db TO local_user;

\c local_db;

DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
  id serial NOT NULL,
	title varchar(40) NOT NULL,
  completed_at timestamp NULL,
	created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at timestamp NULL,
	deleted_at timestamp NULL,
  PRIMARY KEY (id)
);

CREATE OR REPLACE FUNCTION update_by_current_timestamp() RETURNS TRIGGER AS
$$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

CREATE TRIGGER update_todos_updated_at
  BEFORE UPDATE ON todos
  FOR EACH ROW
  EXECUTE PROCEDURE update_by_current_timestamp();
