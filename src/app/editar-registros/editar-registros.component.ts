import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'editar-registros',
  templateUrl: './editar-registros.component.html',
  styleUrls: ['./editar-registros.component.css']
})
export class EditarRegistrosComponent implements OnInit {

  uploadedFiles: Array<File>=[];

  constructor() { }

  ngOnInit(): void {
  }
}
