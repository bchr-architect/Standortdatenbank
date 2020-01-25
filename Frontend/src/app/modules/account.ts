import { Contact} from "./contact";
import {Group} from "./group";

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
  branche: Group;
  homepage: string;
  nrOfEmployees: number;
  mailbox: string;
  mailboxPlace: string;
  mailboxPostcode: string;
  mailboxCountry: string;
  contacts: Array<Contact>;
}
