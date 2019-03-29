import { Component, OnInit } from '@angular/core';
import { SoccerService } from '../soccer.service';

@Component({
  selector: 'sm-continent-list',
  templateUrl: './continent-list.component.html',
  styleUrls: ['./continent-list.component.scss']
})
export class ContinentListComponent implements OnInit {

  continents: [];
  constructor(private soccer: SoccerService) { }

  ngOnInit() {
    this.soccer.getContinents().subscribe( cList => this.continents = cList);
  }

}
