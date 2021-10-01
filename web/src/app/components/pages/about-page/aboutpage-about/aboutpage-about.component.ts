import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-aboutpage-about',
    templateUrl: './aboutpage-about.component.html',
    styleUrls: ['./aboutpage-about.component.scss']
})
export class AboutpageAboutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    aboutImage: Image[] = [
        {
            img: 'assets/img/about/img1.png'
        }
    ]
    aboutContent: Content[] = [
        {
            subTitle: 'About Us',
            title: 'Drive Digital Revolution Through Data Science',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    featuresList: List[] = [
        {
            icon: 'assets/img/icon1.png',
            title: '10 Years',
            subTitle: 'On the market'
        },
        {
            icon: 'assets/img/icon2.png',
            title: '45+',
            subTitle: 'Team members'
        },
        {
            icon: 'assets/img/icon3.png',
            title: '100%',
            subTitle: 'Satisfaction rate'
        },
        {
            icon: 'assets/img/icon4.png',
            title: '80%',
            subTitle: 'Senior scientist'
        }
    ]
    aboutText: Text[] = [
        {
            title: 'Our History',
            paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
            featuresList1: 'Activate Listening',
            featuresList2: 'Brilliant minds',
            featuresList3: 'Better. Best. Wow!',
            featuresList4: 'Branding it better!',
            icon: 'flaticon-tick'
        },
        {
            title: 'Our Mission',
            paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
            featuresList1: 'Creating. Results.',
            featuresList2: 'Expect more',
            featuresList3: 'Good thinking',
            featuresList4: 'In real we trust',
            icon: 'flaticon-tick'
        },
        {
            title: 'Who we are',
            paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
            featuresList1: 'Stay real. Always.',
            featuresList2: 'We have you covered',
            featuresList3: 'We turn heads',
            featuresList4: 'Your brand, promoted',
            icon: 'flaticon-tick'
        }
    ]

}
class Image {
    img : string;
}
class Content {
    subTitle : string;
    title : string;
    paragraphText1 : string;
    paragraphText2 : string;
}
class List {
    icon : string;
    title : string;
    subTitle : string;
}
class Text {
    title : string;
    paragraphText : string;
    featuresList1 : string;
    featuresList2 : string;
    featuresList3 : string;
    featuresList4 : string;
    icon : string;
}