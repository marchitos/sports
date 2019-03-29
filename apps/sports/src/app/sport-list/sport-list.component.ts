import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sm-sport-list',
  template: `
    <ul>
      <li *ngFor="let s of sports">
       <a [routerLink]="s.urlLink">{{s.name}}</a>
      </li>
    </ul>
  `,
  styles: []
})
export class SportListComponent implements OnInit {

  sports: any[] = [
    { name: 'Soccer', urlLink: 'soccer' },
    { name: 'Cricket', urlLink: 'cricket' },
    { name: 'Formula 1', urlLink: 'formula1' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
