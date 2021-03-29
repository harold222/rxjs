import { mapTo } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const key$ = fromEvent<KeyboardEvent>(document, 'keyup');

const pluck$ = key$
.pipe(
    mapTo('si')
)
.subscribe(console.log);
