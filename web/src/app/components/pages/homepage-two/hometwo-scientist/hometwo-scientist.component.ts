import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-scientist',
    templateUrl: './hometwo-scientist.component.html',
    styleUrls: ['./hometwo-scientist.component.scss']
})
export class HometwoScientistComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleScientistItem1: ScientistItem1[] = [
        {
            img: "assets/img/scientist/img9.jpg"
        }
    ]
    singleScientistItem2: ScientistItem2[] = [
        {
            img: "assets/img/scientist/img10.jpg"
        }
    ]
    singleScientistItem3: ScientistItem3[] = [
        {
            img: "assets/img/scientist/img11.jpg"
        }
    ]
    scientistSectionTitle: SectionTitle[] = [
        {
            subTitle: 'Our Team',
            title: 'Meet Our Data Scientist Preparing For Your Business Success',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            link: 'team-1',
            linkText: 'View Our Team',
            linkIcon: 'flaticon-view'
        }
    ]

}
class ScientistItem1 {
    img : string;
}
class ScientistItem2 {
    img : string;
}
class ScientistItem3 {
    img : string;
}
class SectionTitle {
    subTitle : string;
    title : string;
    paragraphText1 : string;
    paragraphText2 : string;
    link : string;
    linkText : string;
    linkIcon : string;
}