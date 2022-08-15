import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './weather-result/favourites/favourites.component'
import { NavbarComponent } from './weather-result/navbar/navbar.component'


const routes: Routes = [

    {
        path:'favourites',
        component:FavouritesComponent
    },

    {
        path:'results',
        component:NavbarComponent
    },
    {
        path:'',
        component:NavbarComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
