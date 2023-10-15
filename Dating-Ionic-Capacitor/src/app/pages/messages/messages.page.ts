/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Dating App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  constructor(public router: Router,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }

  goToVideoCall() {
    this.router.navigate(['video-call'])
  }

  goToCall() {
    this.router.navigate(['call'])
  }

  messages = [
    {
      side: 'left',
      msg: 'Hello',
    },
    {
      side: 'right',
      msg: 'Hii',
    },
    {
      side: 'left',
      msg: 'okay',
    },
    {
      side: 'right',
      msg: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe soluta perferendis nulla ad eius',
    },
    {
      side: 'left',
      msg: 'quo quaerat error neque aliquid dolores alias minima necessitatibus molestias voluptatem excepturi sit autem animi quia!',
    },
    {
      side: 'right',
      msg: 'yes of course',
    },
    {
      side: 'left',
      msg: 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      side: 'right',
      msg: 'yes of course you can do this ',
    },
    {
      side: 'left',
      msg: 'quaerat error neque aliquid dolores alias minima necessitatibus molestias voluptatem.',
    },
    {
      side: 'right',
      msg: 'neque aliquid dolores alias minima ne',
    },
    {
      side: 'left',
      msg: 'neque aliquid alias minima ne',
    },
    {
      side: 'left',
      msg: 'ipsum, dolor sit amet',
    },
    {
      side: 'left',
      msg: 'ipsum, dolor sit amet',
    },
  ];

}
