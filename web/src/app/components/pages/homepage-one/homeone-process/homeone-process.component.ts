import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-process',
    templateUrl: './homeone-process.component.html',
    styleUrls: ['./homeone-process.component.scss']
})
export class HomeoneProcessComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: "How It's Work",
            title: 'The Data Science Process',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleProcessBox: processBoxContent[] = [
        {
            img: 'assets/img/process/img1.png',
            title: 'Frame the Problem',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            number: '1'
        },
        {
            img: 'assets/img/process/img2.png',
            title: 'Collect the Raw Data',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            number: '2'
        },
        {
            img: 'assets/img/process/img3.png',
            title: 'Process the Data',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            number: '3'
        },
        {
            img: 'assets/img/process/img4.png',
            title: 'Explore the Data',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            number: '4'
        },
        {
            img: 'assets/img/process/img5.png',
            title: 'Perform In-depth Analysis',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            number: '5'
        },
        {
            img: 'assets/img/process/img6.png',
            title: 'Communicate Results',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            number: '6'
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class processBoxContent {
    img : string;
    title : string;
    paragraphText : string;
    number : string;
}