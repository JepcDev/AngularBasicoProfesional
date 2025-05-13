import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fomularios',
  templateUrl: './fomularios.component.html',
  styleUrls: ['./fomularios.component.scss'],
})
export class FomulariosComponent implements OnInit {
  name = new FormControl('', [Validators.minLength(4), Validators.required]);
  isChecked = new FormControl(false);

  form = new FormGroup({
    nameG: new FormControl('', [Validators.minLength(4), Validators.required]),
    isCheckedG: new FormControl(true),
  });
  constructor() {}

  ngOnInit(): void {}
}
