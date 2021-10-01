import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-courses-page',
    templateUrl: './courses-page.component.html',
    styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Courses'
        }
    ]
    singleCoursesBox: coursesContent[] = [
        {
            courseImg: 'assets/img/courses/img1.jpg',
            coursePrice: 'Free',
            coursePriceClass: 'free',
            authorImg: 'assets/img/user1.jpg',
            authorName: 'Alex Morgan',
            title: 'Introduction to Quantitative Methods',
            link: 'courses-details',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            courseDuration: '8 Weeks Long',
            studentApply: 'Available Now'
        },
        {
            courseImg: 'assets/img/courses/img2.jpg',
            coursePrice: '$49',
            coursePriceClass: 'paid',
            authorImg: 'assets/img/user2.jpg',
            authorName: 'Sarah Taylor',
            title: 'Introduction to Linear Models and Matrix Algebra',
            link: 'courses-details',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            courseDuration: '7 Weeks Long',
            studentApply: 'Available Now'
        },
        {
            courseImg: 'assets/img/courses/img3.jpg',
            coursePrice: '$69',
            coursePriceClass: 'paid',
            authorImg: 'assets/img/user3.jpg',
            authorName: 'David Warner',
            title: 'Data Science: Inference and Modeling',
            link: 'courses-details',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            courseDuration: '2 Weeks Long',
            studentApply: 'Not Available'
        },
        {
            courseImg: 'assets/img/courses/img4.jpg',
            coursePrice: '$99',
            coursePriceClass: 'paid',
            authorImg: 'assets/img/user1.jpg',
            authorName: 'Alex Morgan',
            title: 'The Data Science Course: Complete Data Science',
            link: 'courses-details',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            courseDuration: '8 Weeks Long',
            studentApply: 'Available Now'
        },
        {
            courseImg: 'assets/img/courses/img5.jpg',
            coursePrice: '$49',
            coursePriceClass: 'paid',
            authorImg: 'assets/img/user2.jpg',
            authorName: 'Sarah Taylor',
            title: 'Java Programming Masterclass for Developers',
            link: 'courses-details',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            courseDuration: '7 Weeks Long',
            studentApply: 'Available Now'
        },
        {
            courseImg: 'assets/img/courses/img6.jpg',
            coursePrice: '$69',
            coursePriceClass: 'paid',
            authorImg: 'assets/img/user3.jpg',
            authorName: 'David Warner',
            title: 'Machine Learning A-Z™: Hands-On Python',
            link: 'courses-details',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            courseDuration: '2 Weeks Long',
            studentApply: 'Not Available'
        }
    ]

}
class pageTitle {
    title : string;
}
class coursesContent {
    courseImg : string;
    coursePrice : string;
    coursePriceClass : string;
    authorImg : string;
    authorName : string;
    title : string;
    link : string;
    paragraphText : string;
    courseDuration : string;
    studentApply : string;
}