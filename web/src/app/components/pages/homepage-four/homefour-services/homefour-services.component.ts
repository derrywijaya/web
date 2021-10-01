import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homefour-services',
    templateUrl: './homefour-services.component.html',
    styleUrls: ['./homefour-services.component.scss']
})
export class HomefourServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'Services We Can Help You With',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleServicesBoxItem: ServicesBoxContent[] = [
        {
            icon: 'assets/img/services/icon7.png',
            title: 'Big Data Analysis',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'services-details'
        },
        {
            icon: 'assets/img/services/icon8.png',
            title: 'Robust Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'services-details'
        },
        {
            icon: 'assets/img/services/icon9.png',
            title: 'Marketing Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'services-details'
        },
        {
            icon: 'assets/img/services/icon10.png',
            title: 'Data Visualization',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'services-details'
        },
        {
            icon: 'assets/img/services/icon11.png',
            title: 'Securities Research',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'services-details'
        },
        {
            icon: 'assets/img/services/icon12.png',
            title: 'Data Governance',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'services-details'
        }
    ]

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}
class ServicesBoxContent {
    icon : string;
    title : string;
    paragraphText : string;
    linkText : string;
    linkIcon : string;
    link : string;
}