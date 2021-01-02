import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverName: string;

  constructor() {
    setTimeout(() => {
       this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(): void {
    this.serverCreationStatus = 'Server ' + this.serverName + ' created at ' + new Date();
  }

  onUpdateServerName(event: Event): void {
    console.log(event);
    this.serverName = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
  }

}
