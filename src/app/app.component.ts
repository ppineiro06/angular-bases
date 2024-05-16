import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title: string ='Mi primera app de Angular';


  //tambien se puede hacer:
  //increaseBy(value: number): void{
  //this.counter += value;
  //}

  //y en el html ponemos increaseBy(valor a sumar O valor a restar)
  //p.e: increaseBy(-1) resta 1
}
