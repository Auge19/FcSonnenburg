import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';

// import { FullCalendarModule } from '@fullcalendar/angular';

import { GalleriaModule } from 'primeng/galleria';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { MenuModule } from 'primeng/menu';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService, MessageService } from 'primeng/api';

// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';

// FullCalendarModule.registerPlugins([
//   dayGridPlugin,
//   timeGridPlugin,
//   interactionPlugin
// ]);

@NgModule({
  declarations: [],
  imports: [
    AccordionModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CarouselModule,
    CheckboxModule,
    ChipsModule,
    ConfirmPopupModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    // FullCalendarModule,
    GalleriaModule,
    ImageModule,
    InputMaskModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MultiSelectModule,
    OverlayPanelModule,
    PanelMenuModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    SelectButtonModule,
    SidebarModule,
    SlideMenuModule,
    TableModule,
    TabViewModule,
    TieredMenuModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule
  ],
  exports: [
    AccordionModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CarouselModule,
    CheckboxModule,
    ChipsModule,
    ConfirmPopupModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    ImageModule,
    InputMaskModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    // FullCalendarModule,
    GalleriaModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MultiSelectModule,
    OverlayPanelModule,
    PanelMenuModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    SelectButtonModule,
    SidebarModule,
    SlideMenuModule,
    TableModule,
    TabViewModule,
    TieredMenuModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule
  ],
  providers: [ConfirmationService, MessageService]
})
export class PrimeNgModule {}
