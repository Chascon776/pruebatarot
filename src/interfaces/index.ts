// src/interfaces/index.ts

export interface PerfilAstral {
  fechaNacimiento: string; 
  horaNacimiento: string;  
  lugarNacimiento: string; 
  signoLunar?: string;     
  ascendente?: string;     
}

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  datosAstrales: PerfilAstral;
  monedasMisticas: number;
  configuracionVisual: {
    mazoEquipado: string;   
    fondoEquipado: string;  
    mascotaEquipada: string;
  };
}

// ⚠️ REVISA ESTA LÍNEA EXACTA: Debe decir "export interface CartaTarot"
export interface CartaTarot {
  id: string;
  numero: number;
  nombre: string;
  tipo: 'Mayor' | 'Menor';
  significadoDerecho: string;
  significadoInvertido: string;
  imagenes: {
    [key: string]: string; 
  };
}