import { Component, OnInit } from '@angular/core';
import { NotificacionService } from "../../services/notificacion.service";

@Component({
  selector: 'app-customnotificaction',
  templateUrl: './customnotificaction.component.html',
  styleUrls: ['./customnotificaction.component.css']
})
export class CustomnotificactionComponent implements OnInit {

  constructor(public notificationservice: NotificacionService) { }

  ngOnInit() {
  }
  ViewNotifications(){
    let list =this.notificationservice.getNotifications();
    if (list.length>0)
    list.forEach((notification,index)=>{
      let params ={
        title: `${index+1}- ${notification.title}`,
        message: notification.message
      }
      if(notification.type== "success")
        this.showSuccessNotification(params);
      else{
        this.showErrorNotification(params);
      }
    })
    else
      this.notificationservice.anyNotification();
  }
  showSuccessNotification(params){
    this.notificationservice.SuccessNotification(params,true);
  }
  showErrorNotification(params){
    this.notificationservice.ErrorNotification(params,true);
  }
}
