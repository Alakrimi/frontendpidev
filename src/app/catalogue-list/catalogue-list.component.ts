import { Component, OnInit  } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { Catalogue } from '../catalogue.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.component.html',
  styleUrl: './catalogue-list.component.css'
})
export class CatalogueListComponent implements OnInit {
  catalogues: Catalogue[] = [];
  
  


  constructor(private catalogueService: CatalogueService ,private router: Router) { }

  ngOnInit(): void {
    this.getCatalogues();
    
  }

  getCatalogues(): void {
    this.catalogueService.getCatalogues()
      .subscribe(
        (catalogues: Catalogue[]) => {
          this.catalogues = catalogues;
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la récupération des catalogues :', error);
        }
      );
  }
  redirectToEdit(id?: number):void{
    if(id && !isNaN(id)){
      console.log("id = ",id);
    this.router.navigate(['/edit', id]);
    }
    

  }
  
  supprimerCatalogue(id?: number): void {
    if((id !== undefined))
    this.catalogueService.deleteCatalogue(id).subscribe(
      () => {
        console.log('Catalogue supprimé avec succès.');
        window.location.reload();
      
      }
      
    )
  }





  redirectToCreateCatalogue(): void {
    this.router.navigate(['/create']);
  }
  
  uploadFichier(id?: number): void {
    // Implémentez la logique pour télécharger un fichier pour le catalogue donné
    // Redirigez l'utilisateur vers une autre page pour l'upload ou ouvrez un dialogue de sélection de fichier
    // Assurez-vous de gérer l'ID du catalogue pour ajouter le fichier au bon catalogue
    console.log('Ajouter un fichier pour le catalogue avec ID :', id);
    this.router.navigate(['/upload',id]);
  }
  
}

  
 

