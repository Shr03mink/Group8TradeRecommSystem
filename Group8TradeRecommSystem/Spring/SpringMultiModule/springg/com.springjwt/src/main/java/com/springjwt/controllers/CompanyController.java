package com.springjwt.controllers;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springjwt.models.Company;
import com.springjwt.repository.CompanyRepository;
import com.springjwt.security.jwt.AuthTokenFilter;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CompanyController {

	@Autowired
	CompanyRepository CompanyRepository;
	
	@Autowired
	AuthTokenFilter auth;

	@GetMapping("/companies")
	public ResponseEntity<List<Company>> getAllCompanys() {
		try {
			List<Company> Companys = new ArrayList<Company>();
			String username = auth.usern;
			Companys = CompanyRepository.findByUsername(username);

			if (Companys.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(Companys, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/companies/{id}")
	public ResponseEntity<Company> getCompanyById(@PathVariable("id") long id) {
		Optional<Company> CompanyData = CompanyRepository.findById(id);

		if (CompanyData.isPresent()) {
			return new ResponseEntity<>(CompanyData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	
	@PostMapping("/companies")
	public ResponseEntity<Company> createCompany(@RequestBody Company Company) {
		try {
			String un = auth.getU();
			//System.out.println(un);
			Company _Company = CompanyRepository
					.save(new Company(Company.getsymbol(), Company.getOpen(), Company.getPrevious_closed(), Company.getDay_low(), Company.getDay_high(), Company.getPerc_change(),un));
			return new ResponseEntity<>(_Company, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}


	@DeleteMapping("/companies/{id}")
	public ResponseEntity<HttpStatus> deleteCompany(@PathVariable("id") long id) {
		try {
			CompanyRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

	/*@DeleteMapping("/Companys")
	public ResponseEntity<HttpStatus> deleteAllCompanys() {
		try {
			CompanyRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}

	}*/


}
