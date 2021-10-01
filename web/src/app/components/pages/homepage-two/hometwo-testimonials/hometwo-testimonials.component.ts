import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-testimonials',
    templateUrl: './hometwo-testimonials.component.html',
    styleUrls: ['./hometwo-testimonials.component.scss']
})
export class HometwoTestimonialsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: "Testimonials",
            title: 'What Our Clients Are Saying?',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleTestimonialsBox: TestimonialsBoxContent[] = [
        {
            clientImg: 'assets/img/testimonials/img1.jpg',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
            clientName: 'Alex Maxwell',
            clientDesignation: 'CEO at EnvyTheme'
        },
        {
            clientImg: 'assets/img/testimonials/img2.jpg',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
            clientName: 'David Warner',
            clientDesignation: 'CEO at Envato'
        },
        {
            clientImg: 'assets/img/testimonials/img3.jpg',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
            clientName: 'Sarah Taylor',
            clientDesignation: 'CEO at ThemeForest'
        }
    ]
    testimonialsBtn: Btn[] = [
        {
            link: "testimonials",
            icon: 'flaticon-view',
            text: 'Check Out All Reviews'
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class TestimonialsBoxContent {
    clientImg : string;
    paragraphText : string;
    clientName : string;
    clientDesignation : string;
}
class Btn {
    link : string;
    icon : string;
    text : string;
}