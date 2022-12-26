import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  products!: Produit[] 
  constructor(private ar:ActivatedRoute,private router:Router,
    private service:ProduitService) { }

    produit!:Produit

    ngOnInit(): void {
      let id!:number
      id = this.ar.snapshot.params['id'];
      this.rechercher(id);
    }

    rechercher(id:number)
    {
    this.service.getProduct(id).subscribe(data=>this.produit=data)
    }
    retourner()
    {
     this.router.navigate(['/produits'])
    }



  
}
