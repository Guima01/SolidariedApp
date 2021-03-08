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
public class CategoriasDoacao {
    
    private List<Entidade> entidades = new ArrayList<>();
    private String tipoCategoria;

    /**
     * @return the entidades
     */
    public List<Entidade> getEntidades() {
        return entidades;
    }

    /**
     * @param entidade the entidade to set
     */
    public void setEntidade(Entidade entidade) {
        this.entidades.add(entidade);
    }
    

    /**
     * @return the tipoCategoria
     */
    public String getTipoCategoria() {
        return tipoCategoria;
    }

    /**
     * @param tipoCategoria the tipoCategoria to set
     */
    public void setTipoCategoria(String tipoCategoria) {
        this.tipoCategoria = tipoCategoria;
    }
}
