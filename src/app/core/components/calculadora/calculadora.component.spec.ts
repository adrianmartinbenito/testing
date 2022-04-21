import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.numerosForm.setValue({a:2 ,b:4});
  });

  //Validar Funciones
  it('Test suma',() => {
    expect(component.sumar()).toBe(6);
  });

  it('Test resta',() => {
    expect(component.restar()).toBe(-2);
  });

  it('Test multiplicacion',() => {
    expect(component.multiplicar()).toBe(8);
  });

  it('Test division',() => {
    expect(component.dividir()).toBe(0.5);
  });

  //Non Zero Division

  it('Test division',() => {
    component.numerosForm.setValue({a:2 ,b:0});
    expect(function (){
      component.dividir()}).toThrowError("Non zero Division");
  });

  //Validar Inputs
  it('Test inputs validos', () => {
    expect(component.validarInputs()).toBe(true);
  });
  it('Test inputs string', () => {
    component.numerosForm.setValue({a:"hola" ,b:4});
    expect(component.validarInputs()).toBe(false);
  });
  it('Test inputs negativos decimales', () => {
    component.numerosForm.setValue({a:2.2 ,b:-4.2});
    expect(component.validarInputs()).toBe(true);
  });

  //Validar Operacion seleccionada

  it('Test operacion seleccionada suma', async(() => {
    spyOn(component, 'sumar');

    let button = fixture.debugElement.nativeElement.querySelector('.botonSumar');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.sumar).toHaveBeenCalled();
    });
  }));

  it('Test operacion seleccionada resta', async(() => {
    spyOn(component, 'restar');

    let button = fixture.debugElement.nativeElement.querySelector('.botonRestar');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.restar).toHaveBeenCalled();
    });
  }));

  it('Test operacion seleccionada multiplica', async(() => {
    spyOn(component, 'multiplicar');

    let button = fixture.debugElement.nativeElement.querySelector('.botonMultiplicar');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.multiplicar).toHaveBeenCalled();
    });
  }));

  it('Test operacion seleccionada divide', async(() => {
    spyOn(component, 'dividir');

    let button = fixture.debugElement.nativeElement.querySelector('.botonDividir');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.dividir).toHaveBeenCalled();
    });
  }));

  it('Test operacion seleccionada multiplica False', async(() => {
    spyOn(component, 'dividir');

    let button = fixture.debugElement.nativeElement.querySelector('.botonSumar');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.dividir).not.toHaveBeenCalled();
    });
  }));

  //Test Integración

  it('Test integracion',() => {

    component.funcionSumar();
    component.funcionRestar();
    component.funcionMultiplicar();
    component.funcionDividir();
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.resultadoSuma').innerHTML).toBe("6");
    expect(fixture.debugElement.nativeElement.querySelector('.resultadoResta').innerHTML).toBe("-2");
    expect(fixture.debugElement.nativeElement.querySelector('.resultadoMultiplicacion').innerHTML).toBe("8");
    expect(fixture.debugElement.nativeElement.querySelector('.resultadoDivision').innerHTML).toBe("0.5");
  });

});
