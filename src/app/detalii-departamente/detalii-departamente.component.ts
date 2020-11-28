import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { ParamMap } from '@angular/router'
@Component({
  selector: 'app-detalii-departamente',
  template: `
    <h1>Ai selectat persoana cu numarul {{persoanaId}}</h1>

    <button (click)="return($event)" class="return-btn">Return</button>
    <button (click)="previous($event)" *ngIf="persoanaId != 1" class="return-btn">Previous</button>
    <button (click)="next($event)" *ngIf="persoanaId != 5" class="return-btn">Next</button>
  `,
  styleUrls: ['./detalii-departamente.component.css']
})
export class DetaliiDepartamenteComponent implements OnInit {

  public persoanaId;

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(this.route.snapshot.paramMap.get('id'))
      this.persoanaId = id
    })
  }

  return(event) {
    this.router.navigate(['/persoane'])
  }

  next(event) {
    let idNext = this.persoanaId + 1;
    this.router.navigate(['/detalii', idNext])
  }

  previous(event) {
    let idPrevious = this.persoanaId - 1;
    this.router.navigate(['/detalii', idPrevious])
  }

}
