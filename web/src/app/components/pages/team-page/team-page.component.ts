import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-team-page',
    templateUrl: './team-page.component.html',
    styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Our Team'
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
        },
        {
            img: 'assets/img/scientist/img5.png',
            title: 'Alina Sophia',
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
            img: 'assets/img/scientist/img6.png',
            title: 'Liam Oliver',
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
            img: 'assets/img/scientist/img7.png',
            title: 'Emma Olivia',
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
            img: 'assets/img/scientist/img8.png',
            title: 'Elijah William',
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
class pageTitle {
    title : string;
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