import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-mission',
    templateUrl: './homethree-mission.component.html',
    styleUrls: ['./homethree-mission.component.scss']
})
export class HomethreeMissionComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    ourMissionImage: Image[] = [
        {
            img: 'assets/img/our-mission/img2.png'
        }
    ]
    ourMissionContent: Content[] = [
        {
            title: 'Real-world Data Challenges Prepare to Be A Data Science Leader',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'Apply Now',
            defaultBtnLink: 'membership-levels'
        }
    ]
    featuresList: List[] = [
        {
            icon: 'flaticon-tick',
            title: 'Leadership-Focused Learning'
        },
        {
            icon: 'flaticon-tick',
            title: 'Experts at Teaching Online'
        },
        {
            icon: 'flaticon-tick',
            title: 'Proven Career Outcomes'
        },
        {
            icon: 'flaticon-tick',
            title: 'Diverse Backgrounds Welcome'
        },
        {
            icon: 'flaticon-tick',
            title: 'The Basics of Machine Learning'
        }
    ]

}
class Image {
    img : string;
}
class Content {
    title : string;
    paragraphText1 : string;
    paragraphText2 : string;
    defaultBtnIcon : string;
    defaultBtnText : string;
    defaultBtnLink : string;
}
class List {
    icon : string;
    title : string;
}