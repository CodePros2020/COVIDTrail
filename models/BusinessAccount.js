import CustomersVisited from "./CustomersVisitedLog";
import Address from "./address";

export default class BusinessAccount {
  id;
  address = new Address();
  businessName;
  password;
  phoneNumber;
  email;
  phone;
  customerVisitedLog = [CustomersVisited];
}
