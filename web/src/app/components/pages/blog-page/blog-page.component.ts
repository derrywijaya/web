import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    pageTitleArea: pageTitle[] = [
        {
            title: 'Blog'
        }
    ]
    singleBlogPost: blogPostContent[] = [
        {
            postImg: 'assets/img/blog/img4.jpg',
            postTitle: 'The Data Surrounding Higher Education',
            postLink: 'blog-details',
            postDate: 'April 30, 2020',
            postAuthorImage: 'assets/img/user1.jpg',
            postAuthorName: 'Alex Morgan'
        },
        {
            postImg: 'assets/img/blog/img5.jpg',
            postTitle: 'Conversion Rate the Sales Funnel Optimization',
            postLink: 'blog-details',
            postDate: 'April 28, 2020',
            postAuthorImage: 'assets/img/user2.jpg',
            postAuthorName: 'Sarah Taylor'
        },
        {
            postImg: 'assets/img/blog/img6.jpg',
            postTitle: 'Business Data is changing the world’s Energy',
            postLink: 'blog-details',
            postDate: 'April 27, 2020',
            postAuthorImage: 'assets/img/user3.jpg',
            postAuthorName: 'David Warner'
        },
        {
            postImg: 'assets/img/blog/img7.jpg',
            postTitle: 'The data-driven approach to understanding',
            postLink: 'blog-details',
            postDate: 'April 30, 2020',
            postAuthorImage: 'assets/img/user1.jpg',
            postAuthorName: 'Alex Morgan'
        },
        {
            postImg: 'assets/img/blog/img8.jpg',
            postTitle: 'Finding the blocks of neighboring fields',
            postLink: 'blog-details',
            postDate: 'April 28, 2020',
            postAuthorImage: 'assets/img/user2.jpg',
            postAuthorName: 'Sarah Taylor'
        },
        {
            postImg: 'assets/img/blog/img9.jpg',
            postTitle: 'Data into Your Enterprise to Drive Insights',
            postLink: 'blog-details',
            postDate: 'April 27, 2020',
            postAuthorImage: 'assets/img/user3.jpg',
            postAuthorName: 'David Warner'
        },
        {
            postImg: 'assets/img/blog/img10.jpg',
            postTitle: 'Introduction to Recommendation Engines',
            postLink: 'blog-details',
            postDate: 'April 30, 2020',
            postAuthorImage: 'assets/img/user1.jpg',
            postAuthorName: 'Alex Morgan'
        },
        {
            postImg: 'assets/img/blog/img11.jpg',
            postTitle: '5 Things You Should Know About Data',
            postLink: 'blog-details',
            postDate: 'April 28, 2020',
            postAuthorImage: 'assets/img/user2.jpg',
            postAuthorName: 'Sarah Taylor'
        },
        {
            postImg: 'assets/img/blog/img12.jpg',
            postTitle: 'Which Language to Choose for Deep Learning?',
            postLink: 'blog-details',
            postDate: 'April 27, 2020',
            postAuthorImage: 'assets/img/user3.jpg',
            postAuthorName: 'David Warner'
        }
    ]

}
class pageTitle {
    title : string;
}
class blogPostContent {
    postImg : string;
    postLink : string;
    postTitle : string;
    postDate : string;
    postAuthorImage : string;
    postAuthorName : string;
}