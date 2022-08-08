import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  memberBeingEdited: object = null;

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

 // This works for Bonus Mission 1 to stop duplicate crew entries.  // 
  add(memberName: string, isFirst: boolean) {
    const filteredCrew = this.crew.filter(function (member) {
      return member['name'] === memberName;
    });
    if (filteredCrew.length > 0) {
      return;
    } else {
      this.crew.push({name: memberName, firstMission: isFirst});
    }          
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
    }

}
