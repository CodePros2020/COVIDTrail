import Address from "./Address";
import PlacesVisited from "./PlacesVisitedLog";

export default class UserAccount {
  firstName;
  middleName;
  lastName;
  address = new Address();
  password;
  phoneNumber;
  email;
  placesVisited = [PlacesVisited];
}
