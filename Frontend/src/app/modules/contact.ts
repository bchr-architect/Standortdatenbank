import { Account} from "./account";
import {Group} from "./group";

export class Contact {
<<<<<<< Updated upstream
  id: number;
  lastName: string;
  firstName: string;
  corporation: string;
  street: string;
  place: string;
  postCode: string;
  country: string;
  mailbox: string;
  mailboxPlace: string;
  mailboxPostcode: string;
  mailboxCountry: string;
  phone: string;
  phone2: string;
  phone3: string;
  phone4: string;
  fax: string;
  email: string;
  email2: string;
  homepage: string;
  account: Account;
  creatorID: string;
  editedByID: string;
  representativeID: string;
  languageID: string;
  ustID: string;
  contactID: number;
  shippingAddress: string;
  refAddress: string;
  refAddress2: string;
  additional: string;
  additional2: string;
  additional3: string;
  inactive: boolean;
  privatePerson: boolean;
  cession: boolean
  cessionNote: string;
  appellation: string;
  letterAppellation: string;
  title: string;
  postpositiveTitle: string;
  memo: number;
  department: string;
  function: string;
  priority: number;
  freeFlag1: boolean;
  freeFlag2: boolean;
  displayName: string;
  tradeFlag: boolean;
  productionFlag: boolean;
  serviceFlag: boolean;
  foundingDate: number;
  status: number;
  contactType: number;
  dsvFlag: boolean;
  dsvSourceOfData: string;
  dsvNotification: boolean;
  dsvDirectAdFlag: boolean;
  dsvAnonymised: boolean;
  dsvDataCollection: number;
  dsvAnonymisedBy: string;
  region: string;
  targetAudience: string;
  notes: string;
  createdDate: number;
  lastModifiedDate: number;
  birthday: number;
  group: any;
<<<<<<< HEAD
=======
  email: string
  firstName: string
  lastName: string
  account: Account
  createdDate: number
  modifiedDate: number
  notes: string;
>>>>>>> Stashed changes
=======
  group: Group;
>>>>>>> ec3357545f818fde1bc4d2394c88aeabd0c79bab
}
