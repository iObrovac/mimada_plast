import { InnerFooter, InnerHeader } from "./kontakt";

export interface IPVCProps {
  pvcInfo: IPVC;
  header: InnerHeader;
  footer: InnerFooter;
}

export interface IPVC {
  data: IPVCinner;
}

export interface IPVCinner {
  0: IPVCatt;
}

export interface IPVCatt {
  attributes: IPVCData;
}

export interface IPVCData {
  Naslov: string;
  Podnaslov_1: string;
  text_1: string;
  Podnaslov_2: string;
  opcija_1_naslov: string;
  opcija_1_text: string;
  opcija2_naslov: string;
  opcija2_text: string;
  opcija3_naslov: string;
  opcija3_text: string;
  podnaslov3: string;
  text_2: string;
  slika1_naslov: string;
  slika1_text: string;
  slika2_naslov: string;
  slika2_text: string;
  slika3_naslov: string;
  slika3_text: string;
  slika4_naslov: string;
  slika4_text: string;
  slika5_naslov: string;
  slika5_text: string;
  slika6_naslov: string;
  slika6_text: string;
}
