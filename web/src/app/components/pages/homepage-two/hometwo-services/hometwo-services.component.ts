import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-services',
    templateUrl: './hometwo-services.component.html',
    styleUrls: ['./hometwo-services.component.scss']
})
export class HometwoServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: "Our Services",
            title: 'We Offer Professional Solutions For Business',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleServicesItem: ServicesItem[] = [
        {
            icon: 'assets/img/services/icon1.png',
            title: 'Customer Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'single-services-2'
        },
        {
            icon: 'assets/img/services/icon2.png',
            title: 'Risk Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'single-services-2'
        },
        {
            icon: 'assets/img/services/icon3.png',
            title: 'Social Media Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'single-services-2'
        },
        {
            icon: 'assets/img/services/icon4.png',
            title: 'Real Time Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'single-services-2'
        },
        {
            icon: 'assets/img/services/icon5.png',
            title: 'Big Data Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'single-services-2'
        },
        {
            icon: 'assets/img/services/icon6.png',
            title: 'Business Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'single-services-2'
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class ServicesItem {
    icon : string;
    title : string;
    paragraphText : string;
    btnIcon : string;
    btnText : string;
    link : string;
}