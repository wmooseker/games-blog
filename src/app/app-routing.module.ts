import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', redirectTo: '/article', pathMatch: 'full', data: {animation:'isRight'}},
  { path: '', loadChildren: './articles/article.module#ArticleModule', data: {animation:'isLeft'}},
  {path: 'about', component:AboutComponent, data:{animation:'isLeft'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
