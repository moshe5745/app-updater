import {Component} from '@angular/core';
import {AppUpdate} from '@ionic-native/app-update/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private appUpdate: AppUpdate) {
  }

  checkForUpdates() {
    const updateUrl = 'https://github.com/moshe5745/app-updater/blob/master/src/updater-res/version.xsl';
    this.appUpdate.checkAppUpdate(updateUrl).then(() => {
      console.log('Update available');
    }).catch(error => console.log(error));
  }

}
