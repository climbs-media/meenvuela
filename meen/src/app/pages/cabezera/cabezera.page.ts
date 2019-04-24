import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabezera',
  templateUrl: './cabezera.page.html',
  styleUrls: ['./cabezera.page.scss'],
})
export class CabezeraPage implements OnInit {

  constructor() { }
  @Input() titulohead: any;

  ngOnInit() {
  }

}
