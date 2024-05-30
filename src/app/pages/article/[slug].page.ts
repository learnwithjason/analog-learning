import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { injectLoad } from '@analogjs/router';
import { load } from './[slug].server';

@Component({
  standalone: true,
  template: `
    <h1>Current: {{ slug | async }}</h1>
    <pre>{{ data() | json }}</pre>
  `,
  imports: [AsyncPipe, JsonPipe],
})
export default class ArticleComponent {
  route = inject(ActivatedRoute);
  slug = this.route.paramMap.pipe(map((params) => params.get('slug')));
  data = toSignal(injectLoad<typeof load>(), { requireSync: true });
}
