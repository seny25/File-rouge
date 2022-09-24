package ToureCounda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ToureCounda.entities.Admins;


@Repository
public interface AdminsRepositroy extends JpaRepository<Admins, Long>{

}
