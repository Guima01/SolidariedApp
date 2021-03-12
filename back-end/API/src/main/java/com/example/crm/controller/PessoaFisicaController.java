package com.example.crm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.crm.model.PessoaFisica;
import com.example.crm.repository.PessoaFisicaRepository;

@RestController
@RequestMapping("/pessoaFisica")
public class PessoaFisicaController {

	@Autowired
	private PessoaFisicaRepository pessoaFisicaRepository;
	
	@GetMapping
	public List<PessoaFisica> listar() {
		 return pessoaFisicaRepository.findAll();
	}
	
	
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public PessoaFisica adicionar(@RequestBody PessoaFisica pessoaFisica) {
		return pessoaFisicaRepository.save(pessoaFisica);
	}
}
