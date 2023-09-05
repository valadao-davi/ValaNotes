import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notas-criadas',
  templateUrl: './notas-criadas.component.html',
  styleUrls: ['./notas-criadas.component.css']
})
export class NotasCriadasComponent {
  @Input() nota ={
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
