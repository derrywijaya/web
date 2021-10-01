import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-services',
    templateUrl: './homeone-services.component.html',
    styleUrls: ['./homeone-services.component.scss']
})
export class HomeoneServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: 'Our Services',
            title: 'We Offer Professional Solutions For Business',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleServicesBox: ServicesBoxContent[] = [
        {
            icon: 'assets/img/services/icon1.png',
            title: 'Data Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon2.png',
            title: 'AI & ML Development',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon3.png',
            title: 'Data Science',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon4.png',
            title: 'Predictive Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon5.png',
            title: 'Software Development',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon6.png',
            title: 'Elastic Solutions',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        }
    ]
    loadMoreBtn: loadMore[] = [
        {
            link: 'services-2',
            linkText: 'Load More',
            linkIcon: 'flaticon-refresh'
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class ServicesBoxContent {
    icon : string;
    title : string;
    paragraphText : string;
    link : string;
    linkText : string;
    linkIcon : string;
}
class loadMore {
    link : string;
    linkText : string;
    linkIcon : string;
}