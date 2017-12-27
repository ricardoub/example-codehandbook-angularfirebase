import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { RootComponent } from './root/root.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [
    RootComponent,
    ListTaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
