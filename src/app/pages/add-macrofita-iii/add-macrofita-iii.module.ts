import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddMacrofitaIIIPage } from './add-macrofita-iii.page';

const routes: Routes = [
  {
    path: '',
    component: AddMacrofitaIIIPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddMacrofitaIIIPage]
})
export class AddMacrofitaIIIPageModule {}
