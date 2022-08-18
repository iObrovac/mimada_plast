import { IFooterData } from "./footer";
import { IContactData } from "./header";

export interface IHomepage {
  Button: string;
  Naslov: string;
  Naslov2: string;
  Opcija1_naslov: string;
  Opcija1_tekst: string;
  Opcija2_naslov: string;
  Opcija2_tekst: string;
  Opcija3_naslov: string;
  Opcija3_tekst: string;
  Partner1_opis: string;
  Partner2_opis: string;
  Partner3_opis: string;
  Podnaslov: string;
  Podnaslov2: string;
  Proizvod1_naslov: string;
  Proizvod1_opis: string;
  Proizvod2_naslov: string;
  Proizvod2_opis: string;
  Proizvod3_naslov: string;
  Proizvod3_opis: string;
  Proizvod4_naslov: string;
  Proizvod4_opis: string;
  Proizvod5_naslov: string;
  Proizvod5_opis: string;
  Proizvod6_naslov: string;
  Proizvod6_opis: string;
  Slider1_naslov: string;
  Slider1_opis: string;
  Slider2_naslov: string;
  Slider2_opis: string;
  Slider3_naslov: string;
  Slider3_opis: string;
  Slider4_naslov: string;
  Slider4_opis: string;
}

export interface Props {
  headerInfo: InnerData;
  headerFirst: InnerData2;
  footer: InnerData3;
}

export interface InnerData2 {
  data: InnerAttributes2;
}

export interface InnerData3 {
  data: InnerAttributes3;
}

export interface InnerAttributes3 {
  0: attributes3;
}

export interface attributes3 {
  attributes: IFooterData;
}

export interface InnerAttributes2 {
  0: attributes2;
}

export interface attributes2 {
  attributes: IContactData;
}

export interface InnerData {
  data: InnerAttributes;
}

export interface InnerAttributes {
  0: attributes;
}

export interface attributes {
  attributes: IHomepage;
}
