import { Component, OnInit } from '@angular/core';
import { IContent, IPublicationList, IGrants } from '../../service/model.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-homepage-three',
    templateUrl: './homepage-three.component.html',
    styleUrls: ['./homepage-three.component.scss']
})
export class HomepageThreeComponent implements OnInit {
    public publicationContent: IContent = null;
    public pubList: IPublicationList[] = null;
    public grantContent: IContent = null;
    public grantList: IGrants[] = null;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.getJSONData().subscribe(
            {
              next: (result) => {
                this.publicationContent = result['publicationContent'];
                console.log(this.publicationContent)
                this.pubList = result['publicationList'];
                this.grantContent = result['grantContent'];
                this.grantList = result['grantList'];
              }
            }
        );
    }

    getJSONData() {
        return this.http.get("../../../../assets/data/personaldata.json");
      }

    

    

}