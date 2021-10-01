import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-solutions',
    templateUrl: './solutions.component.html',
    styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: 'Our Solutions',
            title: 'We Different From Others Should Choose Us',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
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
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class solutionsBoxContent {
    icon : string;
    title : string;
    paragraphText : string;
    link : string;
    linkText : string;
}