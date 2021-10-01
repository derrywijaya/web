import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-partner',
    templateUrl: './homeone-partner.component.html',
    styleUrls: ['./homeone-partner.component.scss']
})
export class HomeonePartnerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    partnerItem: Item[] = [
        {
            img: "assets/img/partner/img1.png"
        },
        {
            img: "assets/img/partner/img2.png"
        },
        {
            img: "assets/img/partner/img3.png"
        },
        {
            img: "assets/img/partner/img4.png"
        },
        {
            img: "assets/img/partner/img5.png"
        },
        {
            img: "assets/img/partner/img6.png"
        }
    ]

}
class Item {
    img : string;
}