import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { User } from 'src/app/shared/user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    usersURL = `http://localhost:3000/users`;

    constructor(private http: HttpClient) { }

    register(cadastroObj: any) {
        let password = Md5.hashStr(cadastroObj.password);
        cadastroObj.password = password;

        const obj = {
            username: cadastroObj.username,
            email: cadastroObj.email,
            password: cadastroObj.password
        }

        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('bearer', "697-2fe-fc860");

        return this.http.post(`${this.usersURL}`, obj);
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.usersURL}`);
    }
}
