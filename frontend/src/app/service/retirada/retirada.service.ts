import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pacient } from 'src/app/shared/pacient';

@Injectable({
    providedIn: 'root'
})
export class RetiradaService {
    pacientMedicineURL = `http://localhost:3000/pacientMedicine`;

    constructor(private http: HttpClient) { }

    registerPacientMedicine(cadastroPacient: any, cadastroMedicine: any) {
      const obj = {
        id_pacient: cadastroPacient.id,
        lstMedicine: cadastroMedicine,
      };
      
      return this.http.post(`${this.pacientMedicineURL}`, obj);
    }
}
