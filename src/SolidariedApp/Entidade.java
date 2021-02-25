/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package SolidariedApp;
import java.util.*;
/**
 *
 * @author Guima
 */
public class Entidade extends Usuario {
    
    private String cnpj;
    private String categoria;
    private Date dataCriacao;
    private ContaBancaria conta;

    /**
     * @return the cnpj
     */
    public String getCnpj() {
        return cnpj;
    }

    /**
     * @param cnpj the cnpj to set
     */
    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    /**
     * @return the dataCriacao
     */
    public Date getDataCriacao() {
        return dataCriacao;
    }

    /**
     * @param dataCriacao the dataCriacao to set
     */
    public void setDataCriacao(Date dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    /**
     * @return the conta
     */
    public ContaBancaria getConta() {
        return conta;
    }

    /**
     * @param conta the conta to set
     */
    public void setConta(ContaBancaria conta) {
        this.conta = conta;
    }
}
