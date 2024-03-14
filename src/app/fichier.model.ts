export interface Fichier {

    id_fichier?: number;
    nom_fichier: string;
   contenu: Uint8Array;
   id_catalogue_fichier: number;
}
