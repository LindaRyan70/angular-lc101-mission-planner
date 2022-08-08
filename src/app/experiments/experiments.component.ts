import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experimentsBeingEdited: object = null;

  experiments: object[] = [
    {name: "Mars soil sample"},
    {name: "Plant growth in habitats"},
    {name: "Human bone density"}
  ];

  constructor() { }

  ngOnInit() {

  }


  add(trialName: string) {
    const filteredExperiment = this.experiments.filter(function (trial) {
      return trial['name'] === trialName;
    });
    if (filteredExperiment.length > 0) {
      return;
    } else {
      this.experiments.push({name: trialName});
    }          
  }

  remove(trial: object) {
    let index = this.experiments.indexOf(trial);
    this.experiments.splice(index, 1);
  }

  edit(trial: object) {
    this.experimentsBeingEdited = trial;
  }

  save(name: string, trial: object) {
    trial['name'] = name;
    this.experimentsBeingEdited = null;
    }

}
