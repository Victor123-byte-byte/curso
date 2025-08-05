CREATE TABLE curso_de_programacion (
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    genero VARCHAR(100),
    edad VARCHAR(100),
    Estado_civil VARCHAR(100)
);

INSERT INTO curso_de_programacion (nombre, apellido, genero, edad, Estado_civil) VALUES

('Victor', 'Pimentel', 'Masculino', 'Sin chamba','Soltero');

ALTER TABLE curso_de_programacion
ADD COLUMN profecion VARCHAR(150);


ALTER TABLE curso_de_programacion
DROP COLUMN edad;