export class Category{ 
    id ?: number; // Facultatif pour permettre l'auto-génération
    title !: string;
    image ?: string;
    description !: string;
    available !: boolean;
    prix !: number;
}
    