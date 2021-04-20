import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, mergeAll, mergeMap, pluck, switchAll, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

const showUsers = (usuarios) => {
    console.log(usuarios);
    orderList.innerHTML = '';

    for (const user of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');

        img.src = user.avatar_url;
        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'see page';
        anchor.target = '_blanck';

        li.append(img);
        li.append(user.login + '');
        li.append(anchor);

        orderList.append(li);
    }

};

//streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    distinctUntilChanged(),
    debounceTime(400),
    pluck('target', 'value'),
    mergeMap(resp => 
        ajax.getJSON(`https://api.github.com/search/users?q=${resp}`)
    ),
).subscribe()


input$.pipe(
    distinctUntilChanged(),
    debounceTime(400),
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap<string, Observable<any>>(resp => 
        ajax.getJSON(`https://api.github.com/search/users?q=${resp}`)
    ),
    pluck('items') // objeto de la peticion hija
)
// .subscribe(resp => {
//     console.log('resp: ',resp);
//     showUsers(resp);
// });

const url = 'https://httpbin.org/delay/1?args=';

input$
.pipe(
    pluck('target','value'), //compara esto con el mergMap en network
    switchMap(text => ajax.getJSON(url+text))
)
.subscribe(console.log);