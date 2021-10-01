import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-funfacts',
    templateUrl: './homethree-funfacts.component.html',
    styleUrls: ['./homethree-funfacts.component.scss']
})
export class HomethreeFunfactsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleFunfactsBox: Funfacts[] = [
        {
            icon: "assets/img/funfacts/icon1.png",
            title: '10 Years',
            subTitle: 'On the market'
        },
        {
            icon: "assets/img/funfacts/icon2.png",
            title: '10,000+',
            subTitle: 'Learners'
        },
        {
            icon: "assets/img/funfacts/icon3.png",
            title: '125+',
            subTitle: 'Course'
        },
        {
            icon: "assets/img/funfacts/icon5.png",
            title: '196+',
            subTitle: 'Countries'
        }
    ]

}
class Funfacts {
    icon : string;
    title : string;
    subTitle : string;
}