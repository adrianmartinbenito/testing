import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  suma!:number;
  resta!:number;
  division!:number;
  multiplicacion!:number;


  numerosForm= new FormGroup({
    a: new FormControl,
    b: new FormControl,
  });

  constructor() {
   }

  ngOnInit(): void {
  }

  sumar(): number{
    return parseFloat(this.numerosForm.get("a")?.value)+parseFloat(this.numerosForm.get("b")?.value);
  }
  restar(): number{
    return parseFloat(this.numerosForm.get("a")?.value)-parseFloat(this.numerosForm.get("b")?.value);
  }
  multiplicar(): number{
    return parseInt(this.numerosForm.get("a")?.value)*parseFloat(this.numerosForm.get("b")?.value);
  }
  dividir(): number{
    if(parseFloat(this.numerosForm.get("b")?.value)!=0){
      return parseFloat(this.numerosForm.get("a")?.value)/parseFloat(this.numerosForm.get("b")?.value);
    }
    throw new Error("Non zero Division");

  }
  funcionSumar(){
    if(this.validarInputs()){
      this.suma = this.sumar();
    }else{
      throw new Error("Datos Mal introducidos");
    }

  }
  funcionRestar(){
    if(this.validarInputs()){
      this.resta = this.restar();
    }else{
      throw new Error("Datos Mal introducidos");
    }
  }
  funcionMultiplicar(){
    if(this.validarInputs()){
      this.multiplicacion = this.multiplicar();
    }else{
      throw new Error("Datos Mal introducidos");
    }
  }
  funcionDividir(){
    if(this.validarInputs()){
      this.division = this.dividir();
    }else{
      throw new Error("Datos Mal introducidos");
    }
  }

  validarInputs():Boolean{
    return !isNaN(this.numerosForm.get("a")?.value) && !isNaN(this.numerosForm.get("b")?.value)
  }
}
