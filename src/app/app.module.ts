import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { MainComponent } from './componentes/main/main.component';
import { NotasCriadasComponent } from './componentes/notas-criadas/notas-criadas.component';
import { CriarNotaComponent } from './componentes/criar-nota/criar-nota.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { ExcluirNotaComponent } from './componentes/excluir-nota/excluir-nota.component';
import { SalvarNotaComponent } from './componentes/salvar-nota/salvar-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MainComponent,
    NotasCriadasComponent,
    CriarNotaComponent,
    EditarComponent,
    ExcluirNotaComponent,
    SalvarNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
