import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home1', pathMatch: 'full' },
  { path: 'home1', loadChildren: './pages/home1/home1.module#Home1PageModule' },
  { path: 'cadastro', loadChildren: './pages/cadastro/cadastro.module#CadastroPageModule' },
  { path: 'add-macrofita', loadChildren: './pages/add-macrofita/add-macrofita.module#AddMacrofitaPageModule' },
  { path: 'add-macrofita-ii', loadChildren: './pages/add-macrofita-ii/add-macrofita-ii.module#AddMacrofitaIIPageModule' },
  { path: 'add-macrofita-iii', loadChildren: './pages/add-macrofita-iii/add-macrofita-iii.module#AddMacrofitaIIIPageModule' },
  { path: 'comentario', loadChildren: './pages/comentario/comentario.module#ComentarioPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
