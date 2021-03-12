//package com.example.crm.model;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//
//
//@Entity
//public class Doacao {
//	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long id;
//	
//	@Column(nullable = false)
//	private float valor;
//	@Column(nullable = false)
//    private String usuarioDoador;
//	@Column(nullable = false)
//	private String usuarioDestino;
//	
//	
//	
//	public Long getId() {
//		return id;
//	}
//	public void setId(Long id) {
//		this.id = id;
//	}
//	public float getValor() {
//		return valor;
//	}
//	public void setValor(float valor) {
//		this.valor = valor;
//	}
//	public String getUsuarioDoador() {
//		return usuarioDoador;
//	}
//	public void setUsuarioDoador(String usuarioDoador) {
//		this.usuarioDoador = usuarioDoador;
//	}
//	public String getUsuarioDestino() {
//		return usuarioDestino;
//	}
//	public void setUsuarioDestino(String usuarioDestino) {
//		this.usuarioDestino = usuarioDestino;
//	}
//	@Override
//	public int hashCode() {
//		final int prime = 31;
//		int result = 1;
//		result = prime * result + ((id == null) ? 0 : id.hashCode());
//		return result;
//	}
//	
//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		User other = (User) obj;
//		if (id == null) {
//			if (other.getId() != null)
//				return false;
//		} else if (!id.equals(other.getId()))
//			return false;
//		return true;
//	}
//    
//    
//  
//    
//}
