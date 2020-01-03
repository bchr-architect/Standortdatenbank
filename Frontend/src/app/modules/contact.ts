import { Account} from "./account";

export class Contact {
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
  grpID: number;
  representativeID: number;
  languageID: number;
  ustID: string;
  contactID: number;
  shippingAddress: number;
  refAddress: number;
  refAddress2: number;
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
}
