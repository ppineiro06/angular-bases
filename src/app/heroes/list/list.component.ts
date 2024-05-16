import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ["Spiderman", "Ironman", "Hulk"];
  public deletedHero?: string;
  //metodo para borrar ultimo heroe
  removeLastHero():void{
    this.deletedHero = this.heroNames.pop(); //pop si no borra nada devuelve undefined

  }
}
