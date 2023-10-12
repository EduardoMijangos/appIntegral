import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

interface options {
  message?: string;
  position?: 'top' | 'bottom' | 'middle' ;
  icon: string;
  color: string;
  duration: number;
}

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    private toastCtr: ToastController
  ) { }


  async generateToast(op: options ){
    const toast = await this.toastCtr.create({
      message: op.message,
      position: op.position,
      icon: op.icon,
      color: op.color,
      duration: op.duration
    });
    await toast.present();
  }
}
