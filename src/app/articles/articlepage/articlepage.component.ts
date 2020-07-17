import { Component, OnInit} from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { element } from 'protractor';



@Component({
  selector: 'app-articlepage',
  templateUrl: './articlepage.component.html',
  styleUrls: ['./articlepage.component.scss']
})

export class ArticlepageComponent implements OnInit {

  article: Article;
  articleTopics;
  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
    
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.articleService.getArticleData(id).subscribe(data=>this.article=data);

  }
  getArticle(){
    
    
    
  }


}
