export interface King {
  kings: KingItem[];
  kids: KingItem[];
  youths: KingItem[];
}

export interface KingItem {
  king: string;
  partner?: string;
  url: string;
  year: number;
}
