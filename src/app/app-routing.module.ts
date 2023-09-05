import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CriarNotaComponent } from './componentes/criar-nota/criar-nota.component';

const routes: Routes = [
  {
    path:'home',
    component: MainComponent
  },
  {
    path: 'criar-nota',
    component: CriarNotaComponent
  },
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
