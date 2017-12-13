import { Component } from '@angular/core';

@Component({
    //selector: 'app-servers',
    //selector: '[app-servers]',
    selector: '.app-servers',
    templateUrl: './servers.component.html'
    //template: `<app-server></app-server><app-server></app-server>`,
    //styleUrls: ['./'],
})
export class ServersComponent {
    allowNewServer = false;
    serverCreationStatus = 'no server created';
    serverName = 'TestServer';
    serverCreated = false;
    servers = ['Testserver', 'testServer2'];

    constructor() {
        setTimeout(()=> {
            this.allowNewServer = true;
        },2000)
    }

    onUpdateServerName(event: any) {
        //onsole.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    }
}