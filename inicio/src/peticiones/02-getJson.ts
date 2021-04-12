//GET JSON

import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';

const petition = 'https://httpbin.org/delay/1';

const errorCatch = (err: AjaxError) => {
    console.warn(err.message);
    // return of({});
    return of([]);//podria retronar otra peticion, otro observable, arreglo, etc
};


ajax.getJSON(petition, {
    'Content-Type': 'application/json',
    'Authorization': '12345678'
})
.pipe(
    catchError(errorCatch)
)
.subscribe(console.log)




























