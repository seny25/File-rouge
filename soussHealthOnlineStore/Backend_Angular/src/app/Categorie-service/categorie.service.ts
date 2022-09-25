import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  
  private baseURL = "http://localhost:8080/categorie";
  constructor(private httpClient: HttpClient) { }

getCategorieList():Observable<Categorie[]>{

  return this.httpClient.get<Categorie[]>(`${this.baseURL}`);
}

createCategorie(categorie:Categorie): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, categorie);
}

getCategorieById(categoryId: number): Observable<Categorie>{
  return this.httpClient.get<Categorie>(`${this.baseURL}/${categoryId}`);
}

updateCategorie(categoryId:number, categorie: Categorie): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${categoryId}`,categorie);
}

deleteCategorie(categoryId: number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${categoryId}`);

}
}