package ToureCounda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ToureCounda.entities.Categorie;

@Repository
public interface CategorieRepositroy extends JpaRepository<Categorie, Long>{

}
