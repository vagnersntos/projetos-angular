import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CInputFilhoComponent } from './c-input-filho/c-input-filho.component';
import { CPaiComponent } from './c-pai/c-pai.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { OutputComponent } from './output/output.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'interpolation', component:InterpolationComponent},
  {path:'property-binding', component:PropertyBindingComponent},
  {path:'event-binding', component:EventBindingComponent},
  {path:'two-way', component:TwoWayComponent},
  {path:'c-input-filho', component:CPaiComponent},
  {path:'output', component:CPaiComponent},
  {path:'ng-if', component:NgIfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
