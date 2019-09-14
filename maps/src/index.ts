import { User } from "./User";
import { Company } from "./Company";

const latlng = new google.maps.LatLng(0, 0);
new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center :latlng
})
