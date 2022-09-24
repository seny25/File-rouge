import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  private baseURL = "http://localhost:8080/produit";
  constructor(private httpClient: HttpClient) { }

getProduitList():Observable<Produit[]>{

  return this.httpClient.get<Produit[]>(`${this.baseURL}`);
}

createProduit(produit:Produit): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, produit);
}

getProduitById(produitId: number): Observable<Produit>{
  return this.httpClient.get<Produit>(`${this.baseURL}/${produitId}`);
}

updateProduit(produitId:number, produit: Produit): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${produitId}`,produit);
}

deleteProduit(produitId: number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${produitId}`);

}
}