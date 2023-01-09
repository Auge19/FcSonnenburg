export interface NewsItem {
  header: ItemHeader;
  content: string;
  footer: ItemFooter;
  url: string;
}

export interface ItemHeader {
  icon: string;
  title: string;
  subtitle: string;
}

export interface ItemFooter {
  link: string;
}
