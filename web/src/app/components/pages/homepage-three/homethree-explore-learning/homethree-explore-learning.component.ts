import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-explore-learning',
    templateUrl: './homethree-explore-learning.component.html',
    styleUrls: ['./homethree-explore-learning.component.scss']
})
export class HomethreeExploreLearningComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    exploreLearningContent: Content[] = [
        {
            title: 'Build Your Data Science Analytics Skills Online',
            paragraphText: 'Want to learn and earn PDUs or CEUs on your schedule — anytime, anywhere? Or, pick up a new skill quickly like, project team leadership or agile? Browse our most popular online courses.',
            linkText: 'Explore Learing',
            link: 'courses-grid'
        }
    ]
    exploreLearningVideo: Video[] = [
        {
            img: 'assets/img/explore-learning.jpg',
            icon: 'flaticon-google-play',
            videoLink: 'https://www.youtube.com/watch?v=Y5KCDWi7h9o'
        }
    ]

}
class Content {
    title : string;
    paragraphText : string;
    linkText : string;
    link : string;
}
class Video {
    img : string;
    icon : string;
    videoLink : string;
}