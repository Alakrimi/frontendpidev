import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { CatalogueService } from '../catalogue.service';
import { Catalogue } from '../catalogue.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent  {
  
  idCatalogue: number | undefined;
  selectedFile: File | undefined;

  constructor(private route: ActivatedRoute,private uploadService: UploadService) {
    this.route.params.subscribe(params => {
      this.idCatalogue = params['id']; // Récupérer l'ID du catalogue depuis l'URL
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }
  onSubmit(): void {
    if (this.selectedFile && this.idCatalogue) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('id', this.idCatalogue.toString()); // Ajoutez l'ID du catalogue au formulaire
      this.uploadService.uploadFile(this.selectedFile, this.idCatalogue).subscribe(
        (response) => {
          console.log('Fichier téléchargé et chargé dans la table des fichiers avec succès :', response);
          
        },
        
        (error) => {
          console.error('Erreur lors du téléchargement et du chargement du fichier :', error);
        }
      );
    } else {
      console.log('Aucun fichier sélectionné ou ID du catalogue manquant.');
    }
  }
}
  
 

  


