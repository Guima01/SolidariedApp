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

import com.example.crm.model.EntidadeFilantropica;
import com.example.crm.repository.EntidadeFilantropicaRepository;

@RestController
@RequestMapping("/entidadeFilantropica")
public class EntidadeFilantropicaController {

	@Autowired
	private EntidadeFilantropicaRepository entidadeFilantropicaRepository;
	
	@GetMapping
	public List<EntidadeFilantropica> listar() {
		 return entidadeFilantropicaRepository.findAll();
	}
	
	
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public EntidadeFilantropica adicionar(@RequestBody EntidadeFilantropica entidadeFilantropica) {
		return entidadeFilantropicaRepository.save(entidadeFilantropica);
	}
}
