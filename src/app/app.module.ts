import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { Fp1Component } from './components/contacto/fp1/fp1.component';
import { Fp2Component } from './components/contacto/fp2/fp2.component';
import { Form1Component } from './components/formulario/form1/form1.component';
import { Form2Component } from './components/formulario/form2/form2.component';
import { Form3Component } from './components/formulario/form3/form3.component';
import { Form4Component } from './components/formulario/form4/form4.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ContactoComponent,
    Fp1Component,
    Fp2Component,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
