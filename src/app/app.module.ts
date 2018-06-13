import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';\
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { PhotosListComponent } from './photos-list/photos-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RoverFormComponent,
    PhotosListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
