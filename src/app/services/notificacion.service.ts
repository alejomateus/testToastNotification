import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class NotificacionService {
  constructor(private toastr: ToastrService) {}
  list_notifications = [];
  ngOnInit() {}
  
  SuccessNotification(params,petition = false) {
    this.toastr.success(params.title, params.message, {
      closeButton: true,
      timeOut: 1500
    });
    if(!petition){
      this.list_notifications.push({
        title: params.title,
        message: params.message,
        type: "success"
      });
    }
   
  }
  ErrorNotification(params,petition= false) {
    this.toastr.error(params.title, params.message, {
      closeButton: true,
      timeOut: 1500
    });
    if(!petition){
      this.list_notifications.push({
        title: params.title,
        message: params.message,
        type: "error"
      });
    }
    
  }
  getNotifications(){
    this.toastr.clear();
    return this.list_notifications;  
  }
  anyNotification(){
    this.toastr.info("You don´t have any Notification");
  }
}
