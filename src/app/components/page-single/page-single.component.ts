import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { PostsService } from '../../services/posts.service';
import Post from '../../services/Post';

@Component({
  selector: 'clf-page-single',
  templateUrl: './page-single.component.html',
  providers: [PostsService],
})
export class PageSingleComponent implements OnInit {

  page: Post;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private titleChange: Title,
  ) { }

  getPage(slug: any) {
    this.postsService
      .getPage(slug)
      .subscribe((res) => {
        this.page = res[0];
        if (!res[0]) {
          console.log('404');
          this.router.navigateByUrl('/page-not-found');
        }
      });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const slug = params['page'];
      this.getPage(slug);
      this.titleChange.setTitle(slug.replace(/-/gi, ' ').toUpperCase());
    });
  }
}
