import { User } from "./User";
import { Company } from "./Company";
import {CustomMap} from './CustomMap'

const user = new User();
const company = new Company();
const custommap = new CustomMap("map");

custommap.addMarker(user);
custommap.addMarker(company);