import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateProduitComponent } from './Produit/create-produit/create-produit.component';
import { CreateProduitclearComponent } from './Produit/create-produitclear/create-produitclear.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { CategorieDetailsComponent } from './categorie-details/categorie-details.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    CreateProduitComponent,
    CreateProduitclearComponent,
    ProduitListComponent,
    UpdateProduitComponent,
    CreateCategorieComponent,
    UpdateCategorieComponent,
    CategorieDetailsComponent,
    CategorieListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
