import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homefour-testimonials',
    templateUrl: './homefour-testimonials.component.html',
    styleUrls: ['./homefour-testimonials.component.scss']
})
export class HomefourTestimonialsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'What Our Learners are Saying?',
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