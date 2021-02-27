export class ContactoRegistro{
    constructor(
        public id: number,
        public nombre: string,
        public apellidoPaterno: string,
        public apellidoMaterno: string,
        public calle: string,
        public numero: string,
        public colonia: string,
        public codigoPostal: string,
        public telefono: string,
        public rfc: string,
        public estatus: number
    ){}
}