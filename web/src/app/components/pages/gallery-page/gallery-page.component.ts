import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gallery-page',
    templateUrl: './gallery-page.component.html',
    styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Gallery'
        }
    ]
    galleryImages: Image[] = [
        {
            img: 'assets/img/gallery/img1.jpg'
        },
        {
            img: 'assets/img/gallery/img2.jpg'
        },
        {
            img: 'assets/img/gallery/img3.jpg'
        },
        {
            img: 'assets/img/gallery/img4.jpg'
        },
        {
            img: 'assets/img/gallery/img5.jpg'
        },
        {
            img: 'assets/img/gallery/img6.jpg'
        },
        {
            img: 'assets/img/gallery/img7.jpg'
        },
        {
            img: 'assets/img/gallery/img8.jpg'
        },
        {
            img: 'assets/img/gallery/img9.jpg'
        }
    ]

}
class pageTitle {
    title : string;
}
class Image {
    img : string;
}