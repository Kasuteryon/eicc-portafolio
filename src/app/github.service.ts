import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly url = 'https://api.github.com/users/kasuteryon/repos';

  constructor(private httpClient: HttpClient) {
  }

  loadRepos = () => {
    return this.httpClient.get(`${this.url}?type=owner&per_page=100`);
  };

  

  
}
