package ToureCounda.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ToureCounda.entities.Command;
import ToureCounda.repositories.ClientRepository;
import ToureCounda.repositories.CommandRepository;
import ToureCounda.repositories.ProduitRepository;



@Service
@Transactional
public class CommandServiceImpl implements DaoService<Command> {
	
	@Autowired
	CommandRepository repository;
	
	@Autowired
	ClientRepository clientRepository;
	
	@Autowired
	ProduitRepository produitRepository;
	
	@Override
	public void save(Command command) {
repository.save(command);		
	}
	
	@Override
	public void update(Command command) {
		repository.save(command);		
	}


	@Override
	public void delete(Long id) {
repository.deleteById(id);	
	}
 
	@Override
	public Command findById(Long id) {
		return repository.findById(id).get();
	}

	@Override
	public List<Command> getAll() {
		return (List<Command>)repository.findAll();
	}


	


	
	

}
