import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  constructor(private service:SharedService) { }

  UserList:any=[];

  ngOnInit(): void {
    this.refreshUserList();
  }

  refreshUserList(){
    this.service.getUsersList().subscribe(data => {
      this.UserList=data;
    });
  }

}
