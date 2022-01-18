import { Component, OnInit } from '@angular/core';
import { DataService } from '../_shared/services/data/data.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  description = 'None';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(result => {
      this.description = result;
    });
  }

}
