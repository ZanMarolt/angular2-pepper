import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire } from 'angularfire2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  cousines;
  restaurant;

  constructor(private af: AngularFire){

  }

  ngOnInit(){
    this.cousines = this.af.database.list('/cousines');
    this.restaurant = this.af.database.object('/restaurant')
  }

  add() {
    this.cousines.push({
      name: 'Asian'
    })
  }

  update() {
    this.af.database.object('/restaurant').update({
      name: 'New Name',
      rating: 5
    })
  }
}
