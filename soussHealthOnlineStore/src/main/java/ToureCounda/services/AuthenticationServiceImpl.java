package ToureCounda.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ToureCounda.entities.Users;
import ToureCounda.repositories.AppRoleRepository;
import ToureCounda.repositories.UsersRepository;



@Service
@Transactional
public class AuthenticationServiceImpl implements AuthenticationService {

	@Autowired
	 UsersRepository userRepository;
	
	@Autowired
	 AppRoleRepository repositroy;


	
	@Override
	public Users loadUserByUserName(String username) {
		return userRepository.findByUsername(username);
	}

	
	

}
