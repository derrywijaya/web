import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-events-page',
    templateUrl: './events-page.component.html',
    styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Events'
        }
    ]
    singleEvents: singleEventsContent[] = [
        {
            img: 'assets/img/events/img1.jpg',
            date: 'Wed, 20 May, 2020',
            title: 'Global Conference on Business Management',
            location: 'Vancover, Canada'
        },
        {
            img: 'assets/img/events/img2.jpg',
            date: 'Tue, 19 May, 2020',
            title: 'International Conference on Teacher Education',
            location: 'Sydney, Australia'
        },
        {
            img: 'assets/img/events/img3.jpg',
            date: 'Mon, 18 May, 2020',
            title: 'International Conference on Special Needs Education',
            location: 'Istanbul, Turkey'
        },
        {
            img: 'assets/img/events/img4.jpg',
            date: 'Sun, 17 May, 2020',
            title: 'International Conference on Literacy Teaching',
            location: 'Athens, Greece'
        },
        {
            img: 'assets/img/events/img5.jpg',
            date: 'Sat, 16 May, 2020',
            title: 'International Conference on Educational Administration',
            location: 'Rome, Italy'
        },
        {
            img: 'assets/img/events/img6.jpg',
            date: 'Fri, 15 May, 2020',
            title: 'International Conference on Education and Pedagogy',
            location: 'Athens, Greece'
        },
        {
            img: 'assets/img/events/img7.jpg',
            date: 'Thu, 14 May, 2020',
            title: 'Research Conference Aims and Objectives',
            location: 'Tokyo, Japan'
        },
        {
            img: 'assets/img/events/img8.jpg',
            date: 'Wed, 13 May, 2020',
            title: 'Conference on Gender Discrimination in Education',
            location: 'Oslo, Norway'
        },
        {
            img: 'assets/img/events/img9.jpg',
            date: 'Tue, 12 May, 2020',
            title: 'Quality and Improvement in Education Conference',
            location: 'Tokyo, Japan'
        }
    ]

}
class pageTitle {
    title : string;
}
class singleEventsContent {
    img : string;
    date : string;
    title : string;
    location : string;
}