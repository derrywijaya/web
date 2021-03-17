import { Component, OnInit, Input } from '@angular/core';
import { IScientistBoxContent, IContent, IPublicationList, IResearch } from '../../service/model.service';

@Component({
  selector: 'app-research-newsframing',
  templateUrl: './research-newsframing.component.html',
  styleUrls: ['./research-newsframing.component.scss']
})
export class ResearchNewsframingComponent implements OnInit {

  @Input() inputData: IResearch;
  constructor() { }

  ngOnInit(): void {
    console.log(this.inputData.publicationContent);
  }



}
