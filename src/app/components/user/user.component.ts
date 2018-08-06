import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { post } from '../../../../node_modules/@types/selenium-webdriver/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  address:Address;
  email:any;
  hobbies:any[];
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor ran..');
   }

  ngOnInit() {
    console.log('ngOnInit ran..');

    this.name = 'John Dow';
    this.age = 30;
    this.email = 'john@dow.me';
    this.address = {
      street:'50 Main str',
      city:'Boston',
      state:'MA'
    }
    this.hobbies = ['Write code', 'Watch movies'];

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    this.name='Brad Traversy';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(i){
    this.hobbies.splice(i, 1);
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id: number;
  title: string;
  body: string;
  userId: number;
}