import { Component, OnInit } from '@angular/core';
import { IScientistBoxContent, IContent, IPublicationList, IPageTitle, IResearch, IInfo, IDetailsDesc } from '../../service/model.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-researchs',
  templateUrl: './researchs.component.html',
  styleUrls: ['./researchs.component.scss']
})
export class ResearchsComponent implements OnInit {

  public researchData: IResearch = null;
  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.researchData = {} as IResearch;
    this.insertData();
  }

  insertData() {

    this.route.params.subscribe({
      next: (param: any) => {
        this.getJSONData().subscribe(
          {
            next: (result) => {
              let dada = {} as IResearch;
              dada = result['framingdata'];
              console.log(dada.pageTitleArea)

              switch (param['id']) {
                case '1':
                  this.researchData = result['framingdata'];
                  //this.setFramingData();
                  break;
                case '2':
                  this.researchData = result['translationdata'];                  
                  break;
                case '3':
                  this.researchData = result['fewshotdata'];
                  break;
              }
            }
          }

        )
      },

    });

  }

  getJSONData() {
    return this.http.get("../../../../assets/data/pagedata.json");
  }

  



}






