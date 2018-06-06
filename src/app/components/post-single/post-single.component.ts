import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import Post from '../../services/Post';

@Component({
  selector: 'clf-post-single',
  templateUrl: './post-single.component.html',
  providers: [PostsService],
})
export class PostSingleComponent implements OnInit {

  post: Post;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private titleChange: Title,
  ) {}

  getPost(slug: string) {
    this.postsService
      .getPost(slug)
      .subscribe((res) => {
        this.post = res[0];
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
      const slug = params['slug'];
      this.getPost(slug);
      this.titleChange.setTitle(slug.replace(/-/gi, ' ').toUpperCase());
    });
  }
}
