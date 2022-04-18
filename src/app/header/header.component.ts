import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: any = [
    {
      src: 'mailto:eduardocastellon2002@gmail.com',
      name: 'Mi Contacto'
    },
    {
      src: 'https://github.com/Kasuteryon',
      name: 'Mi Github'
    },
    
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
