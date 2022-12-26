import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from 'src/app/models/categories';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits-form',
  templateUrl: './produits-form.component.html',
  styleUrls: ['./produits-form.component.css']
})
export class ProduitsFormComponent implements OnInit {
  produit: Produit = new Produit();
  constructor(private produitService: ProduitService,private activatedRoute: ActivatedRoute,private router:Router) { }

  categories: Categories[]=[];

  ngOnInit(): void {
    this.produitService.getCategories().subscribe(response => this.categories = response);

    this.activatedRoute.params.subscribe(params => {
      let id:number = params['id'];
      id = this.activatedRoute.snapshot.params['id'];
      if(id){
        this.produitService.getProduct(id).subscribe(response =>this.produit= response);
      }
    })
  }

  ajouter(f:NgForm){
    this.creeProduit()
  }
  creeProduit(){
    this.produitService.creeProduit(this.produit).subscribe(response => this.router.navigate(['produits']));
  }

  editerProduit(){
    this.produitService.editerProduit(this.produit).subscribe(rsponse=>  this.router.navigate(['produits']))
  }

  comparerCategories(o1 :Categories , o2 :Categories): boolean {
    if(o1 === undefined && o2 === undefined) return true
    return o1===null || o2===null || o1 === undefined || o2 === undefined ? false: o1.id == o2.id ;
  }
}
