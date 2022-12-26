import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Categories[]=[];
  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.categorieService.getCategories().subscribe(response => this.categories = response )
  }
 
  supprimercategorie(id: number){
    this.categorieService.supprimercategorie(id).subscribe(response => {this.categories = this.categories.filter(categories =>categories.id !=id)});
  }
}
