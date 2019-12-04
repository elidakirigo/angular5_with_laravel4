import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../services/message.service';


declare var $: any;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponent implements OnInit {
  // changefile(){
  //   this.onfileSelected
  // }
  constructor(
    private router: Router,
    private profileservice: ProfileService,
    private messageservice: MessageService) { }

  // tslint:disable-next-line: variable-name
  public file_src = '/assets/avatar.jpg';

  model = new Profile();

  onfileSelected(event) {
    const e = $('input').val();

    this.file_src = e;
  }

  goback() {
    this.router.navigate(['/home']);
  }

  button() {

    alert('clicked')
    this.messageservice.showMessage('button#msg2', 'alert-info', 'new PROFILE has been added successfully', 'GLYPHYCON-OK');

  }
  addprofile() {

    this.profileservice.addprofile(this.model).subscribe((response) => {
      // console.log(JSON.stringify(response));
      const data = JSON.stringify(response);
      localStorage.setItem('userDetails', data );
      this.messageservice.showMessage('div#msg1', 'alert-info', 'new PROFILE has been added successfully', 'GLYPHYCON-OK');
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
    });
  }
  ngOnInit() {
  }

}
