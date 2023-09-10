export interface SocialData {
  titleAccent: string;
  titleDescription: string;
  cardData: CardData;
}

export interface CardData {
  columns: Array<Column[]>;
}

export interface Column {
  accentColor: string;
  title: string;
  native: boolean;
  redirect: string;
  fontColor: string;
  icon?: string;
  iconClasses?: string;
}
