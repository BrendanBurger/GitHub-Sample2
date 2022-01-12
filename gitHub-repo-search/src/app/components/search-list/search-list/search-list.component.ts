import { Component, OnInit, Input } from '@angular/core';
import { gitHubRepo } from '../../../shared/models/search.types'

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
 @Input() repos: gitHubRepo[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
