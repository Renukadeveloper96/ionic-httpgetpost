import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users = [];
  user:any={}
  loader: any;
  constructor(
    private http: HttpClient,
    private loadCtrl: LoadingController,
    private toastCtrl:ToastController
  ) {
  }

  ionViewDidEnter() {
    this.fetchUsers();
  }

  fetchUsers() {

    this.http.get("https://reqres.in/api/users?page=2").subscribe((res: any) => {
      console.log(res);
      this.users = res.data;
    });
  }

  submit(){
    this.http.post("https://reqres.in/api/users",this.user).subscribe((res:any)=>{
      console.log(res);
      this.user=this.toastCtrl.create({duration:3000,message:"hi"+res.name +",your id is"+res.id}).then(t=>t.present());
    })
  }

}


