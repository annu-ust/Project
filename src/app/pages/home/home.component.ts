import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuDetailsService } from 'src/app/services/menu-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router:Router,private service:MenuDetailsService) { }
  foodData:any;
  
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
    
  }
  images = [
     { url: '../../../assets/img/bannering.jpg'},
    { url: '../../../assets/img/pic1.jpg' },
     { url: '../../../assets/img/pic2.jpg' },
    { url: '../../../assets/img/pic3.jpg'},
    { url: '../../../assets/img/pic6.jpg' },
     { url: '../../../assets/img/pic5.jpg' },
     { url: 'https://images.pexels.com/photos/14705155/pexels-photo-14705155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
     { url: '../../../assets/img/pic7.png'}
    
  ];
  orderNow(){
    this.router.navigateByUrl('menu');
  }
}
