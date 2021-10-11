import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medicine } from 'src/app/shared/medicine';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MedicineService {
    medicineURL = `http://localhost:3000/medicine`;

    constructor(private http: HttpClient) { }

    registerMedicine(cadastroObj: any) {
        const obj = {
            name: cadastroObj.name,
            estoque: cadastroObj.type,
            type: cadastroObj.type,
            fornecedor: cadastroObj.fornecedor,
            nota_fiscal: cadastroObj.nota_fiscal,
            valor: cadastroObj.valor,
            descricao: cadastroObj.descricao
        }

        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        console.log(obj)
        return this.http.post(`${this.medicineURL}`, obj);
    }

    getAllMedicines(): Observable<Medicine[]> {
      return this.http.get<Medicine[]>(`${this.medicineURL}`);
    }

    updateMedicine(alterObj: any): Observable<Medicine[]>{
      const obj = {
        name: alterObj.name,
        estoque: alterObj.type,
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
