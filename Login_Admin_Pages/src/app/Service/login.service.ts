import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    
    const validUsername = 'admin@gmail.com';
    const validPassword = 'admin';
    return username === validUsername && password === validPassword;
  }

  authenticateteacher(username: string, password: string): boolean {
    const validUsername = 'teacher@gmail.com';
    const validPassword = 'teacher';
    return username === validUsername && password === validPassword;
  }

  storeLoginData(username: string, password: string) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
    return true;
  }

  storeAddCourse(inputData: any) {
    const finalResult: any[] = [];
    finalResult.push(inputData)
    console.log("servevie", finalResult)

  }

  clearLoginData() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
  }
}
