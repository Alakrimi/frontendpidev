import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogueService } from '../catalogue.service';
import { Catalogue } from '../catalogue.model';

@Component({
  selector: 'app-catalogue-edit',
  templateUrl: './catalogue-edit.component.html',
  styleUrl: './catalogue-edit.component.css'
})
export class CatalogueEditComponent implements OnInit {
  catalogueForm!: FormGroup;
  catalogueId!: number;
  dateCreation!: Date;
  

  constructor(
    
    private fb: FormBuilder,
    private catalogueService: CatalogueService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Récupérez l'identifiant du catalogue depuis la route
   // this.catalogueId = +this.route.snapshot.paramMap.get('id');
   const idParam = this.route.snapshot.paramMap.get('id');
      if (idParam !== null) {
           this.catalogueId = +idParam;
} else {
  
  // Gérer le cas où 'id' est null
  // Vous pouvez afficher un message d'erreur ou rediriger l'utilisateur, par exemple
}

    // Initialisez le formulaire et chargez les détails du catalogue à éditer
   this.initForm();
    this.loadCatalogueDetails();
  }

  initForm(): void {
    this.catalogueForm = this.fb.group({
      nom_catalogue: ['', Validators.required],
      descriptionC: ['', Validators.required],
      date_modification: [new Date()],
      
      
      // Autres champs du formulaire
    });
  }

  loadCatalogueDetails(): void {
    // Chargez les détails du catalogue à éditer en fonction de l'identifiant
    this.catalogueService.getCatalogueById(this.catalogueId).subscribe(
      (catalogue: Catalogue) => {
        this.dateCreation = catalogue.date_creation; 
        // Pré-remplissez le formulaire avec les détails du catalogue
        this.catalogueForm.patchValue({
          nom_catalogue: catalogue.nom_catalogue,
          descriptionC: catalogue.descriptionC,
          date_modification: catalogue.date_modification,
          
          // Pré-remplissez d'autres champs du formulaire si nécessaire
        });
      },
      error => {
        console.error('Error loading catalogue details:', error);
        // Gérez l'erreur, par exemple, redirigez l'utilisateur vers une page d'erreur
      }
    );
  }

  onSubmit(): void {
    if (this.catalogueForm.valid) {
      const formData = this.catalogueForm.value;
      formData.date_creation = this.dateCreation;
      // Envoyez la requête de mise à jour avec l'identifiant du catalogue
      this.catalogueService.updateCatalogue(this.catalogueId, formData).subscribe(
        (updatedCatalogue: Catalogue) => {
          console.log('Catalogue updated successfully!', updatedCatalogue);
          // Redirigez l'utilisateur vers  du catalogue mis à jour ou une autre page appropriée
          this.router.navigate(['/catalogues-list']);

          
        },
        error => {
          console.error('Error updating catalogue:', error);
          // Gérez l'erreur, par exemple, affichez un message d'erreur à l'utilisateur
        }
      );
    } else {
      // Affichez un message d'erreur ou effectuez une autre action si le formulaire n'est pas valide
    }
  }

}
