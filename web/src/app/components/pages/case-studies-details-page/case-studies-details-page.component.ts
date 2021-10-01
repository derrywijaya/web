import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-case-studies-details-page',
    templateUrl: './case-studies-details-page.component.html',
    styleUrls: ['./case-studies-details-page.component.scss']
})
export class CaseStudiesDetailsPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Case Studies Details',
            subTitle: 'Data Science in Pharmaceutical Industries',
        }
    ]

    caseStudiesDetailsImage: Image[] = [
        {
            img: 'assets/img/projects/projects-details1.jpg'
        }
    ]
    caseStudiesDetailsDesc: DetailsDesc[] = [
        {
            subTitle: 'Data Science',
            title1: 'Complete Data Science Training: Mathematics, Statistics, Python, Advanced Statistics in Python',
            paragraph1: 'Improve Machine Learning algorithms by studying underfitting, overfitting, training, validation, n-fold cross validation, testing, and how hyperparameters could improve performance. Perform linear and logistic regressions in Python.',
            img1: 'assets/img/projects/img2.jpg',
            title2: 'Important Facts',
            paragraph2: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
            paragraph3: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.',
            title3: 'Results',
            paragraph4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna ad aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco labori.',
        }
    ]
    caseStudiesDetailsDescImportantFacts: ImportantFacts[] = [
        {
            title: 'The Field of Data Science'
        },
        {
            title: 'The Problem'
        },
        {
            title: 'The Solution'
        },
        {
            title: 'The Skills'
        },
        {
            title: 'Statistics'
        },
        {
            title: 'Mathematics'
        }
    ]
    caseStudiesDetailsInfo: Info[] = [
        {
            icon: 'bx bx-user-pin',
            title: 'Client',
            subTitle: 'EnvyTheme',
        },
        {
            icon: 'bx bx-map',
            title: 'Location',
            subTitle: 'New York, USA',
        },
        {
            icon: 'bx bx-purchase-tag',
            title: 'Technologies',
            subTitle: 'Python, Data Science',
        },
        {
            icon: 'bx bx-check',
            title: 'Completed',
            subTitle: '28 April 2020',
        },
        {
            icon: 'bx bx-globe',
            title: 'Website',
            subTitle: 'EnvyTheme.com',
        }
    ]

}
class pageTitle {
    title : string;
    subTitle : string;
}
class Image {
    img : string;
}
class DetailsDesc {
    subTitle : string;
    title1 : string;
    title2 : string;
    title3 : string;
    img1 : string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
}
class ImportantFacts {
    title : string;
}
class Info {
    icon : string;
    title : string;
    subTitle : string;
}