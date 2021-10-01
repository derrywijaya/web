import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homefour-industries-serve',
    templateUrl: './homefour-industries-serve.component.html',
    styleUrls: ['./homefour-industries-serve.component.scss']
})
export class HomefourIndustriesServeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'Industries We Serve',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleIndustriesServeBox: IndustriesServeContent[] = [
        {
            title: 'Manufacturing',
            icon: 'flaticon-factory',
            link: 'services-details'
        },
        {
            title: 'Healthcare',
            icon: 'flaticon-hospital',
            link: 'services-details'
        },
        {
            title: 'Automobile',
            icon: 'flaticon-tracking',
            link: 'services-details'
        },
        {
            title: 'Banking',
            icon: 'flaticon-investment',
            link: 'services-details'
        },
        {
            title: 'Real Estate',
            icon: 'flaticon-house',
            link: 'services-details'
        },
        {
            title: 'Logistics',
            icon: 'flaticon-order',
            link: 'services-details'
        },
        {
            title: 'Insurance',
            icon: 'flaticon-family-insurance',
            link: 'services-details'
        },
        {
            title: 'Capital Markets',
            icon: 'flaticon-bitcoin',
            link: 'services-details'
        }
    ]

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}
class IndustriesServeContent {
    title : string;
    icon : string;
    link : string;
}