import { IFooterData } from "./footer";
import { IContactData } from "./header";

export interface IProizvodi {
  header: InnerHeader;
  footer: InnerFooter;
  proizvodi: InnerPro;
}

export interface InnerPro {
  data: InnerAtt4;
}

export interface InnerAtt4 {
  0: att4;
}

export interface att4 {
  attributes: IProData;
}

export interface IProData {
  naslov_1: string;
  naslov_2: string;
  naslov_3: string;
  naslov_4: string;
  text_1: string;
  text_2: string;
  text_3: string;
  text_4: string;
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

export interface InnerFooter {
  data: InnerAtt3;
}

export interface InnerAtt3 {
  0: att3;
}

export interface att3 {
  attributes: IFooterData;
}
