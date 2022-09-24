package ToureCounda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ToureCounda.entities.Client;


@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
	

	Client findByUsername(String username);

}
