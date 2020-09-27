import Address from "./address";
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
