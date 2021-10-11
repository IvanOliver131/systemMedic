import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pacient } from 'src/app/shared/pacient';

@Injectable({
    providedIn: 'root'
})
export class PacientService {
    pacientURL = `http://localhost:3000/pacient`;

    constructor(private http: HttpClient) { }

    registerPacient(cadastroObj: any) {
      const obj = {
        name: cadastroObj.name,
        age: cadastroObj.age,
        bairro: cadastroObj.bairro,
        cpf: cadastroObj.cpf,
        cartaoSUS_RG: cadastroObj.cartaoSUS_RG,
      }

        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        
        return this.http.post(`${this.pacientURL}`, obj);
    }

    getAllPacients(): Observable<Pacient[]> {
      return this.http.get<Pacient[]>(`${this.pacientURL}`);
    }

    updatePacient(alterObj: any): Observable<Pacient[]>{
      const obj = {
        name: alterObj.name,
        age: alterObj.age,
        bairro: alterObj.bairro,
        cpf: alterObj.cpf,
        cartaoSUS_RG: alterObj.cartaoSUS_RG,
      }

      return this.http.put<Pacient[]>(`${this.pacientURL}/${alterObj.id}`, obj);
    }

    deletePacient(pacient: any): Observable<Pacient[]>{
      return this.http.delete<Pacient[]>(`${this.pacientURL}/${pacient.id}`);
    }
}
