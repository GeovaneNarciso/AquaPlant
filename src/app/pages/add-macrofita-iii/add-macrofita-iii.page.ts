import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-macrofita-iii',
  templateUrl: './add-macrofita-iii.page.html',
  styleUrls: ['./add-macrofita-iii.page.scss'],
})
export class AddMacrofitaIIIPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async enviarAlert() {
    const alert = await this.alertController.create({
      header: 'Envio concluído!',
      subHeader: '',
      message: 'Os dados enviados serão analisados pela equipe do Aquaplant. Em breve entraremos em contato.',
      buttons: ['OK'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
