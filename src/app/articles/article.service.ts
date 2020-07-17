import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Article } from './article';





@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleDoc: AngularFirestoreDocument<Article>;

  constructor(private afs: AngularFirestore){}

  getArticleData(id: string){
    this.articleDoc = this.afs.doc<Article>(`articles/${id}`);
    return this.articleDoc.valueChanges();
  }
}
