import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { CreateProduitComponent } from './Produit/create-produit/create-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [

{path: 'users', component: UserListComponent},
{path: 'create-user', component: CreateUserComponent},
{path:'',redirectTo: 'users', pathMatch: 'full'},
{path: 'update-user/:id', component: UpdateUserComponent},
{path: 'user-details/:id', component: UserDetailsComponent},
{path: 'create-produit', component: CreateProduitComponent},
{path: 'produits',component: ProduitListComponent},
{path: 'update-produit/:id', component: UpdateProduitComponent},
{path: 'create-categorie',component: CreateCategorieComponent},
{path: 'categories', component: CategorieListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
