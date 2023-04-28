
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit{
  menuVisible: boolean = false;
  screenSize: number = window.innerWidth;

  @ViewChild('dropdown') dropdown!: ElementRef;
  @ViewChild('dropdownContainer') container!: ElementRef<HTMLDivElement>;
  @ViewChild('navbar') navbar!: ElementRef<HTMLDivElement>;
  
  ngAfterViewInit(): void {
    if(this.screenSize < 769) this.addToDropdownContainer();
  }
  
  /**Show the menu when the screen size < 768px */
  showMenu() {
    this.menuVisible = !this.menuVisible;
    console.log(this.menuVisible);
  }
/**listen to the size of window and executed instructions needed */
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.screenSize = window.innerWidth;
    /**reset the change made by addToDropdownContainer() */
    if (this.screenSize > 768) {
      this.menuVisible = false; 
      this.navbar.nativeElement.appendChild(this.dropdown.nativeElement);
    }
    if(this.screenSize < 769)
    {
      this.addToDropdownContainer()
    }
  }

  /**Add the <ul.dropdown> as a child of <div.dropdownContainer> 
   * to avoid problems on navbar */
  addToDropdownContainer(){
    const dropdownContainer = this.container.nativeElement;
    const dropdownOptions = this.dropdown.nativeElement;
    dropdownContainer.appendChild(dropdownOptions);
  }
}
