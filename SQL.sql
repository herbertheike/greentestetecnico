CREATE TABLE lotes (
	id INT NOT NULL auto_increment primary key
	nome VARCHAR(100),
	ativo BOOLEAN,
	criado_em TIMESTAMP 
);

CREATE TABLE boletos (
	id INT NOT NULL auto_increment primary key
	nome_sacado VARCHAR(255),
	id_lote INT NOT NULL ,
	valor DECIMAL,
	linha_digitavel VARCHAR(255)
	ativo BOOLEAN,
	criado_em TIMESTAMP
    FOREIGN KEY (id_lote) references lotes(id)
);