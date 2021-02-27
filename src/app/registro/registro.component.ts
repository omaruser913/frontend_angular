import { Component, OnInit } from '@angular/core';
import { ContactoRegistro } from '../model/contacto.registro';
import { ServiceService } from 'src/app/Service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
//ngBootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [ServiceService]
})

export class RegistroComponent implements OnInit {
  public action: string;
  public actionFalse: boolean = false;
  public usuario: ContactoRegistro;
  public update_status: boolean = false;
  public uploadedFiles: File[] = [];
  public bandera: boolean = false;
  public dato: number = 0;

  constructor(
    private service: ServiceService,
    private _route: ActivatedRoute,
    private _router: Router,
    private modalService: NgbModal
  ) {
    this.action = "insert";
    this.usuario = new ContactoRegistro(0, '', '', '', '', '', '', '', '', '', 0);
  }

  onFileChange(e: any) {
    console.log('FileChange', e);
    this.uploadedFiles = e.target.files;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;

      if (typeof (id) != 'undefined') {
        this.getRegistroUser(id);
      }
    })
  }

  addRegistro(form: any) {
    
    this.service.saveRegistro(this.usuario).subscribe(
      response => {
        if (response.status) {
          form.reset();
          this.modalService.dismissAll();//cierra el modal
          this._router.navigate(['/registro']);
          let formData = new FormData();
          for (let i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
          }
          //call service 
          this.service.uploadFile(formData).subscribe((res) => {
            console.log('response:', res);
          });
        } else {
          //this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  updateRegistro() {
    this.update_status = false;
    this.bandera = false;
    this.service.updateRegistro(this.usuario).subscribe(
      response => {
        this.usuario = response.data;
        this.update_status = true;
        this._router.navigate(['/registro']);
      }, error => {
        console.log(<any>error);
      }
    )
  }


  deleteRegistro(id: string) {
    this.service.deleteRegistro(id).subscribe(

      response => {
        console.log(response);
        if (response.product) {
          //this._router.navigate(['/productos']);
        }
      }, error => {
        console.log(<any>error);
      }
    )
  }

  getRegistroUser(id: string) {
    this.service.getRegistroUser(id).subscribe(

      response => {
        this.usuario = response.data[0];
        this.action = 'update';
      }, error => {
        console.log(<any>error);
      }
    )
  }

  //dato
  getObtenerDato() {
    this.dato = 1;

  }

  getSegundoDato() {
    this.dato = 2;
  }

  //Modal
  open(content: any) {
    this.action = 'update';
    this.modalService.open(content);
  }

  cerrar(form: any) {
    this.actionFalse = false;
    form.reset();//Limpia el formulario
    this._router.navigate(['/registro']);
    this.modalService.dismissAll();//cierra el modal
  }

  openInsert(content: any) {
    this.action = 'insert';
    this.modalService.open(content);
  }
}
