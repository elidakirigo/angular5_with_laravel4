import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  setActive(menu: string) {


    $('li').removeClass();
    $('#' + menu).addClass('active');
  }

  signIn() {

  }
  display() {
    if (localStorage.getItem('userDetails') != null) {
      $('.mybutton').show();
    } else {
      $('.mybutton').hide();
    }
  }
  signOut() {
    localStorage.clear();
    this.display();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.display();
  }

}
