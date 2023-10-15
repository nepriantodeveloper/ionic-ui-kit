/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : MeTube App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.page.html',
  styleUrls: ['./shorts.page.scss'],
})


export class ShortsPage implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;
  id: any;
  name: any = '';
  source: any = '';
  news: any = '';
  videos: any[] = [];
  sources: any[] = [];
  slideOpts = {
    direction: 'vertical',
    slidesPerView: 1,
  };
  activeIndex: any = 0;
  demos = [
    {
      "description": "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
      "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      "subtitle": "By Google",
      "thumb": "images/ForBiggerBlazes.jpg",
      "title": "For Bigger Blazes"
    },
    {
      "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "subtitle": "By Blender Foundation",
      "thumb": "images/BigBuckBunny.jpg",
      "title": "Big Buck Bunny"
    },
    {
      "description": "The first Blender Open Movie from 2006",
      "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "subtitle": "By Blender Foundation",
      "thumb": "images/ElephantsDream.jpg",
      "title": "Elephant Dream"
    },
    {
      "description": "The first Blender Open Movie from 2006",
      "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "subtitle": "By Blender Foundation",
      "thumb": "images/ElephantsDream.jpg",
      "title": "Elephant Dream"
    },
    {
      "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
      "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      "subtitle": "By Google",
      "thumb": "images/ForBiggerJoyrides.jpg",
      "title": "For Bigger Joyrides"
    },
    {
      "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
      "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      "subtitle": "By Google",
      "thumb": "images/ForBiggerMeltdowns.jpg",
      "title": "For Bigger Meltdowns"
    },
    {
      "description": "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
      "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      "subtitle": "By Blender Foundation",
      "thumb": "images/Sintel.jpg",
      "title": "Sintel"
    },
    {
      "description": "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",
      "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      "subtitle": "By Garage419",
      "thumb": "images/SubaruOutbackOnStreetAndDirt.jpg",
      "title": "Subaru Outback On Street And Dirt"
    },

  ];
  currentVideo: any;
  percentage: any = 0;
  seg_id = 1;
  constructor(
    // private router: Router,
    private modalController: ModalController,
    private navCtrl: NavController
  ) {
    setTimeout(() => {
      const videoPlayer: HTMLMediaElement = <HTMLMediaElement>document.getElementById('0');
      console.log(videoPlayer);
      this.currentVideo = videoPlayer;
      videoPlayer.src = this.demos[0].sources;
      videoPlayer.pause();
      try {
        videoPlayer.play();
      } catch (err) {
        videoPlayer.play(); // with your logic
        videoPlayer.autoplay = true;
      }
    }, 1000);
  }
  slideDidChange(ev: any) {
    this.percentage = 0;
    this.slides.getActiveIndex().then((index: number) => {
      console.log('current', this.currentVideo);
      this.playvideo(index);
    });
  };
  async playvideo(videoElementId) {
    this.percentage = 0;
    console.log('index=>', videoElementId);
    let videoPlayer: HTMLMediaElement = <HTMLMediaElement>document.getElementById(videoElementId);
    videoPlayer.src = this.demos[videoElementId].sources;
    this.currentVideo.pause();
    this.currentVideo.currentTime = 0;
    this.currentVideo = videoPlayer;
    videoPlayer.pause();
    try {
      await videoPlayer.play();
    } catch (err) {
      await videoPlayer.play(); // with your logic
      videoPlayer.autoplay = true;
    }
  }
  videoEnd() {
    console.log('video ended');
    this.slides.slideNext();
  }
  ngOnInit() {
  }
  ionViewDidLeave() {
    console.log('lved');
    this.currentVideo.pause();
  }
  ionViewWillUnload() {
    console.log('lved22');
    this.currentVideo.pause();
  }
  ionViewWillLeave() {
    console.log('lved2');
    this.currentVideo.pause();
  }
  toggler() {
    console.log(this.currentVideo);
    if (this.currentVideo.paused) {
      console.log('paused');
      this.currentVideo.play();
    } else {
      console.log('playing');
      this.currentVideo.pause();
    }
  }
  onTimeUpdate() {
    this.percentage = (this.currentVideo.currentTime / this.currentVideo.duration) * 100;
    console.log(this.percentage);
  }

  // async comments() {
  //   const modal = await this.modalController.create({
  //     component: CommentsPage,
  //     cssClass: 'custom_modal',
  //     componentProps: { value: 123 }
  //   });

  //   await modal.present();
  //   const data = await modal.onDidDismiss();
  //   console.log(data)

  // }

  segmentChange(val) {
    this.seg_id = val;
  }

  goToChannel() {
    // this.router.navigate(['friend-account'])
    this.navCtrl.navigateBack('channel');
  }

}
