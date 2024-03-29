package com.example.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.crm.model.EntidadeFilantropica;

@Repository
public interface EntidadeFilantropicaRepository extends JpaRepository<EntidadeFilantropica, Long> {

}
