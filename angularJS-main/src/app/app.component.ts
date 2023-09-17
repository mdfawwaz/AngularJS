import { Component } from '@angular/core';
import { CycleService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'cycle-data'
newData:any;
  borrowedCyles:any;
  showData = false;
  constructor(private cycleService: CycleService) {}

  ngOnInit() {

    this.cycleService.getCycles().subscribe(res=>{

      this.newData=res;

    })

 }
  toggleDataVisibility() {
   this.showData = !this.showData;
 }
}
