
import { Component, Input } from '@angular/core';
import { Nota } from '../nota';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  semNotas:string = "Não há notas";

  listaNotas:Nota[] = [
    {
      titulo: "BBB",
      conteudo: "DEU CERTO",
      tipo: "tipo2"
    },
    {
      titulo: "BBB",
      conteudo: "DEU CERTO",
      tipo: "tipo2"
    },
    {
      titulo: "BBB",
      conteudo: "DEU CERTO",
      tipo: "tipo2"
    },
  ];

}
