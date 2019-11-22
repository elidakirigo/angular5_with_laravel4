import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public server = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  addprofile(info: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const local = 'addprofile';

    const data = JSON.stringify(info);

    return this.http.post<any>(this.server + local, data, { headers });

  }

  showAllProfile() {

    return this.http.get<any>(this.server + 'profile');
  }

  showProfile(id) {

    return this.http.get<any>(this.server + 'selected_profile/' + id);
  }

  editProfile(info) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const data = JSON.stringify(info);

    return this.http.post<any>(this.server + 'editprofile', data, { headers });

  }

  deleteProfile(id) {

    return this.http.get<any>(this.server + 'deleteprofile/' + id);
  }
}
