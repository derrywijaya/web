import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blog-details-page',
    templateUrl: './blog-details-page.component.html',
    styleUrls: ['./blog-details-page.component.scss']
})
export class BlogDetailsPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    pageTitleArea: pageTitle[] = [
        {
            title: 'Blog Details',
            subTitle: 'The Challenges to Tackle Before You Start With AI'
        }
    ]

}
class pageTitle {
    title : string;
    subTitle : string;
}