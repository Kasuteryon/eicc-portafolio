import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Typewriter from 't-writer.js';
import {GithubService} from '../github.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('asTitle') asTitle: ElementRef;
  links: Array<LinkModel> = [
    {
      link: 'https://github.com/Kasuteryon',
      icon: '<i class="uil uil-github-alt"></i>'
    },
    {
      link: 'mailto:eduardocastellon2002@gmail.com',
      icon: '<i class="uil uil-envelope"></i>'
    },
    {
      link: 'https://www.instagram.com/xeiccx/',
      icon: '<i class="uil uil-instagram"></i>'
    }
  ];

  constructor(private gitHubService: GithubService) {
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initEffect();
  }

  initEffect = () => {
    const target = this.asTitle.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white'
    });

    writer
      .changeCursorColor('white')
      .type('Eduardo Castellón')
      .rest(50000)
      .clear()
      .type('¿En qué plataforma te gusta programar?')
      .rest(2000)
      .start();

  };


}

class LinkModel {
  link: string;
  icon: string;
}
