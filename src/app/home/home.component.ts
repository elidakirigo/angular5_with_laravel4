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

  getAllProfile() {

    this.profileService.showAllProfile().subscribe(profiles => {

      this.profiles = profiles;

    });
  }

  deleteprofile(id) {
    const response = confirm('do you want to delete this profile?');

    if (response === true) {

      this.profileService.deleteProfile(id).subscribe(response => {

        this.getAllProfile();

        this.messageService.showMessage('div#msg', 'alert-info', 'profile has been successfully DELETED', 'glyphicon-ok');


      });
    } else {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {

    this.getAllProfile();
  }

}
