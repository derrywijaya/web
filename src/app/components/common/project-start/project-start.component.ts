import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-project-start',
    templateUrl: './project-start.component.html',
    styleUrls: ['./project-start.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class ProjectStartComponent implements OnInit {

    location: any;
    circleShape1Class: any;
    vectorShape3Class: any;
    vectorShape9Class: any;
    vectorShape10Class: any;
    sectionClass: any;

    constructor(
        private router: Router,
        location: Location
    ) {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationEnd ) {
                this.location = this.router.url;
                if (this.location == '/'){
                    this.circleShape1Class = 'circle-shape1 d-block';
                    this.vectorShape3Class = 'vector-shape3 d-none';
                    this.vectorShape9Class = 'vector-shape9 d-none';
                    this.vectorShape10Class = 'vector-shape10 d-none';
                } else if (this.location == '/home-two'){
                    this.circleShape1Class = 'circle-shape1 d-none';
                    this.vectorShape3Class = 'vector-shape3 d-block';
                    this.vectorShape9Class = 'vector-shape9 d-none';
                    this.vectorShape10Class = 'vector-shape10 d-none';
                } else if (this.location == '/home-four' || this.location == '/services' || this.location == '/faq'){
                    this.circleShape1Class = 'circle-shape1 d-none';
                    this.vectorShape3Class = 'vector-shape3 d-none';
                    this.vectorShape9Class = 'vector-shape9 d-block';
                    this.vectorShape10Class = 'vector-shape10 d-block';
                    this.sectionClass = 'bg-color';
                }
            }
        });
    }

    ngOnInit(): void {
    }

    projectStartImage: Image[] = [
        {
            img: 'assets/img/project-start1.png'
        }
    ]
    projectStartContent: Content[] = [
        {
            title: 'We Like to Start Your Project With Us',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            defaultBtnIcon: 'flaticon-web',
            defaultBtnText: 'Get Started',
            defaultBtnLink: 'contact'
        }
    ]

}
class Image {
    img : string;
}
class Content {
    title : string;
    paragraphText: string;
    defaultBtnIcon : string;
    defaultBtnText : string;
    defaultBtnLink : string;
}