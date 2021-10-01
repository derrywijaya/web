import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homefour-what-we-do',
    templateUrl: './homefour-what-we-do.component.html',
    styleUrls: ['./homefour-what-we-do.component.scss']
})
export class HomefourWhatWeDoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'What We Do',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleWhatWeDoBox: whatWeDoContent[] = [
        {
            icon: 'flaticon-segmentation',
            title: 'Research',
            paragraphText: 'Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            linkText1: 'Market Research',
            link1: 'services-details',
            linkText2: 'Investment Research',
            link2: 'services-details',
            linkText3: 'Read More',
            link3: 'services-details'
        },
        {
            icon: 'flaticon-analytics',
            title: 'Analytics',
            paragraphText: 'Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            linkText1: 'Data Analytics',
            link1: 'services-details',
            linkText2: 'Business Intelligence',
            link2: 'services-details',
            linkText3: 'Read More',
            link3: 'services-details'
        },
        {
            icon: 'flaticon-settings',
            title: 'Technology',
            paragraphText: 'Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            linkText1: 'Intelligence Automation',
            link1: 'services-details',
            linkText2: 'Quality Engineering',
            link2: 'services-details',
            linkText3: 'Read More',
            link3: 'services-details'
        }
    ]

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}
class whatWeDoContent {
    icon : string;
    title : string;
    paragraphText : string;
    linkText1 : string;
    link1 : string;
    linkText2 : string;
    link2 : string;
    linkText3 : string;
    link3 : string;
}