import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
//import { CardapioComponent } from './cardapio/cardapio.component';

import { HomeComponent } from "./home/home.component";
import { SobreComponent } from './sobre/sobre.component';


const APP_ROUTES:Routes =[
  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  //{path: 'cardapio', component: CardapioComponent},
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);

@NgModule({
imports: [RouterModule.forRoot(APP_ROUTES)],
exports: [RouterModule]
})
export class AppRoutingModule {}
