import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticlepageComponent } from './articlepage/articlepage.component';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { ParallaxDirective } from '../parallax.directive';
import { MatCardModule } from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';

const routes: Routes = [
  {path: 'article', component: HomepageComponent, data:{animation:'isLeft'}},
  {path: 'article/:id', component: ArticlepageComponent, data:{animation:'isRight'}}
]

@NgModule({
  declarations: [ArticlepageComponent, HomepageComponent,ParallaxDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatCardModule,
    MatRippleModule
  ]
})
export class ArticleModule { }
