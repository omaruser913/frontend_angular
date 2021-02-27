import { Component, OnInit } from '@angular/core';
import { ContactoRegistro } from '../model/contacto.registro';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  providers: [ServiceService]
})
export class TablaComponent implements OnInit {

  public datosTabla: ContactoRegistro[] = [];

  constructor(
    private service: ServiceService
  ) { }

  ngOnInit(): void {
    this.getRegistro();
  }

  
  getRegistro(){  
    this.service.getRegistro().subscribe(
      response => {
        this.datosTabla = response.data;
        console.log(this.datosTabla);
      },
      error => {
        console.log("entre al error" + error);          
      }
    )
  }

  deleteRegistro(id: string) {
    this.service.deleteRegistro(id).subscribe(

      response => {
        console.log(response);      
        if(response.status){
          this.getRegistro();
          //this._router.navigate(['/productos']);
        }
      },error => {
        console.log(<any>error);
      }
    )
  }

}
