import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  showMessage(selector, maxColor, maxText, loop) {

    $(selector).removeClass();

    $(selector).addClass('alert ' + maxColor + ' alert-dismissible');

    $(selector).html('<h4><b></b>' + maxText + '</h4>');

    $(selector).show().delay(1000).fadeIn().delay(4000).fadeOut();
  }
}
