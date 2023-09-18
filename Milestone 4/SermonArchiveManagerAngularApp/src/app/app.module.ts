import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListSermonsComponent } from './list-sermons/list-sermons.component';
import { CreateSermonComponent } from './create-sermon/create-sermon.component';
import { EditSermonComponent } from './edit-sermon/edit-sermon.component';
import { DeleteSermonComponent } from './delete-sermon/delete-sermon.component';
import { DisplaySermonComponent } from './display-sermon/display-sermon.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListSermonsComponent,
    CreateSermonComponent,
    EditSermonComponent,
    DeleteSermonComponent,
    DisplaySermonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
