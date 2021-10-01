import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homefour-banner',
    templateUrl: './homefour-banner.component.html',
    styleUrls: ['./homefour-banner.component.scss']
})
export class HomefourBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bannerWrapperContent: Content[] = [
        {
            title: 'Managed Analytics and Data Analysis Platform',
            paragraphText: 'We have created a cloud based tool to do your all boring tasks related to data analysis and decesion making based on the nature of data!',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'About Us',
            defaultBtnLink: 'about-us-1',
            optionalBtnIcon: 'flaticon-tick',
            optionalBtnText: 'Get Started',
            optionalBtnLink: 'contact'
        }
    ]

}
class Content {
    title : string;
    paragraphText : string;
    defaultBtnIcon : string;
    defaultBtnText: string;
    defaultBtnLink : string;
    optionalBtnIcon : string;
    optionalBtnText: string;
    optionalBtnLink : string;
}