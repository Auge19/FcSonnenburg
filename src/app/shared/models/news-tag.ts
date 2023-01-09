export interface NewsTag {
  content: string;
  title: string;
  subtitle: string;
  img: {
    position: 'top' | 'bottom',
    src: string
  };
}
