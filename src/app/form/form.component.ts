import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  titulo: string = 'cadastro de cursos';
  data: Date = new Date();

  curso: any = {
    nome:null,
    id: null
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(Form){

    console.log(Form);

  }

}
