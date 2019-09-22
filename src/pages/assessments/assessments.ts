import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from '@angular/fire/database';
import { DataProvider } from '../../providers/data/data.provider';

/**
 * Generated class for the AssessmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assessments',
  templateUrl: 'assessments.html',
})
export class AssessmentsPage {
  columns = [
    { name: 'Date', prop: 'createDate'},
    { name: 'Mood' },
    { name: 'Pain Areas' },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
  }
}
