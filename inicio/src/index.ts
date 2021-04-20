import { forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";

const gitHub = 'https://api.github.com/users';
const github_user = 'harold222';

forkJoin({
    user: ajax.getJSON(
        `${gitHub}/${github_user}`
    ),
    repos: ajax.getJSON(
        `${gitHub}/${github_user}/repos`
    ),
    gists: ajax.getJSON(
        `${gitHub}/${github_user}/gists`
    )
}).subscribe(console.log);
















