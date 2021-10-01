import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-featured-services',
    templateUrl: './homethree-featured-services.component.html',
    styleUrls: ['./homethree-featured-services.component.scss']
})
export class HomethreeFeaturedServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleFeaturedServicesItem: FeaturedServicesItem[] = [
        {
            icon: 'assets/img/icon/icon1.png',
            title: 'Online',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'services-details'
        },
        {
            icon: 'assets/img/icon/icon2.png',
            title: 'In-person',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'services-details'
        },
        {
            icon: 'assets/img/icon/icon3.png',
            title: 'Business',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'services-details'
        }
    ]

}
class FeaturedServicesItem {
    icon : string;
    title : string;
    paragraphText : string;
    btnIcon : string;
    btnText : string;
    link : string;
}