import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'pages',
    component: TabsPage,
    children: [
      {
        path: 'tempo',
        loadChildren: () => import('../tempo/tempo.module').then(m => m.TempoPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'configs',
        loadChildren: () => import('../config/config.module').then(m => m.ConfigPageModule)
      },
      {
        path: '',
        redirectTo: '/pages/tempo',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/pages/tempo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
