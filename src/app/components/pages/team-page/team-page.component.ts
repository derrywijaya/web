import { Component, OnInit, Input } from '@angular/core';
import { IScientistBoxContent, IContent, IPublicationList, IResearch, IPageTitle } from '../../service/model.service';

@Component({
    selector: 'app-team-page',
    templateUrl: './team-page.component.html',
    styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

    @Input() singleScientistBox: IScientistBoxContent[] ;
    constructor() { }

    ngOnInit(): void {
    }

    pageTitleArea: IPageTitle = 
        {
            title: 'Our Team',
            subTitle:''
        }
    
    

}
