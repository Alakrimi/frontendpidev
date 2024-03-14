import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalogue } from './catalogue.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private apiUrl = "http://localhost:8081/api/catalogues"; 
                                    

  constructor(private http: HttpClient) { }
   // Méthode pour récupérer la liste des catalogues depuis l'API
   getCatalogues(): Observable<Catalogue[]> {
    return this.http.get<Catalogue[]>(this.apiUrl);
  }
  // Méthode pour récupérer un catalogue par son identifiant
  getCatalogueById(id: number): Observable<Catalogue> {
    return this.http.get<Catalogue>(`${this.apiUrl}/${id}`);
  }
  // Méthode pour créer un nouveau catalogue
  createCatalogue(catalogue: any): Observable<any> {
    return this.http.post(this.apiUrl,catalogue);
      
  }

 // getAllCatalogues(): Observable<Catalogue[]> {
   // return this.http.get<Catalogue[]>(this.apiUrl);
  //}
   
   // Méthode pour mettre à jour un catalogue existant
   updateCatalogue(id: number,catalogue: Catalogue): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, catalogue)
      
  }

   // Méthode pour supprimer un catalogue
   deleteCatalogue(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
      
  }

}
