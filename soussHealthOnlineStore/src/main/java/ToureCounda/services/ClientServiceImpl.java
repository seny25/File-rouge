package ToureCounda.services;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ToureCounda.entities.Client;
import ToureCounda.repositories.AppRoleRepository;
import ToureCounda.repositories.ClientRepository;




@Service
@Transactional
public class ClientServiceImpl implements DaoService<Client> {@Autowired
	private PasswordEncoder passwordEncoder;

@Autowired 
private AppRoleRepository roleRepo;


@Autowired
private ClientRepository clientRepository;

@Override
public void save(Client Client) {
	String password = Client.getPassword();
	Client.setPassword(passwordEncoder.encode(password));
	clientRepository.save(Client);		
}

@Override
public void update(Client Client) {
	clientRepository.save(Client);		
}


@Override
public void delete(Long id) {
	clientRepository.deleteById(id);	
}

@Override
public Client findById(Long id) {
	return clientRepository.findById(id).get();
}



@Override
public List<Client> getAll() {
	return (List<Client>)clientRepository.findAll();
}


public Client loadUserByUserName(String username) {
	return clientRepository.findByUsername(username);
}




public Client registerDefaultClient(Client client) {
String password = client.getPassword();
client.setPassword(passwordEncoder.encode(password));
	
    client.setAppRoles(Arrays.asList(roleRepo.findByRoleName("CLIENT")));
    return clientRepository.save(client);
}
}
