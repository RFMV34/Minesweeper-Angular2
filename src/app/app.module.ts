import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { GameService } from './game.service';
import { MineBoxComponent } from './mine-box/mine-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MineBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
