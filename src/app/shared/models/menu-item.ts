export interface MenuItem {
  icon: string;
  name: string;
  subMenu: MenuItem[];
  url: string;
}

export interface HeaderMenu {
  leftmenu: MenuItem[];
  rightmenu: MenuItem[];
  title: string;
}
