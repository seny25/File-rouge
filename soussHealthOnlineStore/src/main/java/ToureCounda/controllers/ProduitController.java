package ToureCounda.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ToureCounda.entities.Produit;
import ToureCounda.services.ProduitServiceImpl;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@EnableAutoConfiguration
@RequestMapping(value = "/produit")
public class ProduitController {
	@Autowired
	ProduitServiceImpl service;
	
	
	
	
	@GetMapping ("/")
	
	public String Home () {
		return ("<h1>Welcom to soussHealthOnlineStore<h1>");
	}
	
	
//	@PreAuthorize("ADMIN")
	@PostMapping
    public Produit save(@RequestBody Produit produit  ) {
		service.save(produit);
		return produit;
	}
	
	@PutMapping("/admin/update")
public Produit update(@RequestBody Produit produit  ) {
		service.save(produit);
		return produit;
	}
	
	@GetMapping()
	public List<Produit> list(){
		return service.getAll();
		
	}
	
	
	@GetMapping("/client/produit/{id}")
	
	public Produit findById(@PathVariable Long id) {
		
		return service.findById(id);
	}

	
	@DeleteMapping("/admin/delete/{id}")
	public String delete(@PathVariable (value = "id") Long id) {
		service.delete(id);
		return "Deleted Succesfully id= " +id;
		
	}
}
