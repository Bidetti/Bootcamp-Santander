import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text = 'Hello World!';
  date = new Date;
  pessoa = {
    nome: 'Rafael',
    idade: '18',
    profissao: 'Estudante'
  }
  nomes = ['Ivonaldo']

  constructor(private upperCadsePipe: UpperCasePipe) { }

  ngOnInit(): void {
    this.text = this.upperCadsePipe.transform(this.text)
  }

  mudaValor() {
    this.number = 123456789
  }

  add(text: string) {
    this.nomes.push(text);
  }

}
