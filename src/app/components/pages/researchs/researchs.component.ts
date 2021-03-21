import { Component, OnInit } from '@angular/core';
import { IScientistBoxContent, IContent, IPublicationList, IPageTitle, IResearch, IInfo, IDetailsDesc } from '../../service/model.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-researchs',
  templateUrl: './researchs.component.html',
  styleUrls: ['./researchs.component.scss']
})
export class ResearchsComponent implements OnInit {

  public researchData: IResearch = null;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { 

      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      
      // this.router.events.subscribe((e: any) => {
      //   // If it is a NavigationEnd event re-initalise the component
      //   if (e instanceof NavigationEnd) {
      //     this.insertData();
      //   }
      // });
    }

  ngOnInit(): void {
    this.insertData();
    //this.researchData = {} as IResearch;
    // this.route.url.subscribe(()=> {
    //   this.insertData();

    // })
    
  }

  insertData() {
    
    this.route.params.subscribe({
      next: (param: any) => {

        const id = param['id'];
        
        console.log(id)

        this.getJSONData().subscribe(
          {
            next: (result) => {             
                // let dada = {} as IResearch;
                // dada = result['framingdata'];
                //console.log(param['id']);
                //this.router.onSameUrlNavigation = 'reload';
                
                this.researchData = {} as IResearch;
               
                //this.service.get(term).then(result => { console.log(result); });

                switch (id) {
                  case '1':
                    this.researchData = result['framingdata'];
                    //console.log(this.researchData)
                    //this.setFramingData();
                   
                    break;
                  case '2':
                    this.researchData = result['translationdata'];
                   
                    console.log(this.researchData)
                    break;
                  case '3':
                    this.researchData = result['publichealthdata'];
                    
                    console.log(this.researchData)
                    break;
                  case '4':
                    this.researchData = result['fewshotdata'];
                    
                    console.log(this.researchData)
                    break;
                }
            }
          }

        )
      },

    });

  }

  getJSONData() {
    return this.http.get("./assets/data/pagedata.json");
  }





}






