import { fromEvent } from 'rxjs';
import { sampleTime, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ x, y }) => ({x, y})),
    sampleTime(1000),
)
.subscribe(console.log);


