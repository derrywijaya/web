import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-boxes',
    templateUrl: './hometwo-boxes.component.html',
    styleUrls: ['./hometwo-boxes.component.scss']
})
export class HometwoBoxesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleBoxesItem: BoxItem[] = [
        {
            icon: 'assets/img/icon/icon1.png',
            title: 'Marketing Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'single-services-2'
        },
        {
            icon: 'assets/img/services/icon2.png',
            title: 'Consumer Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'single-services-2'
        },
        {
            icon: 'assets/img/services/icon3.png',
            title: 'Sales Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'single-services-2'
        }
    ]

}
class BoxItem {
    icon : string;
    title : string;
    paragraphText : string;
    btnIcon : string;
    btnText : string;
    link : string;
}