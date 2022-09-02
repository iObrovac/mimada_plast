import { IFooterData } from "./footer";
import { IContactData } from "./header";

export interface PropsCenovnik {
  header: InsideHeader;
  footer: InsideFooter;
  cenovnik: ICenovnik;
}

export interface ICenovnik {
  data: ICenovnikInner[];
}

export interface ICenovnikInner {
  id: string;
  attributes: ICenovnikSingle;
}

export interface ICenovnikSingle {
  naslov_tabele: string;
  horizontalno_zaglavlje_1: string;
  horizontalno_zaglavlje_2: string;
  horizontalno_zaglavlje_3: string;
  horizontalno_zaglavlje_4: string;
  horizontalno_zaglavlje_5: string;
  vertikalno_zaglavlje_1: string;
  vertikalno_zaglavlje_2: string;
  vertikalno_zaglavlje_3: string;
  vertikalno_zaglavlje_4: string;
  polje_1: string;
  polje_2: string;
  polje_3: string;
  polje_4: string;
  polje_5: string;
  polje_6: string;
  polje_7: string;
  polje_8: string;
  polje_9: string;
  polje_10: string;
  polje_11: string;
  polje_12: string;
  polje_13: string;
  polje_14: string;
  polje_15: string;
  polje_16: string;
  polje_17: string;
  polje_18: string;
  polje_19: string;
  polje_20: string;
  fusnota_tabele: string;
}

export interface InsideFooter {
  data: InsideAttr2;
}

export interface InsideAttr2 {
  0: attrib2;
}

export interface attrib2 {
  attributes: IFooterData;
}

export interface InsideHeader {
  data: InsideAttr;
}

export interface InsideAttr {
  0: attrib1;
}

export interface attrib1 {
  attributes: IContactData;
}
