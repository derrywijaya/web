import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-case-studies-three-columns-page',
    templateUrl: './case-studies-three-columns-page.component.html',
    styleUrls: ['./case-studies-three-columns-page.component.scss']
})
export class CaseStudiesThreeColumnsPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Case Studies 3 Columns'
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
        },
        {
            icon: 'bx bx-plus',
            img: 'assets/img/projects/img4.jpg',
            title: 'Detection Projects',
            subTitle: 'Programming',
            link: 'case-studies-details'
        },
        {
            icon: 'bx bx-plus',
            img: 'assets/img/projects/img5.jpg',
            title: 'Data Scientist',
            subTitle: 'Data Science',
            link: 'case-studies-details'
        },
        {
            icon: 'bx bx-plus',
            img: 'assets/img/projects/img6.jpg',
            title: 'Benefits Research',
            subTitle: 'Science Projects',
            link: 'case-studies-details'
        }
    ]

}
class pageTitle {
    title : string;
}
class singleProjectsContent {
    icon : string;
    img : string;
    title : string;
    subTitle : string;
    link : string;
}