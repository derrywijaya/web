import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homefour-why-choose-us',
    templateUrl: './homefour-why-choose-us.component.html',
    styleUrls: ['./homefour-why-choose-us.component.scss']
})
export class HomefourWhyChooseUsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    whyChooseUsContent: Content[] = [
        {
            title: 'Why Choose Us?',
            paragraphText1: 'During 30 years in data analytics, we have built up comprehensive competencies that cover traditional and big data, data management, business intelligence (including self-service BI and data visualization), advanced data analytics, and data science.',
            paragraphText2: 'In 2015, we were rated A+ by BBB, recognized as the top IT company by Clutch, as well as featured on The Silicon Review listing among 10 Fastest Growing Data Analytics Companies.',
            linkIcon: 'flaticon-right',
            linkText: 'More About Us',
            link: 'about-us-1'
        }
    ]
    ourBrandPartnersList: List[] = [
        {
            title: 'Our Brand Partners',
            linkText: 'View All',
            link: 'partner'
        }
    ]
    brandPartnersImg: Image[] = [
        {
            img: 'assets/img/partner/img1.png'
        },
        {
            img: 'assets/img/partner/img2.png'
        },
        {
            img: 'assets/img/partner/img3.png'
        },
        {
            img: 'assets/img/partner/img4.png'
        },
        {
            img: 'assets/img/partner/img5.png'
        },
        {
            img: 'assets/img/partner/img6.png'
        }
    ]

}
class Content {
    title : string;
    paragraphText1 : string;
    paragraphText2 : string;
    linkIcon : string;
    linkText : string;
    link : string;
}
class List {
    title : string;
    linkText : string;
    link : string;
}
class Image {
    img : string;
}