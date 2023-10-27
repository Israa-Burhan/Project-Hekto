import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leatest-blog',
  templateUrl: './leatest-blog.component.html',
  styleUrls: ['./leatest-blog.component.scss']
})
export class LeatestBlogComponent {
  public home: any;
  constructor(private http: HttpClient) { }

  createleatestBlog() {
    this.http.get('assets/api/home.json').subscribe((data: any) => {
      this.home = data.home;
    });
  }
  ngOnInit() {
    this.createleatestBlog();
  }
}
