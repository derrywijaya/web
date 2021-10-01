import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-mission',
    templateUrl: './hometwo-mission.component.html',
    styleUrls: ['./hometwo-mission.component.scss']
})
export class HometwoMissionComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    ourMissionImage: Image[] = [
        {
            img: 'assets/img/our-mission/img1.png'
        }
    ]
    ourMissionContent: Content[] = [
        {
            subTitle: 'Our Mission',
            title: 'Data Science & Data Analysis Agency',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'Read More',
            defaultBtnLink: 'about-us-2'
        }
    ]
    ourMissionList: List[] = [
        {
            icon: 'flaticon-tick',
            title: 'Global Experience'
        },
        {
            icon: 'flaticon-tick',
            title: 'Value for Results'
        },
        {
            icon: 'flaticon-tick',
            title: 'User Prespective'
        },
        {
            icon: 'flaticon-tick',
            title: 'Business Prespective'
        },
        {
            icon: 'flaticon-tick',
            title: 'Expert Prepective'
        },
        {
            icon: 'flaticon-tick',
            title: 'Retail Solutions'
        }
    ]

}
class Image {
    img : string;
}
class Content {
    subTitle : string;
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