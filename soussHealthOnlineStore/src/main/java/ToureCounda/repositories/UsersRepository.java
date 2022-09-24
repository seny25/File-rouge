package ToureCounda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ToureCounda.entities.Users;


@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {

	
	Users findByUsername(String username);

	


}
