import { Component, OnInit, Input } from '@angular/core';
import { IContent, IPublicationList } from '../../../service/model.service';

@Component({
    selector: 'app-homethree-mission',
    templateUrl: './homethree-mission.component.html',
    styleUrls: ['./homethree-mission.component.scss']
})
export class HomethreeMissionComponent implements OnInit {

    @Input() selectedPublication: IContent;
    @Input() pubList: IPublicationList[];

    constructor() { }

    ngOnInit(): void {
    }


}
