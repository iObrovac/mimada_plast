import { InnerFooter, InnerHeader } from "./kontakt";

export interface IRoletneProps {
  roletneInfo: IRoletne;
  header: InnerHeader;
  footer: InnerFooter;
  redoviTabele: IRedTabele[];
  zaglavljeTabele: IZaglavljeTabele;
}

export type IZaglavljeTabele = {
  id: number;
  attributes: {
    zaglavlje_naslov: string;
    zaglavlje_kolona3: string;
    zaglavlje_kolona4: string;
    zaglavlje_kolona5: string;
    zaglavlje_kolona6: string;
    naslov_iznad_zaglavlja: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
};

export interface IRedTabele {
  id: number;
  attributes: {
    property: string;
    kolona2: string;
    kolona3: string;
    kolona4: string;
    kolona5: string;
    kolona6: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
}

export interface IRoletne {
  data: IRoletneInner;
}

export interface IRoletneInner {
  0: IRoletneAtt;
}

export interface IRoletneAtt {
  attributes: IRoletneData;
}

export interface IRoletneData {
  Naslov: string;
  Podnaslov_1: string;
  text_1: string;
  text_2: string;
  Podnaslov_2: string;
  text_3: string;
  Naslov_tabele: string;
  Naslov_mala_tabela_1: string;
  Opis_mala_tabela_1: string;
  Malatabela1_field_1: string;
  Malatabela1_field_2: string;
  Malatabela1_field_3: string;
  Malatabela1_field_4: string;
  Malatabela1_field_5: string;
  Malatabela1_field_6: string;
  Malatabela1_field_7: string;
  Malatabela1_field_8: string;
  Malatabela1_field_9: string;
  Malatabela1_field_10: string;
  Naslov_mala_tabela_2: string;
  Opis_mala_tabela_2: string;
  malatabela2_field_1: string;
  malatabela2_field_2: string;
  malatabela2_field_3: string;
  malatabela2_field_4: string;
  malatabela2_field_5: string;
  malatabela2_field_6: string;
  malatabela2_field_7: string;
  malatabela2_field_8: string;
  malatabela2_field_9: string;
  malatabela2_field_10: string;
  fusnota_tabele: string;
}
