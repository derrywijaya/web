import { Component, OnInit, Input } from '@angular/core';
import { IContent, IInfo, ICourseInfo, ICurriculum, IPageTitle, ICourse } from '../../service/model.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-courses-details-page',
    templateUrl: './courses-details-page.component.html',
    styleUrls: ['./courses-details-page.component.scss']
})
export class CoursesDetailsPageComponent implements OnInit {

    public courseDetail: ICourse = null;
    public courses: ICourse[] = [];

    constructor(private route: ActivatedRoute,
        private http: HttpClient) { }

    ngOnInit(): void {
        this.insertData();
    }

    insertData() {

        this.route.params.subscribe({
            next: (param: any) => {
                this.getJSONData().subscribe(
                    {
                        next: (result: ICourse[]) => {
                            this.courses = result['courseList'];
                            this.courseDetail = this.courses.filter((e) => e.code == param['id'])[0]

                        }
                    }

                );
            },

        });

    }

    getJSONData() {
        return this.http.get("../../../../assets/data/coursedetailsdata.json");
    }





}


