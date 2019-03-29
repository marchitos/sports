import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContinentListComponent } from './continent-list/continent-list.component';

@NgModule({
  declarations: [
    ContinentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ContinentListComponent }
    ])
  ]
})
export class SoccerModule {}
