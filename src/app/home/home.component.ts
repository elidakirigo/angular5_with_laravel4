import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private router: Router,
    private profileService: ProfileService) { }

  profiles: any;

  myProfile: any;

  user: any;

  id: number;

  // tslint:disable-next-line: variable-name
  public file_src = '/assets/avatar.jpg';


  getAllProfile() {

    this.profileService.showAllProfile().subscribe(profiles => {

      this.profiles = profiles;

    });
  }

  getOneProfile() {
    this.profileService.showOneProfile().subscribe(profiles => {

      this.myProfile = profiles;
    });
  }

  getUserName() {
    this.user = JSON.parse(localStorage.getItem('userDetails'));

    this.id = this.user.full.id;

    return this.user.profile;
  }

  deleteprofile(id) {
    const response = confirm('do you want to delete this profile?');

    if (response === true) {

      this.profileService.deleteProfile(id).subscribe(response => {

        this.getAllProfile();

        // tslint:disable-next-line: max-line-length
        this.messageService.showMessage('div#msg', 'alert-info', 'soory to see you go......profile has been successfully DELETED', 'glyphicon-ok');

        setTimeout(() => {
          localStorage.clear();
          this.router.navigate(['/login']);

        }, 5000);
      });
    } else {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {

    this.getAllProfile();

    this.getUserName();

    this.getOneProfile();
  }

}
