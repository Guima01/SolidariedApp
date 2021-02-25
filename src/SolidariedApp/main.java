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
public class main {
    
    public static void main(String[] args) {
        List<PessoaFisica> pessoas = new ArrayList<>();
        List<CategoriasDoacao> categorias = new ArrayList<>();
        PessoaFisica pessoa = new PessoaFisica();
        pessoa.setNome("guimamada");
        pessoas.add(pessoa);
        System.out.println(pessoas.get(0).getNome());
        
    }
  
}
