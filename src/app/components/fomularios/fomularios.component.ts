import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fomularios',
  templateUrl: './fomularios.component.html',
  styleUrls: ['./fomularios.component.scss'],
})
export class FomulariosComponent implements OnInit {
  name = new FormControl('', [Validators.minLength(4), Validators.required]);
  isChecked = new FormControl(false);
  constructor() {}

  ngOnInit(): void {}
}
