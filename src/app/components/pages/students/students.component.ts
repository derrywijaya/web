import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IScientistBoxContent, } from '../../service/model.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public teamMembers : Array<IScientistBoxContent> = null;

  ngOnInit(): void {
    this.getData();
  }

  getData()
  {
    this.getJSONData().subscribe(
      {
        next: (result) => {
          console.log(result);
          this.teamMembers = result['teamMembers'];
        }
      }
    );
  }

  getJSONData() {
    return this.http.get("./assets/data/studentsdata.json");
  }

}
