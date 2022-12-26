import { Categories } from "./categories";

export class Produit {
    id!:number;
    nomp!: string;
    prix!:number;
    quantite!:number;
    image!: string;
    categories!:Categories;
}
