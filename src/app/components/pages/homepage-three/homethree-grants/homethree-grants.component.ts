import { Component, OnInit, Input } from '@angular/core';
import { IGrants, IContent} from '../../../service/model.service';

@Component({
  selector: 'app-homethree-grants',
  templateUrl: './homethree-grants.component.html',
  styleUrls: ['./homethree-grants.component.scss']
})
export class HomethreeGrantsComponent implements OnInit {

    @Input() grantContent: IContent;
    @Input() grantList: IGrants[];
  constructor() { }

  ngOnInit(): void {
  }





}



