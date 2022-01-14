import { TestBed } from '@angular/core/testing';
import { RepoSearchService } from './repo-search.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { gitHubResponse, sortOptions, directionsOptions} from '../../models/search.types'

describe('RepoSearchService', () => {
  let service: RepoSearchService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoSearchService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getRepositories should return expected data', (done) => {
    const expectedData: gitHubResponse = {
      total_count: 1,
      incomplete_results: false,
      items: [
        {
          id: 123,
          node_id: '321',
          name: 'fakeRepo', 
          full_name: 'FakeUser',
          owner: {
              login: 'FakeUser566@github.com',
              id: 7777,
              avatar_url: ' '
          },
          html_url: ' ',
          description: 'Fake Repo to create fake Things',
          created_at: new Date().toDateString(),
          forks: 3,
          watchers: 2,
          stargazers_count: 1,
          open_issues: 0
        }
      ]
    }
    
    const mockSearchParams = ['fake', sortOptions.forks, directionsOptions.asc ]
    
    service.getRepositories(...mockSearchParams).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('https://api.github.com/search/repositories');

    testRequest.flush(expectedData);
  });
});
