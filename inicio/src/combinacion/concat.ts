import { concat, interval, of } from 'rxjs';
import { take } from 'rxjs/operators';


const inteval$ = interval(1000);

concat(
    inteval$.pipe(take(2)),
    inteval$.pipe(take(3)),
    [1, 2, 3, 4],
    of(1)
).subscribe();