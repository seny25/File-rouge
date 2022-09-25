import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../models/produit';
import { ProduitService } from '../produit-service/produit.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  produits: Produit[] = [];

  constructor(private produitService : ProduitService, private router: Router) { }

  ngOnInit(): void {

    this.getProduits();
  }

  private getProduits(){
    this.produitService.getProduitList().subscribe(data =>{
      this.produits = data;
    });
  }

  produitDetails(produitId:number){
    this.router.navigate(['produits-details', produitId]);

  }


  updateProduit(produitId: number){
    this.router.navigate(['update-produit', produitId]);
  }
  deleteProduit (produitId: number){
    this.produitService.deleteProduit(produitId).subscribe(data =>{
   console.log(data);
      this.getProduits();
    })
  }

  getData(){
    /*this.httpclient.get<UserInterface>("http://localhost:8080/auth/users")*/
  }

}
