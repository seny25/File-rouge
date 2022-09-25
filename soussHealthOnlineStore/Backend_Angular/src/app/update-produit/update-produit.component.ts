import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../models/produit';
import { ProduitService } from '../produit-service/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  
  

  produitId!: number;
  produit: Produit = new Produit();
  constructor(private PS: ProduitService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.produitId = this.route.snapshot.params['id'];
    this.PS.getProduitById(this.produitId).subscribe(data =>{
      this.produit = data;
    },error => console.log(error));
    
    }
   
    onSubmit(){
      this.PS.updateProduit(this.produitId, this.produit).subscribe(data =>{
        this.goToProduitList();
      },
         error => console.log(error));
     
  
    }

    goToProduitList(){
      this.router.navigate(['/produits']);
  
    }
  }
