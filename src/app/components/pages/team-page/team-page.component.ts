import { Component, OnInit, Input } from '@angular/core';
import { IScientistBoxContent, IContent, IPublicationList, IResearch, IPageTitle } from '../../service/model.service';

@Component({
    selector: 'app-team-page',
    templateUrl: './team-page.component.html',
    styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

    @Input() singleScientistBox: IScientistBoxContent[];
    public display: displayData[] = []
    constructor() { }

    ngOnInit(): void {
        this.filterData();
    }

    pageTitleArea: IPageTitle =
        {
            title: 'Our Team',
            subTitle: 'Members of the Language LeArning MAchine (LLAMA) group at Boston University'
        }


    filterData() {

        console.log(this.singleScientistBox);

        var flags = [], output = [], l = this.singleScientistBox.length, i;
        for (i = 0; i < l; i++) {
            if (flags[this.singleScientistBox[i].status]) continue;
            flags[this.singleScientistBox[i].status] = true;
            output.push(this.singleScientistBox[i].status);
        }
        

        output.forEach(x => {
            let pub = this.singleScientistBox.filter(k => k.status == x)
            let head = {} as IContent;
            head.title = "";
            head.paragraphText1 = x;
            //head.title = "";
            let dis = {} as displayData;
            dis.header = head;
            dis.studentList = pub;
            this.display.push(dis);

        })
    }

}


class displayData {
    header: IContent;
    studentList: Array<IScientistBoxContent>;
}