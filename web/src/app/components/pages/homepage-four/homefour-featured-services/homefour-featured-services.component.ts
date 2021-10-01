import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homefour-featured-services',
    templateUrl: './homefour-featured-services.component.html',
    styleUrls: ['./homefour-featured-services.component.scss']
})
export class HomefourFeaturedServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'How We Take Your Business From Good To Great',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleFeaturedServicesBox: featuredServicesContent[] = [
        {
            icon: 'flaticon-analysis',
            title: 'Analyze Your Data Needs',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            linkIcon: 'flaticon-right',
            linkText: 'Read More',
            link: 'services-details'
        },
        {
            icon: 'flaticon-structure',
            title: 'Develop A Customized Plan',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            linkIcon: 'flaticon-right',
            linkText: 'Read More',
            link: 'services-details'
        },
        {
            icon: 'flaticon-idea',
            title: 'Implement Your Solution',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            linkIcon: 'flaticon-right',
            linkText: 'Read More',
            link: 'services-details'
        }
    ]

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}
class featuredServicesContent {
    icon : string;
    title : string;
    paragraphText : string;
    linkIcon : string;
    linkText : string;
    link : string;
}