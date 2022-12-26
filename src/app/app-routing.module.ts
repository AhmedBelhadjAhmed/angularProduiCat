import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesFormComponent } from './components/categories-form/categories-form.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DetailsComponent } from './components/details/details.component';
import { IndexComponent } from './components/index/index.component';
import { ProduitsFormComponent } from './components/produits-form/produits-form.component';
import { ProduitsComponent } from './components/produits/produits.component';

const routes: Routes = [
  {path: 'produits', component:ProduitsComponent},
  {path: 'formulaire', component:ProduitsFormComponent},
  {path: 'formulaire/:id', component:ProduitsFormComponent},
  {path: 'index', component:IndexComponent},
  {path: 'categories', component:CategoriesComponent},
  {path: 'formulairecat', component:CategoriesFormComponent},
  {path: 'formulairecat/:id', component:CategoriesFormComponent},
  {path: 'details/:id', component:DetailsComponent},
  {path:"", redirectTo : "/index",pathMatch :'full'},
  {path:"**", redirectTo : "/index",pathMatch :'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
