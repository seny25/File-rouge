import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from '../Categorie-service/categorie.service';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {
  categories: Categorie[] = [];

  constructor(private categorieService : CategorieService, private router: Router) { }

  ngOnInit(): void {

    this.getCategories();
  }

  private getCategories(){
    this.categorieService.getCategorieList().subscribe(data =>{
      this.categories = data;
    });
  }

  // categorieDetails(categorieId:number){
  //   this.router.navigate(['categorie-details', categorieId]);

  // }

  updateCategorie(categoryId: number){
    this.router.navigate(['update-categorie', categoryId]);
  }
  deleteCategorie (categoryId: number){
    this.categorieService.deleteCategorie(categoryId).subscribe(data =>{
   console.log(data);
      this.getCategories();
    })
  }

  getData(){
    /*this.httpclient.get<UserInterface>("http://localhost:8080/auth/users")*/
  }

}
