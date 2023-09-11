import { Component, Input } from '@angular/core';
import { Nota } from '../nota';

@Component({
  selector: 'app-notas-criadas',
  templateUrl: './notas-criadas.component.html',
  styleUrls: ['./notas-criadas.component.css']
})
export class NotasCriadasComponent {
  @Input() nota:Nota ={
      id: 0,
      titulo: "BBB",
      conteudo: "DEU CERTO",
      tipo: "tipo2"
    };
  tamanhoNota(): string {
    if (this.nota.conteudo.length >= 150) {
      return 'nota-g'
    }
    return 'nota-p'
  }
}
