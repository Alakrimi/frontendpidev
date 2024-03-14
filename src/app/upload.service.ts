import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = 'http://localhost:8081/api/upload';

  constructor(private http: HttpClient) { }
  uploadFile(file: File, id: number): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('fichier', file, file.name);
    formData.append('id', id.toString()); // Ajoutez l'ID du catalogue à la requête

    // En-têtes pour le téléchargement du fichier
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post<any>(`${this.apiUrl}/${id}`, formData);
  }
}
  

