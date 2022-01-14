import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchListComponent } from './components/search-list/search-list/search-list.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchContainerComponent } from './components/search-container/search-container/search-container.component'
import { CountdownGlobalConfig, CountdownModule } from 'ngx-countdown';

function countdownConfigFactory(): CountdownGlobalConfig {
  return { format: `mm:ss` } as any;
}

@NgModule({
  declarations: [
    AppComponent,
    SearchListComponent,
    SearchContainerComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CountdownModule
  ],
  providers: [{ provide: CountdownGlobalConfig, useFactory: countdownConfigFactory }],
  bootstrap: [AppComponent]
})
export class AppModule { }
