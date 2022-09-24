package ToureCounda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ToureCounda.entities.Command;


@Repository
public interface CommandRepository extends JpaRepository<Command, Long>{

}
