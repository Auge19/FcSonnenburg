import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormControl } from '@angular/forms';
// import { jsPDF } from 'jspdf';

@Component({
  selector: 'fcs-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent {
  display = false;
  bioForm: FormGroup;
  sepaForm: FormGroup;
  firstBookingDate: string;
  paying: string;
  constructor(private _fb: FormBuilder) {
    this.firstBookingDate = '01.04';
    this.paying = 'sepa';
    this.bioForm = this._fb.group({
      name: new FormControl<string>(''),
      surname: new FormControl<string>(''),
      street: new FormControl<string>(''),
      zip: new FormControl<string>(''),
      city: new FormControl<string>(''),
      birthday: new UntypedFormControl(null),
      marriage: new UntypedFormControl(null),
      retired: new FormControl<boolean>(false),
      email: new FormControl<string>('')
    });
    this.sepaForm = this._fb.group({
      name: new FormControl(),
      street: new FormControl(),
      zip: new FormControl(),
      city: new FormControl(),
      iban: new FormControl(),
      firstBookingDate: new FormControl('01.04')
    });
  }

  createPdf(): void {
    // const doc = new jsPDF();
    // doc.setFontSize(20);
    // doc.text('Beitrittserklärung:', 100, 40, { align: 'center' });
    // doc.setFontSize(12);
    // doc.text(
    //   [
    //     `Name: ${this.bioForm.get('name')!.value}`,
    //     `Vorname: ${this.bioForm.get('surname')!.value}`,
    //     `Straße: ${this.bioForm.get('street')!.value}`,
    //     `PLZ: ${this.bioForm.get('zip')!.value}`,
    //     `Ort: ${this.bioForm.get('city')!.value}`,
    //     `Geburtstag: ${this.bioForm.get('birthday')!.value}`,
    //     `Verheiratet am: ${this.bioForm.get('marriage')!.value ? this.bioForm.get('marriage')!.value : ''}`,
    //     `Rentner: ${this.bioForm.get('retired')!.value ? 'JA' : 'NEIN'}`,
    //     `E-Mail: ${this.bioForm.get('email')!.value}`
    //   ],
    //   10,
    //   40
    // );
    // doc.setFontSize(14);
    // doc.text('Datenschutz: Nach Datenschutz Grundverordnung (DSGVO) und Bundesdatenschutzgesetz: ', 40, 80, {
    //   align: 'center'
    // });
    // doc.setFontSize(12).text(privacy, 11, 100);
    // doc.addPage();
    // doc.save('Mitgliedsantrag.pdf');
  }
}

export const privacy =
  'Ich bin damit einverstanden, dass die mit der Beitrittserklärung erhobenen Daten durch den \n Freundschaftsclub Sonnenburg e.V. für die Zwecke der Mitgliederverwaltung nach Maßgabender \n der Vorschriften der DSGVO gespeichert und verarbeitet werden. Eine Witergabe an Dritte erfolgt nicht. \n Ich willige ein, dass der Verein im Zusammenhang mit dem Vereinszweck personenbezogene Daten \n und Fotos von mir in den Vereinsinfos und auf der Homepage des Vereins veröffentlicht. Dies \n betrifft besonders die Veröffentlichung zu Ehrungen und Jubiläen. \n Ich bin darauf hingewiesen worden, dass ich der Veröffentlichnung von personenbezogenen Daten \n jederzeit widersprechen kann. In diesem Fall wird die Veröffentlichung für die Zukunft schnellstens \n eingestellt. \n Auf der Homepage veröffentlichte Fotos und Daten werden unverzüglich entfernt. \n Nach dem Austritt aus dem Verein werden alle erhobenen Daten gelöscht.';

export const impressum = 'Freundschaftsclub Sonnenburg';
