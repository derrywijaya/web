import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homefour-funfacts',
    templateUrl: './homefour-funfacts.component.html',
    styleUrls: ['./homefour-funfacts.component.scss']
})
export class HomefourFunfactsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleFunfactsItem: Funfacts[] = [
        {
            icon: "assets/img/funfacts/icon1.png",
            title: '10 Years',
            subTitle: 'On the market'
        },
        {
            icon: "assets/img/funfacts/icon2.png",
            title: '45+',
            subTitle: 'Team members'
        },
        {
            icon: "assets/img/funfacts/icon3.png",
            title: '100%',
            subTitle: 'Satisfaction rate'
        },
        {
            icon: "assets/img/funfacts/icon4.png",
            title: '90%',
            subTitle: 'Senior scientist'
        }
    ]

}
class Funfacts {
    icon : string;
    title : string;
    subTitle : string;
}