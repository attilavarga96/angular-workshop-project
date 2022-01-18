import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobidiumLocations, JobidiumSites } from '../_shared/models/backend.interface';
import { BackendService } from '../_shared/services/backend/backend.service';
import { DataService } from '../_shared/services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jobs: Array<any> = [];
  searchTitle = 'software developer';

  constructor(
    private backendService: BackendService,
    private dataService: DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.startSearch();
  }

  startSearch() {
    this.backendService.getJobs(
      [JobidiumSites.LINKEDIN, JobidiumSites.PROFESSION],
      this.searchTitle, JobidiumLocations.SZEGED, 0, 10
      ).subscribe(results => {
        this.jobs = results.jobs;
        console.log(this.jobs);
    },
    error => {
      console.error(error);
    }
    );
  }

  getJobSourceImagePath(source: string): string {
    return `../../assets/images/${source}_icon.png`;
  }

  navigateToDescription(description: string) {
    this.dataService.changeMessage(description);
    this.router.navigateByUrl('/description');
  }
}
