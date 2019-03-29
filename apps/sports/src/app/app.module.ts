import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SportListComponent } from './sport-list/sport-list.component';

@NgModule({
  declarations: [AppComponent, SportListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: SportListComponent },
        { path: 'soccer', loadChildren: '@sm/soccer#SoccerModule' }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
