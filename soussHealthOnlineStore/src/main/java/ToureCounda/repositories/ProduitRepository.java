package ToureCounda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ToureCounda.entities.Produit;


@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long>{
	

	
}
