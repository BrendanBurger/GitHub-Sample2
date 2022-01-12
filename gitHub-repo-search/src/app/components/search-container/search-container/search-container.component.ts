import { Component, OnInit } from '@angular/core';
import { RepoSearchService } from '../../../shared/shared/services/repo-search.service'
import { gitHubResponse, gitHubRepo } from '../../../shared/models/search.types'

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {

  inputStarted = false;
  isLoading = false;
  repositories: gitHubRepo[] = []
  constructor(private repoSearchService: RepoSearchService) { }

  ngOnInit(): void {
  }

  handleSearch(inputText: string) {
    this.isLoading = true;
    this.repoSearchService.getRepositories(inputText)
      .subscribe((results) => { 
        this.repositories = results.items
      });

    this.inputStarted = true;
    this.isLoading = false;
  }

}
