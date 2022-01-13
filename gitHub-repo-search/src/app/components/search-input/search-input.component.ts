import { Component, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @ViewChild('input') inputElement!: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  value = 'test';

  constructor() { }
  ngOnInit(): void {
  }


  // ngAfterViewInit(): void {
  //   fromEvent(this.inputElement.nativeElement, 'keyup')
  //     .pipe(
  //       debounceTime(500),
  //       pluck('target', 'value'),
  //       distinctUntilChanged(),
  //       filter((value: any) => value.length > 3),
  //       map((value) => value)
  //     )
  //     .subscribe(value => {
  //       this.search.emit(value);
  //     });
  // }


  onEnter(value: string) { 
    if (value.length >= 3 )
      {
        this.search.emit(value);
      }
  }

}
