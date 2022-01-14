import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { NullTemplateVisitor } from '@angular/compiler';
import { gitHubResponse, gitHubRepo} from '../../models/search.types'
import { sortOptions, directionsOptions} from '../../models/search.types'

@Injectable({
  providedIn: 'root'
})

export class RepoSearchService {
  
  //TODO: global var?
  private API_URL = 'https://api.github.com/search/repositories'

  constructor(private http: HttpClient) { }

  //TODO: params
  getRepositories(query: string = '', sortOptions?: sortOptions, sortDirection?: directionsOptions): Observable <gitHubResponse>  {
    const url = `${this.API_URL}?q=${query}&sort=${sortOptions || null}&order=${sortDirection || null}`

    return this.http.get(url)
    .pipe(
      map((response: any) => {
        response.items.forEach((x: gitHubRepo) => {
          // Would typically do in a date http interceptor, if more time
          x.created_at = new Date(x.created_at).toDateString()
        })
        return response
      })
    );
  }
}
