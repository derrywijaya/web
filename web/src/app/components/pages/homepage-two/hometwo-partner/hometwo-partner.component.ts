import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-partner',
    templateUrl: './hometwo-partner.component.html',
    styleUrls: ['./hometwo-partner.component.scss']
})
export class HometwoPartnerComponent implements OnInit {

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