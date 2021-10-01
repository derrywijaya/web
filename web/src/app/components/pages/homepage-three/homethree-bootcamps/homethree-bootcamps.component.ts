import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-bootcamps',
    templateUrl: './homethree-bootcamps.component.html',
    styleUrls: ['./homethree-bootcamps.component.scss']
})
export class HomethreeBootcampsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bootcampsContent: Content[] = [
        {
            title: 'Check Full Schedule for In-person Data Science Bootcamps',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'Check Out All Bootcamps',
            defaultBtnLink: 'events'
        }
    ]

}
class Content {
    title : string;
    defaultBtnIcon : string;
    defaultBtnText : string;
    defaultBtnLink : string;
}