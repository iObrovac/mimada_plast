import { IFooterData } from "./footer";
import { IContactData } from "./header";

export interface IKontakt {
  Adresa: string;
  Ime_firme: string;
  Telefon: string;
  createdAt: string;
  email: string;
  radno_vreme: string;
}

export interface PropsKontakt {
  kontaktInfo: InnerKontakt;
  header: InnerHeader;
  footer: InnerFooter;
}

export interface InnerFooter {
  data: InnerAtt3;
}

export interface InnerAtt3 {
  0: att3;
}

export interface att3 {
  attributes: IFooterData;
}

export interface InnerHeader {
  data: InnerAtt2;
}

export interface InnerAtt2 {
  0: att2;
}

export interface att2 {
  attributes: IContactData;
}

export interface InnerKontakt {
  data: InnerAtt;
}

export interface InnerAtt {
  0: att;
}

export interface att {
  attributes: IKontakt;
}
