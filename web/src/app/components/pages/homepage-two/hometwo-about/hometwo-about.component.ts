import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-about',
    templateUrl: './hometwo-about.component.html',
    styleUrls: ['./hometwo-about.component.scss']
})
export class HometwoAboutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    aboutImg: Image[] = [
        {
            img: 'assets/img/about/img5.png'
        }
    ]
    aboutContent: Content[] = [
        {
            subTitle: 'About Us',
            title: 'Business Analytics For Data-Driven Solutions',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'More About Us',
            defaultBtnLink: 'about-us-2'
        }
    ]
    aboutList: List[] = [
        {
            icon: 'flaticon-tick',
            title: 'Big Data'
        },
        {
            icon: 'flaticon-tick',
            title: 'Data Visualization'
        },
        {
            icon: 'flaticon-tick',
            title: 'Data Warehousing'
        },
        {
            icon: 'flaticon-tick',
            title: 'Data Management'
        },
        {
            icon: 'flaticon-tick',
            title: 'Business Intelligence'
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