import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
//import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-folio',
  templateUrl: './folio.component.html',
  styleUrls: ['./folio.component.css']
})
export class FolioComponent implements OnInit {

  user: any;
  token: any;
  pedidos: Observable<any[]>;
  public descripcion : any;

  constructor(public auts : AuthenticationService,
              public afa  : AngularFireAuth,
              public db   : AngularFireDatabase
              ) {
    this.afa.authState.subscribe((data) => {
      console.log(data);
      this.user = data;
      this.pedidos = this.db.list('pedidos', ref => ref.orderByChild('user_id').equalTo(this.user.uid)).valueChanges<any>();
    });

    

    
  }

  ngOnInit() {
  }

  login() {
    this.auts.login()
      .then((data) => {
        //this.pedidos = this.db.list<any>('pedidos').valueChanges<any>();
        
        console.log(this.pedidos);
        console.log(this.user);
        
      })
      .catch((error) => {
        console.log(error);
        console.log('Error');
      });
  }

  logout() {
    this.auts.logout();
  }

  addFolio(){
    console.log(this.descripcion);
    console.log((new Date()));
    const itemsRef = this.db.list('pedidos');
    var date = new Date();
    itemsRef.push({ uuid    : UUID.UUID(),
                    user_na : this.user.displayName,
                    user_id : this.user.uid, 
                    fecha   : ((new Date()).getTime()),
                    descr   : this.descripcion,
                    estado  :'0' });
  }

}