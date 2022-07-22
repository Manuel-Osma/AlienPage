import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent   {
  mapMakers = [
    {location: "4.634868102921723, -74.12097517192791"},
    {location: "4.544803011930013, -74.16310901298468"}

  ]

  mapRoutes =[{
    locations:[
      {lat: 4.572168619180735, lng: -74.13850901738762},
      "parque tunal",
      [4.569238267125677, -74.14112685352194],
      "cable tunal"
    ]
  }
]
addRoute(){
  this.mapRoutes.push({
    locations:[
      [4.569238267125677, -74.14112685352194],
      "cable tunal"
    ]
  })
}

removeRoutes(){
  this.mapMakers.pop()
}

}
