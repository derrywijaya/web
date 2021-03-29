import { Component, OnInit } from '@angular/core';
import {  IContent, IPublicationList} from '../../service/model.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-media-talks',
  templateUrl: './media-talks.component.html',
  styleUrls: ['./media-talks.component.scss']
})
export class MediaTalksComponent implements OnInit {

  public header: IContent = null;
  public publicationList : Array<IPublicationList> = []

  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { 
      
    }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
  this.route.params.subscribe({
    next: (param: any) => {

      const id = param['id'];
      
      console.log(id)

      this.getJSONData().subscribe(
        {
          next: (result) => {             
              switch (id) {
                case '1':
                  this.publicationList = result['media'];
                  this.header = {} as IContent;                  
                  this.header.title = "Media Coverages";
                  break;

                case '2':
                  this.publicationList = result['talk'];
                  this.header = {} as IContent;
                  this.header.title = "Talks";              
                  break;
                
              }
          }
        }

      )
    },

  });

}

getJSONData() {
  return this.http.get("./assets/data/otherpublicationsdata.json");
}

}
