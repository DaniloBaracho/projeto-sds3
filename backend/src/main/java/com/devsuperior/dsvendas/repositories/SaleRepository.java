package com.devsuperior.dsvendas.repositories;

import com.devsuperior.dsvendas.entites.Sale;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale, Long> {

	List<Sale> findAll();

}