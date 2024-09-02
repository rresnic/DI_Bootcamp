SELECT COUNT(*) FROM actors;
INSERT INTO actors (first_name, last_name, birthdate, number_oscars)
VALUES(null, 'Damon','08-10-1970', 5);
-- The above line will fail because any not null fields are empty. It will also fail if the number of columns in values doesn't match the number in the insert portion