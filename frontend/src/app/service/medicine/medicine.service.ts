import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medicine } from 'src/app/shared/medicine';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MedicineService {
    medicineURL = `http://localhost:3000/medicine`;

    constructor(private http: HttpClient) { }

    registerMedicine(cadastroObj: any) {
        const obj = {
            name: cadastroObj.name,
            estoque: cadastroObj.estoque,
            type: cadastroObj.type,
            fornecedor: cadastroObj.fornecedor,
            nota_fiscal: cadastroObj.nota_fiscal,
            valor: cadastroObj.valor,
            descricao: cadastroObj.descricao
        }

        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        
        return this.http.post(`${this.medicineURL}`, obj);
    }

    getAllMedicinesControl(typeControl): Observable<Medicine[]> {
      return this.http.get<Medicine[]>(`${this.medicineURL}/control/` + typeControl);
    }

    getAllMedicines(): Observable<Medicine[]> {
      return this.http.get<Medicine[]>(`${this.medicineURL}`);
    }

    getSpecificMedicines(searchObj: any): Observable<Medicine[]>{
      const obj = {
        frase: searchObj
      }
      
      return this.http.get<Medicine[]>(`${this.medicineURL}/${obj.frase}`);
    }

    updateMedicine(alterObj: any): Observable<Medicine[]>{
      const obj = {
        name: alterObj.name,
        estoque: alterObj.estoque,
        type: alterObj.type,
        fornecedor: alterObj.fornecedor,
        nota_fiscal: alterObj.nota_fiscal,
        valor: alterObj.valor,
        descricao: alterObj.descricao
    }

      return this.http.put<Medicine[]>(`${this.medicineURL}/${alterObj.id}`, obj);
    }

    deleteMedicine(medicine: any): Observable<Medicine[]>{
      return this.http.delete<Medicine[]>(`${this.medicineURL}/${medicine.id}`);
    }
}
