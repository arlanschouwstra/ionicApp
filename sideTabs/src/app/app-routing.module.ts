import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab1',
    pathMatch: 'full'
  },
  {
    path: 'tab1',
    loadChildren: './tab1/tab1.module#Tab1PageModule'
  },
  {
    path: 'tab2',
    loadChildren: './tab2/tab2.module#Tab2PageModule'
  },
  {
    path: 'tab3',
    loadChildren: './tab3/tab3.module#Tab3PageModule'
  },
  {
    path: 'tab4',
    loadChildren: './tab4/tab4.module#Tab4PageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
