/*
* File: app.components.ts
* Author: Fésű Gábor
* Copyright: 2022, Fésű Gábor
* Group: Szoft II/N
* Date: 2022-03-31
* Github: https://github.com/gaborfesu
* Licenc: GNU GPL
*/
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app010';
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('')

})
}
