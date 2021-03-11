package com.example.crm.model;

import javax.persistence.Entity;
import javax.persistence.Column;

@Entity
public class PessoaFisica extends User {
	
	@Column
	private String cpf ;
	@Column
	private String dataNascimento;
	
}
