import {Company} from './Company'
import { User } from './User';

export interface Mappable{
  location: {
    lat: number,
    lng: number
  }
  markerContent(): string;
  color: string;
}
export class CustomMap {
  private googlemap: google.maps.Map;

  constructor(divId:string) {
    this.googlemap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }
  
  addMarker(mappable:Mappable): void{
  const marker=  new google.maps.Marker({
      map: this.googlemap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
    marker.addListener('click', () => {
      const infowindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infowindow.open(this.googlemap, marker);
     })
  }
}
