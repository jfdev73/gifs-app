import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { ShearchBoxComponent } from './components/shearch-box/shearch-box.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ShearchBoxComponent,
    CardListComponent,
    GifsCardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
