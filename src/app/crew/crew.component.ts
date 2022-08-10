import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:

  /* Book doesn't point out that there already exists an inCrew variable above we should
  use for our funtion below that is a boolean set to false. */

  addCrewMember(candidate: object) {
    
    if (this.crew.includes(candidate)) {
      this.inCrew = true;
    } else {
      this.inCrew = false;
    }

    //  !this.inCrew is saying it is true that the the selected candidate is not already in the the crew.
    if (this.crew.length < 3 && !this.inCrew) {
      this.crew.push(candidate);
    } else if (this.inCrew) {
      let index = this.crew.indexOf(candidate);
      this.crew.splice(index, 1);
    }
  }
}
