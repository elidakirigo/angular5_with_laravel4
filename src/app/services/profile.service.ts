import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public server = 'http://localhost:8000/api/';

  user: any;

  id: any;

  constructor(private http: HttpClient) { }

  addprofile(info: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const local = 'addprofile';

    const data = JSON.stringify(info);

    return this.http.post<any>(this.server + local, data, { headers });

  }

  showOneProfile() {
    this.getUserID();

    return this.http.get<any>(this.server + 'oneprofile/' + this.id);
  }
  showAllProfile() {

    return this.http.get<any>(this.server + 'profile');
  }

  showProfile(id) {

    return this.http.get<any>(this.server + 'selected_profile/' + id);
  }
  getUserID() {
    this.user = JSON.parse(localStorage.getItem('userDetails'));

    return this.id = this.user.full.id;
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
