import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  // Bonus Mission 4: Added selectedExp variable below to store experiments picked.
  inLab: boolean = false;
  selectedExp: string[] = [];

  experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

  constructor() { }

  ngOnInit() { }



  // Bonus Mission 4: Added addExperiment() method below to add experiments picked by modifying the one for addCrew().


  addExperiment(experiment: string) {
    
    if (this.selectedExp.includes(experiment)) {
      this.inLab = true;
    } else {
      this.inLab = false;
    }

    //  !this.inLab is saying it is true that the the selected experiment is not already in the the selectedExp.
    if (this.selectedExp.length < 3 && !this.inLab) {
      this.selectedExp.push(experiment);
    } else if (this.inLab) {
      let index = this.selectedExp.indexOf(experiment);
      this.selectedExp.splice(index, 1);
    }
  }

}
