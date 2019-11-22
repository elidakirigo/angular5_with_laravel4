import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { MessageService } from '../services/message.service';
import { Profile } from '../profile';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})


export class EditComponent implements OnInit {
  // changefile(){
  //   this.onfileSelected
  // }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private profileservice: ProfileService,
    private messageservice: MessageService) { }

  // tslint:disable-next-line: variable-name
  // public file_src = '/assets/avatar.jpg';

  profile: Profile;

  ngOnInit() {

      this.getOneProfile();
    }
  getOneProfile() {

    const id = this.route.snapshot.params.id;

    this.profileservice.showProfile(id).subscribe(profile => {

      this.profile = profile[0];

      this.profile.id = id;

    });
  }
  updateprofile() {

    this.profileservice.editProfile(this.profile).subscribe(response => {

      this.messageservice.showMessage('div#msg1', 'alert-info', 'profile has been successfully updated', 'glyphicon-ok');

    });
  }
}
