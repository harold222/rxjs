import { range } from 'rxjs';
import { map } from 'rxjs/operators';

range(1, 5)
.pipe(
    map(response => response * 10)
).subscribe(console.log);



