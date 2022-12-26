import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits: Produit[]=[];
  constructor(private produitService: ProduitService) { }
  
  set mot(ch:string){
    if(ch!=""){
      this.produits=this.filtrer(ch.toUpperCase())
    }else{
      this.produitService.getProduits().subscribe(response => this.produits = response);
    }
  }
  filtrer(c:string){
    return this.produits.filter(x=>x.nomp.toUpperCase().indexOf(c)!=-1)
  }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe(response => this.produits = response);
  }

  supprimerProduit(id: number){
    this.produitService.supprimerProduit(id).subscribe(response => {this.produits = this.produits.filter(produit =>produit.id !=id)});
  }
}
