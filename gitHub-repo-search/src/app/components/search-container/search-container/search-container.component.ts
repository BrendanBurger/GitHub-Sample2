import { Component, OnInit, ViewChild } from '@angular/core';
import { RepoSearchService } from '../../../shared/shared/services/repo-search.service'
import { gitHubResponse, gitHubRepo, directionsOptions, sortOptions, searchOptions } from '../../../shared/models/search.types'
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {

  @ViewChild('cd', { static: false }) private countdown!: CountdownComponent;

  inputStarted = false;
  isLoading = false;
  repositories: gitHubRepo[] = [];
  apiTimeout = false;
  countdownConfig: CountdownConfig = { leftTime: 60};

  // Const(s) could be moved to better place
  gitHubDocsLink = "https://docs.github.com/en/rest/reference/search#rate-limit"
  API_TIMEOUT_ERRORCODE = 403;

  constructor(private repoSearchService: RepoSearchService) { }

  ngOnInit(): void {
  }

  handleSearch(query: searchOptions) {
    this.isLoading = true;
    this.repoSearchService.getRepositories(query.chars, query.sortOption, query.sortDirection)
      .subscribe((results) => { 
        this.repositories = results.items
      },
      (err) => {
        if(err.status === this.API_TIMEOUT_ERRORCODE)
        this.apiTimeout = true;
        this.countdown?.begin()
      },() => {
        this.isLoading = false;
      });
    this.inputStarted = true;
  }

  // Countdown 
  handleCountdownEvent(e: CountdownEvent) {
    if (e.action === 'done') {
      this.apiTimeout = false;
      this.isLoading = false;
    }
  }

}
