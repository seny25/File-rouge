import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from '../Categorie-service/categorie.service';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.css']
})
export class CreateCategorieComponent implements OnInit {

  categorie:Categorie = new Categorie();
constructor(private categorieService: CategorieService, 
  private router: Router) { }

ngOnInit(): void {
}

saveCategorie(){
this.categorieService.createCategorie(this.categorie).subscribe(data => {
console.log(data);
this.goToCategorieList();

},
error => console.log(error));
}

goToCategorieList(){
  this.router.navigate(['/categories']);

}

onSubmit(){
  console.log(this.categorie);
  this.saveCategorie()
  this.goToCategorieList();

}
}
