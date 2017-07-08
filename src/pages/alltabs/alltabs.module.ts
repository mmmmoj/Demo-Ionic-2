import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Alltabs } from './alltabs';

@NgModule({
  declarations: [
    Alltabs
  ],
  imports: [
    IonicPageModule.forChild(Alltabs),
  ],
  entryComponents: [Alltabs],
  exports: [
    Alltabs
  ]
})
export class AlltabsModule { }
