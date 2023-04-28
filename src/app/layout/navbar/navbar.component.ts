import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuVisible: boolean = false;
  screenSize: number = window.innerWidth;
  /**Show the menu when the screen size < 768px */
  showMenu(){
    this.menuVisible = !this.menuVisible;
    console.log(this.menuVisible);
  }

  @HostListener('window:resize', ['$event'])
  onResize():void{
    this.screenSize = window.innerWidth;
    if(this.screenSize > 768) this.menuVisible = false;
  }
}


