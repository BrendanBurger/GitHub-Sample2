import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { NullTemplateVisitor } from '@angular/compiler';
import { gitHubResponse } from '../../models/search.types'

@Injectable({
  providedIn: 'root'
})

export class RepoSearchService {
  
  //TODO: global var?
  private API_URL = 'https://api.github.com/search/repositories'

  constructor(private http: HttpClient) { }

  //TODO: params
  getRepositories(query: string = '', page: number = 1, sort = null, order = NullTemplateVisitor): Observable <gitHubResponse>  {
    const url = `${this.API_URL}?q=${query}`

    return this.http.get(url)
    .pipe(
      map((response: any) => response)
    );
  }
}
