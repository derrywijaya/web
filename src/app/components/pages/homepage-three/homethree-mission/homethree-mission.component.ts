import { isNgContent } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { deepStrictEqual } from 'assert';
import { IContent, IPublicationList } from '../../../service/model.service';

@Component({
    selector: 'app-homethree-mission',
    templateUrl: './homethree-mission.component.html',
    styleUrls: ['./homethree-mission.component.scss']
})
export class HomethreeMissionComponent implements OnInit {

    @Input() selectedPublication: IContent;
    @Input() pubList: IPublicationList[];
    public display : displayData[] = []

    constructor() { }

    ngOnInit(): void {
        this.filterData();
    }

    filterData()
    {
        var flags = [], output = [], l = this.pubList.length, i;
            for( i=0; i<l; i++) {
            if( flags[this.pubList[i].field]) continue;
            flags[this.pubList[i].field] = true;
            output.push(this.pubList[i].field);
        }
        console.log(output);

        output.forEach(x =>{
            let pub = this.pubList.filter(k => k.field == x)
            let head = {} as IContent;
            head.title = "";
            head.paragraphText1 = x;
            //head.title = "";
            let dis = {} as displayData;
            dis.header = head;
            dis.publications = pub;
            this.display.push(dis);

        })
    }

    

}

class displayData{
    header: IContent;
    publications: Array<IPublicationList>;
  }
