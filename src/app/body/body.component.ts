import { Component, OnInit } from '@angular/core';

interface Habilidad {
  habilidad: string;
  herramienta: string;
}

interface RedesSociales {
  facebook: boolean;
  instagram: boolean;
  twitter: boolean;
}

interface RedesSocialesLinks {
  [key: string]: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre: string = '';
  email: string = '';
  habilidades: string = '';
  nuevaHabilidad: string = '';
  nuevaHerramienta: string = '';
  habilidadesList: Habilidad[] = [];
  celular: string = '';
  mensajeria: string = 'whatsapp';
  otroMensajeria: string = '';

  redesSociales: RedesSociales = {
    facebook: false,
    instagram: false,
    twitter: false
  };

  submitHabilidadesForm(): void {
    if (this.nuevaHabilidad && this.nuevaHerramienta) {
      const nuevaHabilidad: Habilidad = {
        habilidad: this.nuevaHabilidad,
        herramienta: this.nuevaHerramienta
      };
      this.habilidadesList.push(nuevaHabilidad);
      this.nuevaHabilidad = '';
      this.nuevaHerramienta = '';
    }
  }

  toggleOtroOption(): void {
    if (this.mensajeria !== 'otro') {
      this.otroMensajeria = '';
    }
  }

  submitProfileForm(): void {
    // Aquí puedes realizar acciones con los datos del perfil y los enlaces de las redes sociales
    console.log('Datos del perfil enviados:', this.nombre, this.email, this.celular, this.mensajeria, this.otroMensajeria);
    console.log('Enlaces de redes sociales:', this.redesSocialesLinks);
  }
  redesSocialesLinks: RedesSocialesLinks = {};

  toggleSocialLink(socialMedia: keyof RedesSociales): void {
    if (!this.redesSociales[socialMedia]) {
      delete this.redesSocialesLinks[socialMedia];
    }
  }

}
