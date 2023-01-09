export interface IGallery {
  event: string;
  images: string[];
  path: string;
  year: number;
}

export interface Image {
  url: string;
  thumbUrl: string;
}
export class Gallery {
  years: number[] = [];
  private galleries: IGallery[];
  constructor(galleries: IGallery[]) {
    this.galleries = galleries;

    this.years = [...new Set(galleries.map((g) => g.year))];
  }

  getEventsByYear(year: number): string[] {
    return this.galleries.filter((g) => g.year === year).map((g) => g.event);
  }

  getImagesByYearAndEvent(year: number, event: string): GalleryItem[] {
    for (let g of this.galleries) {
      if (g.year === year && g.event === event) {
        return g.images.map((i) => new ImageItem({ src: i, thumb: i }));
      }
    }
    return [];
  }
}
