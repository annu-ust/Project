import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuDetailsService } from 'src/app/services/menu-details.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
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
     { url: '../../../assets/img/pic4.jpg'},
     { url: '../../../assets/img/pic7.png'}
    
  ];
  
  orderNow(){
    this.router.navigateByUrl('menu');
  }
  bookTable(){
    this.router.navigateByUrl('table');
  }
}
