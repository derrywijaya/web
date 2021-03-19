import { Component, OnInit, Input } from '@angular/core';
import { IScientistBoxContent, IContent, IPublicationList, IResearch } from '../../service/model.service';

@Component({
  selector: 'app-research-newsframing',
  templateUrl: './research-newsframing.component.html',
  styleUrls: ['./research-newsframing.component.scss']
})
export class ResearchNewsframingComponent implements OnInit {

  @Input() inputData: IResearch;
  public inData : IResearch =null;
  constructor() { }

  ngOnInit(): void {
    this.inData = this.inputData;
    // setTimeout(() => {
    //   //console.log('hide');
    //   //this.showElement = false;
    //   this.inData = this.inputData;
    // }, 2000);
    // console.log(this.inputData);
  }



}
