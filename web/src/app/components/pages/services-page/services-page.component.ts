import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-services-page',
    templateUrl: './services-page.component.html',
    styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Services'
        }
    ]
    singleSolutionsBox: solutionsBoxContent[] = [
        {
            icon: 'flaticon-rocket',
            title: 'Startup Applications',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'services-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-laptop',
            title: 'SaaS Solutions',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'services-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-money',
            title: 'E-Commerce Platforms',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'services-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-segmentation',
            title: 'Research',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'services-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-analytics',
            title: 'Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'services-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-settings',
            title: 'Technology',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'services-details',
            linkText: 'View Details'
        }
    ]

}
class pageTitle {
    title : string;
}
class solutionsBoxContent {
    icon : string;
    title : string;
    paragraphText : string;
    link : string;
    linkText : string;
}