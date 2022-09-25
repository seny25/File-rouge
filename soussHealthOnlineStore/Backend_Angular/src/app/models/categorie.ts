import { Produit } from "./produit";

export class Categorie {
    categoryId!: number;
    name!: string;
    descriptif!: string;
    produits!: Produit[];
}
