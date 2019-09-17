
import {Component} from '@angular/core';
import {CodePush} from '@ionic-native/code-push/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private codePush: CodePush) {
  }

  checkForUpdates() {
    this.codePush.sync().subscribe((syncStatus) => console.log(syncStatus));

    const downloadProgress = (progress) => {
      console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`);
    };
    this.codePush.sync({}, downloadProgress).subscribe((syncStatus) => console.log(syncStatus));
  }

}
