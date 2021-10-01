import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-banner',
    templateUrl: './homethree-banner.component.html',
    styleUrls: ['./homethree-banner.component.scss']
})
export class HomethreeBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    heroBannerContent: Content[] = [
        {
            title: 'Learn Machine Learning',
            paragraphText: 'Keeping your skills up to date is essential and learning Data Science including oportunites on Big Data can drive you to become extraordinary professionals.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'Explore Bootcamps',
            defaultBtnLink: 'events'
        }
    ]

}
class Content {
    title : string;
    paragraphText : string;
    defaultBtnIcon : string;
    defaultBtnText: string;
    defaultBtnLink : string;
}