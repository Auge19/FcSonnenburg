export interface Gallery {
  dir: string;
  images: GalleryImage[];
  title: string;
  year: number;
}

export interface GalleryImage {
  src: string;
  thumb: string;
}

export interface GalleryEvent {
  title: string;
  year: number;
}
