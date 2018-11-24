import { Component, OnInit } from '@angular/core';
import { NotificacionService } from "../../services/notificacion.service";
@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.css'],
  styles: [
    "node_modules/ngx-toastr/toastr.css" 
  ]
})
export class ToastNotificationComponent implements OnInit {
  message="";
  title:string="";
  type:string ="success";
  constructor(
    public notificationservice: NotificacionService
  ) { }

  ngOnInit() {
  }
  createNotificationObject(){
    let params ={
      title: this.title,
      message: this.message
    }
    if(this.type== "success")
      this.showSuccessNotification(params);
    else{
      this.showErrorNotification(params);
    }
    
  }
  showSuccessNotification(params){
    this.notificationservice.SuccessNotification(params);
  }
  showErrorNotification(params){
    this.notificationservice.ErrorNotification(params);
  }

}
