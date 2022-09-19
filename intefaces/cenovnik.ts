import { IFooterData } from "./footer";
import { IContactData } from "./header";

export interface PropsCenovnik {
  header: InsideHeader;
  footer: InsideFooter;
  cenovnik: ICenovnik;
  cenovnikTekst: ICenovnikTekst;
}

export interface ICenovnikTekst {
  data: ICenovnikTekstInner;
}

export interface ICenovnikTekstInner {
  0: ICenovnikTekstInside;
}
export interface ICenovnikTekstInside {
  attributes: ICenovnikTekstSingle;
}

export interface ICenovnikTekstSingle {
  Naslov: string;
  Tekst: string;
}

export interface ICenovnik {
  data: ICenovnikInner[];
}

export interface ICenovnikInner {
  id: string;
  attributes: ICenovnikSingle;
}

export interface ICenovnikSingle {
  naslovTabele: string;
  naslovKolona1: string;
  naslovKolona2: string;

  [key: `cena${number}` | `dimenzije${number}`]: string;
  // cena1: string | null;
  // cena2: string | null;
  // cena3: string | null;
  // cena4: string | null;
  // cena5: string | null;
  // cena6: string | null;
  // cena7: string | null;
  // cena8: string | null;
  // cena9: string | null;
  // cena10: string | null;
  // cena11: string | null;
  // cena12: string | null;
  // cena13: string | null;
  // cena14: string | null;
  // cena15: string | null;
  // dimenzija1: string | null;
  // dimenzija2: string | null;
  // dimenzija3: string | null;
  // dimenzija4: string | null;
  // dimenzija5: string | null;
  // dimenzija6: string | null;
  // dimenzija7: string | null;
  // dimenzija8: string | null;
  // dimenzija9: string | null;
  // dimenzija10: string | null;
  // dimenzija11: string | null;
  // dimenzija12: string | null;
  // dimenzija13: string | null;
  // dimenzija14: string | null;
  // dimenzija15: string | null;
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
