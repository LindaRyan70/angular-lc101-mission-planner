import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  // Bonus Mission 5: Added additional info to array [gender, color, pet] and added <li> to display on .html.
  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', gender: 'female', color: 'red', pet: 'monkey'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', gender: 'female', color: 'orange', pet: 'dog'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', gender: 'female', color: 'pink', pet: 'cat'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', gender: 'male', color: 'green', pet: 'snake'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', gender: 'male', color: 'blue', pet: 'parakeet'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', gender: 'male', color: 'yellow', pet: 'goldfish'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', gender: 'female', color: 'purple', pet: 'lizard'}
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
