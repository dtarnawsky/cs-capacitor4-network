import { Component } from '@angular/core';
import { Network } from '@capacitor/network';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
    });

    App.addListener('appStateChange', async ({ isActive }) => {
      console.log('App state changed. Is active?', isActive);
      const status = await Network.getStatus();
      console.log('Network status:', status);
    });
  }
}
