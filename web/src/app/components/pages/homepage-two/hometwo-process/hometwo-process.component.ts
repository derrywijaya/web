import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-process',
    templateUrl: './hometwo-process.component.html',
    styleUrls: ['./hometwo-process.component.scss']
})
export class HometwoProcessComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: "How It's Work",
            title: 'Our Data Analytics Process',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    processImage: Image[] = [
        {
            img: 'assets/img/process/img7.png'
        }
    ]
    processContent: Content[] = [
        {
            img: 'assets/img/process/img-small1.png',
            title: 'Frame the Problem',
            number: '1'
        },
        {
            img: 'assets/img/process/img-small2.png',
            title: 'Collect the Raw Data',
            number: '2'
        },
        {
            img: 'assets/img/process/img-small3.png',
            title: 'Process the Data',
            number: '3'
        },
        {
            img: 'assets/img/process/img-small4.png',
            title: 'Explore the Data',
            number: '4'
        },
        {
            img: 'assets/img/process/img-small5.png',
            title: 'Perform Analysis',
            number: '5'
        },
        {
            img: 'assets/img/process/img-small6.png',
            title: 'Communicate Results',
            number: '6'
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class Image {
    img: string;
}
class Content {
    img: string;
    title : string;
    number : string;
}