import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { EventsContentComponent } from './events-content/events-content.component';
import { ColorsContentComponent } from './colors-content/colors-content.component';
import { ChaptersContentComponent } from './chapters-content/chapters-content.component';

const routes: Routes = [
  {path: 'index', component: MainContentComponent},
  {path: '', component: MainContentComponent},
  {path: 'events', component: EventsContentComponent},
  {path: 'colors', component: ColorsContentComponent},
  {path: 'chapters', component: ChaptersContentComponent},
  {path: '**', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
