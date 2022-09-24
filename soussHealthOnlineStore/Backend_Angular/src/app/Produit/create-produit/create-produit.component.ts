import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/produit-service/produit.service';

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export class CreateProduitComponent implements OnInit {
  
  
produit: Produit = new Produit();
constructor(private produitService: ProduitService, 
  private router: Router) { }

ngOnInit(): void {
}

saveProduit(){
this.produitService.createProduit(this.produit).subscribe(data => {
console.log(data);
this.goToProduitList();

},
error => console.log(error));
}

goToProduitList(){
  this.router.navigate(['/produits']);

}

onSubmit(){
  console.log(this.produit);
  this.saveProduit()
  this.goToProduitList();

}
}