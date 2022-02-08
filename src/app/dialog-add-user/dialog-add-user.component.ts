import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/unser.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate: Date | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log('current user is', this.user)
  }

  onNoClick(){
    
  }

}
