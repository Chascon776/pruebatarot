// src/utils/tarotEngine.ts
import type { CartaTarot } from '../interfaces/index';

// Esta interfaz es la que une la carta con su estado en la tirada
export interface CartaTirada extends CartaTarot {
  isInvertida: boolean;
}

export function barajarMazo(mazo: CartaTarot[]): CartaTarot[] {
  const mazoMezclado = [...mazo];
  for (let i = mazoMezclado.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mazoMezclado[i], mazoMezclado[j]] = [mazoMezclado[j], mazoMezclado[i]];
  }
  return mazoMezclado;
}

export function obtenerTirada(mazo: CartaTarot[], cantidad = 3): CartaTirada[] {
  const mazoBarajado = barajarMazo(mazo);
  const seleccionadas = mazoBarajado.slice(0, cantidad);

  return seleccionadas.map(carta => ({
    ...carta,
    isInvertida: Math.random() < 0.5 // 🔮 50% probabilidad de inversión física trasera
  }));
}