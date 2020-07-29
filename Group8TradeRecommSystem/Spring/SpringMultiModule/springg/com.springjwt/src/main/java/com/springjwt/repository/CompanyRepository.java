package com.springjwt.repository;

import com.springjwt.models.Company;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CompanyRepository extends JpaRepository<Company, Long> {
	//List<Company> findByTitleContaining(String c_name);
	
	@Query("select comp from Company comp where comp.username = ?1")
	  List<Company> findByUsername(String username);
	
}
