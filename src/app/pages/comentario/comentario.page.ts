import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AnimationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.page.html',
  styleUrls: ['./comentario.page.scss'],
})
export class ComentarioPage implements OnInit {

  constructor(public alertController: AlertController, public navCtrl: NavController) { }

  ngOnInit() {
  }

  async enviarAlert() {
    const alert = await this.alertController.create({
      header: 'Comentário salvo!',
      subHeader: '',
      message: '',
      buttons: ['OK'],
    });
    
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);

    let animations:AnimationOptions={
      animated: true,
      animationDirection: "back"
    }
    this.navCtrl.back(animations)
  }

  back(){
    let animations:AnimationOptions={
      animated: true,
      animationDirection: "back"
    }
    this.navCtrl.back(animations)
  }

}
