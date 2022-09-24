package ToureCounda.services;


import ToureCounda.entities.Users;


public interface AuthenticationService {


	Users loadUserByUserName (String username);

	

	

}