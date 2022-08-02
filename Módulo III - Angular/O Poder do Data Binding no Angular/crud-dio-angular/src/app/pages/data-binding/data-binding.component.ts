import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  text = 'Rafael Bidetti'
  imageUrl = 'https://picsum.photos/300/300';
  imageDesc = 'uma imagem';
  buttonText = 'Clique aqui'; 
  textRed = 'textred';
  bgColor = 'green';
  fontSize = '20px';
  widthImg = 600;
  textInput = '';
  number = 0;
  destroy = false;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.text;
  }

  clicou(value: any) {
    console.log(`clicou aqui`, value)
  }

  clicouNoFilho(text: string) {
    console.log(text)
  }

  incrementa(){
    this.number++;
  }

  destroeComponente() {
    this.destroy = true
  }
}
