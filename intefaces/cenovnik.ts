import { IFooterData } from "./footer";
import { IContactData } from "./header";

export interface PropsCenovnik {
  header: InsideHeader;
  footer: InsideFooter;
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
