import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-about',
    templateUrl: './homeone-about.component.html',
    styleUrls: ['./homeone-about.component.scss']
})
export class HomeoneAboutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    aboutImage: Image[] = [
        {
            img: 'assets/img/about/img1.png'
        }
    ]
    aboutContent: Content[] = [
        {
            subTitle: 'About Us',
            title: 'Drive Digital Revolution Through Data Science',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'More About Us',
            defaultBtnLink: 'about-us-1'
        }
    ]
    featuresList: List[] = [
        {
            icon: 'assets/img/icon1.png',
            title: '10 Years',
            subTitle: 'On the market'
        },
        {
            icon: 'assets/img/icon2.png',
            title: '45+',
            subTitle: 'Team members'
        },
        {
            icon: 'assets/img/icon3.png',
            title: '100%',
            subTitle: 'Satisfaction rate'
        },
        {
            icon: 'assets/img/icon4.png',
            title: '80%',
            subTitle: 'Senior scientist'
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
    subTitle : string;
}