import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';

const petition = 'https://api.github.com/users?per_page=5';
const fetchPromise = fetch(petition); //trabaja en base a promesas

// fetchPromise.then(resp => resp.json())
// .then(console.log)
// .catch();

const errorCatch = (err: AjaxError) => {
    console.warn(err.message);
    // return of({});
    return of([]);//podria retronar otra peticion, otro observable, arreglo, etc
};


ajax(petition)
.pipe(
    pluck('response'),
    catchError(errorCatch),//atrapa cualquier error que emite el observable
)
.subscribe(console.log)








