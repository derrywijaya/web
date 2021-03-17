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
            title: 'Selamat Datang, ',
            paragraphText: 'Hi, my name is Derry. I am an Assistant Professor in the Computer Science Department of Boston University. Previously, I was a Postdoctoral Researcher at the Department of Computer and Information Science, University of Pennsylvania, working with Chris Callison-Burch. I received my Ph.D. from the Language Technologies Institute at Carnegie Mellon University (Tom Mitchell was my advisor).',
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