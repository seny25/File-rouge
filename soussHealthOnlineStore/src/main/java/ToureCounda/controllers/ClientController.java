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

import ToureCounda.entities.Client;
import ToureCounda.services.ClientServiceImpl;


@RestController
@EnableAutoConfiguration

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/client")
public class ClientController {

	
	@Autowired
	 private ClientServiceImpl service;
	
	@GetMapping ("/")
	
	public String Home () {
		return ("<h1>Welcom to soussHealthOnlineStore<h1>");
	}
	
	@PostMapping
	
	public String register(@RequestBody Client client) {
		System.out.println(client);
		service.registerDefaultClient(client);
		return "register success";
	}
	
	
	
	
	
	@PutMapping("/update")
	public Client update(@RequestBody Client client  ) {
		service.save(client);
		return client;
	}
	
	
	@GetMapping()
	public List<Client> list(){
		return service.getAll();
		
	}
	
	
//	@GetMapping()
//	
//	public Client findById(@PathVariable Long id) {
//		
//		return service.findById(id);
//	}

	
	@DeleteMapping("/admin/delete/{id}")
	public String delete(@PathVariable (value = "id") Long id) {
		service.delete(id);
		return "Deleted Succesfully id= " +id;
		
	}
}
