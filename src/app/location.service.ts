import { Injectable } from '@angular/core';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }
  
  housingList: Location[] = [
    {
      id: 1,
      name: "Location One",
      description: "Safe place",
      city: "Chicago"
    },
    {
      id: 2,
      name: "Location Two",
      description: "Safe place",
      city: "Chicago"
    },
    {
      id: 3,
      name: "Location Three",
      description: "Safe place",
      city: "Los Angeles"
    },
    {
      id: 4,
      name: "Location Four",
      description: "Safe place",
      city: "San Francisco"
    }
  ];

  getLocationById(id: number): Location | undefined {
    return this.housingList.find(location => location.id === id);
  }
}
