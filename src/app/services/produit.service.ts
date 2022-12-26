import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../models/categories';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
 url:string = 'http://localhost:9696/api/produits'
  constructor(private http:HttpClient ) { }

  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.url+'/list')
  }

  getCategories(): Observable<Categories[]>{
      return this.http.get<Categories[]>(this.url+'/categories')
  }
  creeProduit(produit:Produit): Observable<Produit>{
    return this.http.post<Produit>(this.url+'/creer',produit);
  }

  editerProduit(produit:Produit): Observable<Produit>{
    return this.http.put<Produit>(this.url+'/edit/'+produit.id,produit);
  }

  getProduct(id:number): Observable<Produit>{
    return this.http.get<Produit>(this.url+'/'+id);
  }
  supprimerProduit(id:number): Observable<any>{
    return this.http.delete<any>(this.url+("/supprimer/"+id))
  }
}
