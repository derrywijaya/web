import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-events-speakers',
    templateUrl: './events-speakers.component.html',
    styleUrls: ['./events-speakers.component.scss']
})
export class EventsSpeakersComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleScientistItemBox: Scientist[] = [
        {
            img: 'assets/img/speaker/img1.jpg',
            title: 'Merv Adrian',
            subTitle: 'Data Management',
            facebookLink: '#',
            twitterLink: '#',
            linkedinLink: '#',
            instagramLink: '#',
        },
        {
            img: 'assets/img/speaker/img2.jpg',
            title: 'Kirk Borne',
            subTitle: 'Data Management',
            facebookLink: '#',
            twitterLink: '#',
            linkedinLink: '#',
            instagramLink: '#',
        },
        {
            img: 'assets/img/speaker/img3.jpg',
            title: 'Carla Gentry',
            subTitle: 'Data Management',
            facebookLink: '#',
            twitterLink: '#',
            linkedinLink: '#',
            instagramLink: '#',
        },
        {
            img: 'assets/img/speaker/img4.jpg',
            title: 'Marie Curie',
            subTitle: 'Data Management',
            facebookLink: '#',
            twitterLink: '#',
            linkedinLink: '#',
            instagramLink: '#',
        },
        {
            img: 'assets/img/speaker/img5.jpg',
            title: 'Alina Sophia',
            subTitle: 'Data Management',
            facebookLink: '#',
            twitterLink: '#',
            linkedinLink: '#',
            instagramLink: '#',
        },
        {
            img: 'assets/img/speaker/img6.jpg',
            title: 'Liam Oliver',
            subTitle: 'Data Management',
            facebookLink: '#',
            twitterLink: '#',
            linkedinLink: '#',
            instagramLink: '#',
        }
    ]

}
class Scientist {
    img : string;
    title : string;
    subTitle : string;
    facebookLink : string;
    twitterLink : string;
    linkedinLink : string;
    instagramLink : string;
}