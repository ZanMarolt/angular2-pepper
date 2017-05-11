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
  private subscription;

  constructor(private af: AngularFire){

  }

  ngOnInit(){
    this.af.database.list('/cousines').subscribe(x => {
      this.cousines = x;
      console.log(this.cousines);
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
