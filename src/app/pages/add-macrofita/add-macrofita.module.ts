import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddMacrofitaPage } from './add-macrofita.page';

const routes: Routes = [
  {
    path: '',
    component: AddMacrofitaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddMacrofitaPage]
})
export class AddMacrofitaPageModule {}
