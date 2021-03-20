import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

    public  contactInfoBox2 : InfoBox2 = null;
    constructor() { }

    ngOnInit(): void {
        this.initData();

    }

    initData()
    {
        this.contactInfoBox2  = 
            {
                icon: 'bx bx-phone-call',
                title: 'Please contact me at',
                number: '(+44) - 45789 - 5789',
                email: 'wijaya@bu.edu'
            }
        
    }
    pageTitleArea: pageTitle =
        {
            title: 'Contact Us'
        }
    
    contactInfoBox1: InfoBox1[] = [
        {
            icon: 'bx bx-map',
            title: 'Our Address',
            location: '175 5th Ave, New York, NY 10010, United States'
        }
    ]
    
    contactInfoBox3: InfoBox3[] = [
        {
            icon: 'bx bx-time-five',
            title: 'Hours of Operation',
            text1: 'Monday - Friday: 09:00 - 20:00',
            text2: 'Sunday & Saturday: 10:30 - 22:00'
        }
    ]

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: "Get In Touch",
            title: 'Ready to Get Started?',
            paragraphText: 'Your email address will not be published. Required fields are marked *'
        }
    ]
    contactImage: Image[] = [
        {
            img: 'assets/img/contact.png'
        }
    ]

}
class pageTitle {
    title : string;
}
class InfoBox1 {
    icon : string;
    title : string;
    location : string;
}
class InfoBox2 {
    icon : string;
    title : string;
    number : string;
    email : string;
}
class InfoBox3 {
    icon : string;
    title : string;
    text1 : string;
    text2 : string;
}

class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class Image {
    img : string;
}