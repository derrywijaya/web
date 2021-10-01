import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-funfacts',
    templateUrl: './hometwo-funfacts.component.html',
    styleUrls: ['./hometwo-funfacts.component.scss']
})
export class HometwoFunfactsComponent implements OnInit {

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
            title: '30+',
            subTitle: 'Senior scientist'
        }
    ]

}
class Funfacts {
    icon : string;
    title : string;
    subTitle : string;
}