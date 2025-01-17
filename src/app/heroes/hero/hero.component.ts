import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = "ironman";
  public age: number = 20;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  //metodo
  getHeroDescription(): string{
    return `${this.name} - ${this.age} `;
  }

  changeHeroName(): void
  {
      this.name = "spiderman";
  }

  changeHeroAge(): void
  {
      this.age = 30;
  }

  reset(): void{
    this.name = "ironman";
    this.age = 20;
  }



}
