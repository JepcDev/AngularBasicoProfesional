import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructural',
  templateUrl: './estructural.component.html',
  styleUrls: ['./estructural.component.scss']
})
export class EstructuralComponent implements OnInit {

  isError = false;
  sections = [
    {id:1,name:'Angular',duracion:'10:00'},
    // {id:1,name:'React',duracion:'5:00'},
    // {id:1,name:'Vue',duracion:'10:00'},
    // {id:1,name:'Flutter',duracion:'5:00'},
    // {id:1,name:'Kotlin',duracion:'10:00'},
  ];
  // sections = [
  //   'Angular',
  //   'React',
  //   'Vue',
  //   'Flutter',
  //   'Kotlin',
  // ];

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.isError=true;
    // }, 4000);

    // setTimeout(() => {
    //   this.sections.push( {id:1,name:'React',duracion:'5:00'});
    //   this.sections.push( {id:1,name:'Vue',duracion:'10:00'});
    // }, 4000);
  }

  showError(){
    this.isError = true;
  }
  hiddenError(){
    this.isError = false;
  }
  showSection(){
    this.sections.push( {id:1,name:'React',duracion:'5:00'});
  }
  hiddenSection(){
    this.sections.pop( );
  }

}
