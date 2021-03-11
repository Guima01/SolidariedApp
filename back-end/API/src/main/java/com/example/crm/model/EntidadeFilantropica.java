package com.example.crm.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class EntidadeFilantropica extends User {

	@Column
	private String cnpj ;
	@Column
	private String agencia;
	@Column
	private String conta ;
	@Column
	private String categoria;
	
	
	public String getCnpj() {
		return cnpj;
	}
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	public String getAgencia() {
		return agencia;
	}
	public void setAgencia(String agencia) {
		this.agencia = agencia;
	}
	public String getConta() {
		return conta;
	}
	public void setConta(String conta) {
		this.conta = conta;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	
	
	
}
