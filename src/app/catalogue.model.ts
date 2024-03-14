export interface Catalogue {
  id_catalogue?: number; // Identifiant du catalogue, peut être optionnel selon votre besoin
  nom_catalogue: string; // Nom du catalogue (obligatoire)
  descriptionC: string; // Description du catalogue (obligatoire)
  date_creation: Date; // Date de création du catalogue (obligatoire)
  date_modification: Date; 
  // Autres champs du modèle de catalogue
}
