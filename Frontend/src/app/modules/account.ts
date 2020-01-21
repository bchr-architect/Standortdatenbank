import { Contact} from "./contact";

export class Account {
  id: number;
  compName: string;
  email: string;
  createdDate:number;
  lastModifiedDate:number;
  active: boolean;
  phone: string;
  phone2: string;
  street: string;
  place: string;
  postCode: string;
  country: string;
  ustID: string;
  companyType: string;
  homepage: string;
  nrOfEmployees: number;
  contacts: Array<Contact>;
}
