import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';


interface Post {
  title: string;
  infotext: string;
  photoref: string;
  articleID: string;
  col:string;
  row:string;
}


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;

  postsCollection: AngularFirestoreCollection<Post>
  posts: Observable<Post[]>;
  constructor(private afs: AngularFirestore, private afstorage: AngularFireStorage,private router: Router) { }


  ngOnInit(): void {
    this.postsCollection = this.afs.collection('posts', ref=>{
        return ref.orderBy('postnum', 'desc').limit(20);
      }
    );
    this.posts = this.postsCollection.valueChanges(); 
  }

  
}
