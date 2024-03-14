import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogueService } from '../catalogue.service';
import { Catalogue } from '../catalogue.model';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-catalogue-create',
  templateUrl: './catalogue-create.component.html',
  styleUrl: './catalogue-create.component.css'
})
export class CatalogueCreateComponent  implements OnInit {
  catalogueForm!: FormGroup ;
  

  //private catalogueService: CatalogueService
  constructor(private catalogueService: CatalogueService ,private fb:FormBuilder, private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    
    this.catalogueForm = this.fb.group({
      nom_catalogue: ['', Validators.required],
      descriptionC: ['', Validators.required],
      date_creation: ['', Validators.required],
      
      // Autres champs du formulaire
    });
  }
  onSubmit() {
    if (this.catalogueForm.valid) {
      const formData = this.catalogueForm.value;
      this.catalogueService.createCatalogue(formData).subscribe(
        (response: Catalogue) => {
          console.log('Catalogue created successfully!', response);
          this.router.navigate(['/catalogues-list']);
         // this.router.navigateByUrl("/")
          this.catalogueForm.reset(); // Réinitialiser le formulaire après la création
        },
        error => {
          console.error('Error creating catalogue:', error);
        }
      );
    } else {
      // Gérer les cas où le formulaire n'est pas valide
    }
  }
}
