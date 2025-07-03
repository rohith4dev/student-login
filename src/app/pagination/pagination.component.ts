import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  template: `<p>pagination works!</p>`,
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent { }
