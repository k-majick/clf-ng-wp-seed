import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { PostsService } from '../../services/posts.service';
import Post from '../../services/Post';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'clf-post-list',
  templateUrl: 'post-list.component.html',
  providers: [PostsService],
})
export class PostListComponent implements OnInit {

  loadButton: boolean = true;
  posts: Post[];
  pageCounter: number = 2;
  morePosts: Post[] = [];

  constructor(
    private postsService: PostsService,
    private router: Router,
    private titleChange: Title,
    public translate: TranslateService,
  ) { }

  ngOnInit() {
    this.getPosts();
    this.titleChange.setTitle('All Posts');
    this.translate.onLangChange
      .subscribe((event: LangChangeEvent) => {
        console.log('currentLang: ' + this.translate.currentLang);
      });
  }

  getPosts() {
    this.postsService
      .getPostsEN()
      .subscribe((res) => {
        this.posts = res;
        this.posts.forEach((el, index) => {
          if (el['featured_media']) {
            this.getThumbnail(el['featured_media'], index);
          }
        },
        );
      });
  }

  getMorePosts() {
    this.postsService
      .getPostsEN(this.pageCounter)
      .subscribe((res) => {
        res.forEach(o => this.morePosts.push(o));
        if (!res.length) {
          this.hide_load_more_button();
        }
      });
    this.pageCounter + 1;
  }

  getThumbnail(id: number, index: number) {
    this.postsService
      .getPostThumbnail(id)
      .subscribe((res) => {
        this.posts[index]['postThumbnail'] = res;
      });
  }

  hide_load_more_button() {
    return this.loadButton = false;
  }

  selectPost(slug: any) {
    this.router.navigate([slug]);
  }

}
