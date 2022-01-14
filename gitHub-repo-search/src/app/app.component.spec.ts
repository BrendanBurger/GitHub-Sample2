import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchListComponent } from './components/search-list/search-list/search-list.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchContainerComponent } from './components/search-container/search-container/search-container.component'
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchContainerComponent,
        SearchInputComponent,
        SearchListComponent,
        HttpClientModule
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'gitHub-repo-search'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('gitHub-repo-search');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('gitHub-repo-search app is running!');
  });
});
