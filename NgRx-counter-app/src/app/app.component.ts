import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import { selectCount } from './state/counter/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CounterComponent, AsyncPipe],
})
export class AppComponent {
  title = 'ngrx-counter-app';
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
  }
}
