import { Component, OnInit } from '@angular/core';
import { IPublicationList, IContent } from '../../service/model.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  public pubList: IPublicationList = null;
  public publicationContent : IContent[] = null;
 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.insertData();
  }

  insertData() {
   
        this.getJSONData().subscribe(
          {
            next: (result) => {             
              
             
              this.pubList = result['publicationList'];
              this.publicationContent = result["publicationContent"];
                //console.log(dada.pageTitleArea)
                
    

                
            }
          });
  }

  getJSONData() {
    return this.http.get("./assets/data/personaldata.json");
  }

}
