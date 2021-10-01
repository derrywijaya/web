import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-courses-details-page',
    templateUrl: './courses-details-page.component.html',
    styleUrls: ['./courses-details-page.component.scss']
})
export class CoursesDetailsPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Courses Details',
            subTitle: 'Introduction to Quantitative Methods'
        }
    ]

}
class pageTitle {
    title : string;
    subTitle: string;
}