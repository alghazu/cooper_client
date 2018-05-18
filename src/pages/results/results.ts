import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PerformanceDataProvider } from '../../providers/performance-data/performance-data';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  results = [];
  label = [];
  data = [];
  doughnutChartType: string = 'doughnut';
  radarChartType: string = 'radar';
  view: string = 'data';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private performanceData: PerformanceDataProvider
            ) {}

  ionViewDidLoad() {
    this.performanceData
      .getResults()
      .subscribe(data => {
         this.results = data.entries;
         this.labels = this.getLabels(this.results);

         this.labels.forEach(label => {
           this.data.push(this.getCount(this.results, label));
     })
   });
  }

  getLabels(collection: any) {
    let uniqueLabels = [];

    collection.forEach(entry => {
      if (entry.data.message && uniqueLabels.indexOf(entry.data.message) === -1) {
        uniqueLabels.push(entry.data.message);
      }
    })

    return uniqueLabels;
  }

  getCount(collection:any, value:any) {
    let count = 0;

    collection.forEach(entry => {
      count += entry.data.message == value ? 1 : 0;
  })

  return count;
}
}
