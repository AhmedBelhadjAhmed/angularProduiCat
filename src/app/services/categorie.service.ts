import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  url:string = 'http://localhost:9696/api/categories'
  constructor(private http:HttpClient ) { }

  getCategories(): Observable<Categories[]>{
    return this.http.get<Categories[]>(this.url+'/categories')
}
creerCategorie(categories:Categories): Observable<Categories>{
  return this.http.post<Categories>(this.url+'/creer',categories);
}
editCategorie(categories:Categories): Observable<Categories>{
  return this.http.put<Categories>(this.url+'/edit/'+categories.id,categories);
}
getCategorie(id:number): Observable<Categories>{
  return this.http.get<Categories>(this.url+'/'+id);
}
supprimercategorie(id:number): Observable<any>{
  return this.http.delete<any>(this.url+("/supprimer/"+id))
}
}
