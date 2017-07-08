import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Feed } from './feed';
import { LoginInfo } from '../../components/login-info/login-info';

@NgModule({
    declarations: [
        Feed, LoginInfo
    ],
    imports: [
        IonicPageModule.forChild(Feed),
    ],
    entryComponents: [Feed],
    exports: [
        Feed, LoginInfo
    ]
})
export class FeedModule { }
