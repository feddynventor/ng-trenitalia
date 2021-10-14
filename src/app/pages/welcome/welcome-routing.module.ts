import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchStationComponent } from './search-station/search-station.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  // { path: '', component: WelcomeComponent },
  { path: '', redirectTo: 'solutions' },
  { path: 'search', component: SearchStationComponent },
  { path: 'solutions', component: SolutionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
