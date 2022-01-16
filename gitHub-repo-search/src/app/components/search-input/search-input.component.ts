import { Component, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { directionsOptions, sortOptions, searchOptions} from '../../shared/models/search.types'

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @ViewChild('input') inputElement!: ElementRef;
  @Output() search: EventEmitter<searchOptions> = new EventEmitter<searchOptions>();
  value = ' ';

  orderOptions: sortOptions[] = [sortOptions.forks, sortOptions.help_wanted_issues, sortOptions.stars, sortOptions.updated];
  sortDirections: directionsOptions[] = [directionsOptions.asc, directionsOptions.desc];
  sortOrder!: sortOptions
  sortDirection!: directionsOptions

  constructor() { }
  ngOnInit(): void {
  }

  onEnter(value: string) { 
    this.value = value;
    this.emitSearch();
  }

  updateSortOrder(e: any){
    this.sortOrder = e.target.value;
    this.emitSearch();
  }

  updateSortDirection(e: any){
    this.sortDirection = e.target.value;
    this.emitSearch();
  }
   
  emitSearch() {
    if (this.value.length > 2) {
      const query :searchOptions= {
        sortDirection: this.sortDirection,
        sortOption: this.sortOrder,
        chars: this.value
      }
      this.search.emit(query)
    }
  }
}
