import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:

   // We wrote the function below in Studio class. It requires the result to be boolean but works w/o the : boolean
  //  addItem(equipment: object) : boolean {
  //   this.cargoHold.push(equipment);
  //   this.cargoMass += equipment.mass; 
  //   // Line below is what the solution code used instead of equipment.mass above b/c technically no mass property on the equipment object, but both work.
  //   this.cargoMass += equipment['mass'];
  //   // If/else conditional returns boolean, but can be inferred by the return line of the solution version at the bottom.
  //   if (this.cargoMass >= 1800 || this.cargoMass <= 2200) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //  }


  
   // This is the solution code method for the addItem(). Solution used item['mass'] which is better than item.mass, even though the latter DOES technically work.

   addItem(item: object) : boolean {
    this.cargoHold.push(item);
    // Could use item.mass below to work, but NOT technically correct since mass property does not exist on the item object.
    this.cargoMass += item['mass']; 
    return this.maximumAllowedMass - this.cargoMass <= 200;
   }

}
