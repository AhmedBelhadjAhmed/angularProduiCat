import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from 'src/app/models/categories';
import { CategorieService } from 'src/app/services/categorie.service';
@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {
  Category : Categories= new Categories();
  categories: Categories[]=[];
  constructor(private categorieService: CategorieService,private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.categorieService.getCategories().subscribe(response => this.categories = response);
    this.activatedRoute.params.subscribe(params => {
      let id:number = params['id'];
      id = this.activatedRoute.snapshot.params['id'];
      if(id){
        this.categorieService.getCategorie(id).subscribe(response => this.Category= response);
      }
    })
  }
  ajouter(f:NgForm){
    this.creerCategorie()
  }
  creerCategorie(){
    this.categorieService.creerCategorie(this.Category).subscribe(response => this.router.navigate(['categories']));
  }

  editCategorie(){
    this.categorieService.editCategorie(this.Category).subscribe(rsponse=>  this.router.navigate(['categories']))
  }
}
