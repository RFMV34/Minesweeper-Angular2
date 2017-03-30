import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { GameService } from './game.service';
import { MineBoxComponent } from './mine-box/mine-box.component';
import { GameComponent } from './game/game.component';
import { SettingsComponent } from './settings/settings.component';
import { InstructionsComponent } from './instructions/instructions.component';

const appRoutes: Routes = [
  { path: '', component: GameComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'instructions', component: InstructionsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MineBoxComponent,
    GameComponent,
    SettingsComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
