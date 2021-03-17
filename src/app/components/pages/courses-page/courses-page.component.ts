import { Component, OnInit } from '@angular/core';
import { IPageTitle, ICourseList } from '../../service/model.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-courses-page',
    templateUrl: './courses-page.component.html',
    styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

    public researchData: ICourseList = null;
    //public singleCourses: ICoursesContent[] = null;
    constructor(private http: HttpClient) { 

    }

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.getJSONData().subscribe(
            {
              next: (result: ICourseList) => {
                  this.researchData = result;
                  console.log(this.researchData)
              }
            }
          );
    }

    getJSONData() {
        return this.http.get("./assets/data/coursedata.json");
      }

    pageTitleArea: IPageTitle = 
        {
            title: 'Courses',
            subTitle: ''
        }
    
    

}
