import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokeFormComponent } from './components/joke-form/joke-form.component';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { JokeComponent } from './components/joke/joke.component';

@NgModule({
  declarations: [AppComponent, JokeFormComponent, JokeListComponent, JokeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
