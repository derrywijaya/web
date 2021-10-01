import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-case-studies',
    templateUrl: './homeone-case-studies.component.html',
    styleUrls: ['./homeone-case-studies.component.scss']
})
export class HomeoneCaseStudiesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleCaseStudyItem: singleCaseStudyItemContent[] = [
        {
            subTitle: 'Case study #1',
            title: 'Data Science in Pharmaceutical Industries',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
            link: 'case-studies-details-1',
            linkText: 'Details More',
            linkIcon: 'flaticon-view',
            img: 'assets/img/case-study/img1.jpg'
        },
        {
            subTitle: 'Case study #2',
            title: 'Mathematics, Advanced Statistics in Python',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
            link: 'case-studies-details-1',
            linkText: 'Details More',
            linkIcon: 'flaticon-view',
            img: 'assets/img/case-study/img2.jpg'
        }
    ]

}
class singleCaseStudyItemContent {
    subTitle : string;
    title : string;
    paragraphText1 : string;
    paragraphText2 : string;
    link : string;
    linkText : string;
    linkIcon : string;
    img : string;
}