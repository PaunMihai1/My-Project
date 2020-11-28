import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cautare',
  template: `
  <input id="imput" (keyup)="search($event)" type="text" value="" min="0" max="5" style="display: inline;" placeholder="Introdu id-ul persoanei">
  <button class="btn btn-primary">Submit</button>
  <ul *ngFor = "let persoana of persoane;index as i">
    <li (click)="getText($event, value, data)" style="cursor: pointer">{{persoana.id}}.{{persoana.NumesiPrenume | reverse}} - {{persoana.punctaj}}</li>
  </ul>
  `,
  styles: [`
    input {
      width: 300px;
      margin-left: 30px;
    }

    button {
      margin: 30px;
    }
  `
  ]
})
export class CautareComponent implements OnInit {

  public element = document.getElementById('imput')

    persoane = []
  constructor(private _persoaneService: ServiceService) { }

  ngOnInit(): void {
    this._persoaneService.getPersoana$().pipe(debounceTime(2000)).subscribe(data => this.persoane = data)
  }

  getText(event: any, data: string): void {
    let valoare = <HTMLInputElement>document.getElementById('imput')
    data = event.target.closest('li').innerText
    valoare.value = data
  }

  search(event): void {
    console.log(event.key)
    const a = this.persoane.filter(persoana => persoana.NumesiPrenume.toLowerCase().indexOf(event.key.toLowerCase()) > -1)
    console.log(a)
  }

}
