import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-related-case-studies',
    templateUrl: './related-case-studies.component.html',
    styleUrls: ['./related-case-studies.component.scss']
})
export class RelatedCaseStudiesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'More Projects You Might Like'
        }
    ]
    singleProjectsBox: singleProjectsContent[] = [
        {
            icon: 'bx bx-plus',
            img: 'assets/img/projects/img1.jpg',
            title: 'Movie Recommendation',
            subTitle: 'System Project',
            link: 'case-studies-details'
        },
        {
            icon: 'bx bx-plus',
            img: 'assets/img/projects/img2.jpg',
            title: 'Customer Segmentation',
            subTitle: 'Machine Learning',
            link: 'case-studies-details'
        },
        {
            icon: 'bx bx-plus',
            img: 'assets/img/projects/img3.jpg',
            title: 'Data Analysis',
            subTitle: 'Web Projects',
            link: 'case-studies-details'
        }
    ]

}
class sectionTitleContent {
    title : string;
}
class singleProjectsContent {
    icon : string;
    img : string;
    title : string;
    subTitle : string;
    link : string;
}