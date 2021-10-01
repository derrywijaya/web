import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-scientist',
    templateUrl: './homeone-scientist.component.html',
    styleUrls: ['./homeone-scientist.component.scss']
})
export class HomeoneScientistComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: "Team Members",
            title: 'Our Data Scientist',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleScientistBox: scientistBoxContent[] = [
        {
            img: 'assets/img/scientist/img1.png',
            title: 'Merv Adrian',
            designation: 'Data Management',
            facebookLink: '#',
            facebookIcon: 'bx bxl-facebook',
            twitterLink: '#',
            twitterIcon: 'bx bxl-twitter',
            instagramLink: '#',
            instagramIcon: 'bx bxl-instagram',
            linkedinLink: '#',
            linkedinIcon: 'bx bxl-linkedin'
        },
        {
            img: 'assets/img/scientist/img2.png',
            title: 'Kirk Borne',
            designation: 'Data Scientist',
            facebookLink: '#',
            facebookIcon: 'bx bxl-facebook',
            twitterLink: '#',
            twitterIcon: 'bx bxl-twitter',
            instagramLink: '#',
            instagramIcon: 'bx bxl-instagram',
            linkedinLink: '#',
            linkedinIcon: 'bx bxl-linkedin'
        },
        {
            img: 'assets/img/scientist/img3.png',
            title: 'Carla Gentry',
            designation: 'Analytical Solutions',
            facebookLink: '#',
            facebookIcon: 'bx bxl-facebook',
            twitterLink: '#',
            twitterIcon: 'bx bxl-twitter',
            instagramLink: '#',
            instagramIcon: 'bx bxl-instagram',
            linkedinLink: '#',
            linkedinIcon: 'bx bxl-linkedin'
        },
        {
            img: 'assets/img/scientist/img4.png',
            title: 'Marie Curie',
            designation: 'Data Scientist',
            facebookLink: '#',
            facebookIcon: 'bx bxl-facebook',
            twitterLink: '#',
            twitterIcon: 'bx bxl-twitter',
            instagramLink: '#',
            instagramIcon: 'bx bxl-instagram',
            linkedinLink: '#',
            linkedinIcon: 'bx bxl-linkedin'
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class scientistBoxContent {
    img: string;
    title: string;
    designation: string;
    facebookLink: string;
    facebookIcon: string;
    twitterLink: string;
    twitterIcon: string;
    instagramLink: string;
    instagramIcon: string;
    linkedinLink: string;
    linkedinIcon: string;
}