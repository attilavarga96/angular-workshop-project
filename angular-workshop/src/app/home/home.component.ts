import { Component, OnInit } from '@angular/core';
import { BackendService } from '../_shared/services/backend/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jobs: Array<any> = [];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getJobs(['linkedin', 'profession'], 'software developer', 'szeged', 0, 10).subscribe(result => {
      console.log('RESULT', result);
      this.jobs = result.jobs;
    });
  }

}
