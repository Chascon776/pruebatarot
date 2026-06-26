<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mazoCompleto } from './utils/MazoCompleto';
import { obtenerTirada, type CartaTirada } from './utils/tarotEngine';

interface CartaInteractiva extends CartaTirada {
  mostrarTexto: boolean;
  volteada: boolean; // Controla la animación física del Flip 3D
}

// --- CONFIGURACIÓN DEL JUEGO (CONSTANTES) ---
const MAX_ENERGIA = 3;
const TIEMPO_RECARGA_MINUTOS = 15; 

// --- NAVEGACIÓN INTERNA ---
const primeraVez = ref(true);
const esLogin = ref(true);
const pestañaActiva = ref('tarot'); 

// 🌟 CORREGIDO: Los dos identificadores reales de tus carpetas ('clasico' y 'tlotr')
const barajaSeleccionada = ref<'clasico' | 'tlotr'>('clasico');

// Campos del formulario Autenticación
const emailInput = ref('');
const passwordInput = ref('');
const nombreUsuario = ref('');
const fechaNacimiento = ref('');
const horaNacimiento = ref('');
const ciudadNacimiento = ref('');

// Datos del usuario activo en la sesión
const usuarioActivo = ref<any>(null);
const energia = ref(MAX_ENERGIA);
const tiempoParaProximaCarga = ref(TIEMPO_RECARGA_MINUTOS * 60); 
let intervaloRegeneracion: any = null;

// --- LÓGICA DE MASCOTAS ESPIRITUALES CON REACCIÓN ANIMADA ---
const mensajeMascota = ref("¡Saludos, consultante! Estoy listo para guiar tu energía hoy. 🔮");
const mascotaAnimando = ref(false); 

const frasesGato = [
  "El cosmos habla a través de los símbolos, presta atención... 🐾",
  "Siento una vibración muy alta en tu aura en este momento. ✨",
  "Si la energía está estancada, una tirada mística aclarará el camino. 🌌",
  "Tus coordenadas natales se alinean favorablemente el día de hoy. 🪐",
  "Recuerda que el destiny propone, pero tu voluntad dispone. 🔮"
];

// Dispara el salto del GIF y cambia el mensaje
const activarReaccionMascota = (nuevoTexto?: string) => {
  mascotaAnimando.value = true;
  if (nuevoTexto) {
    mensajeMascota.value = nuevoTexto;
  } else {
    const indice = Math.floor(Math.random() * frasesGato.length);
    mensajeMascota.value = frasesGato[indice];
  }
  
  setTimeout(() => {
    mascotaAnimando.value = false;
  }, 800);
};

onMounted(() => {
  const sesionActiva = localStorage.getItem('portal_astral_sesion');
  if (sesionActiva) {
    const datosUsuario = JSON.parse(sesionActiva);
    
    if (!datosUsuario || !datosUsuario.id || isNaN(datosUsuario.id)) {
      localStorage.removeItem('portal_astral_sesion');
      usuarioActivo.value = null;
      primeraVez.value = true;
      return;
    }
    
    usuarioActivo.value = datosUsuario;
    primeraVez.value = false;
    inicializarDatosGamificados();
  }
});

onUnmounted(() => {
  if (intervaloRegeneracion) clearInterval(intervaloRegeneracion);
});

// --- LÓGICA DE ACTUALIZACIÓN DE PERFIL ---
const guardarCambiosPerfil = () => {
  if (!usuarioActivo.value.nombre.trim() || !usuarioActivo.value.fecha) {
    alert("El nombre y la fecha astral no pueden estar vacíos.");
    return;
  }
  actualizarBaseUsuariosGlobal(usuarioActivo.value);
  activarReaccionMascota("⚙️ He guardado tus coordenadas natales con éxito humano.");
};

// --- LÓGICA GAMIFICADA: CHECK-IN Y ENERGÍA ---
const inicializarDatosGamificados = () => {
  if (!usuarioActivo.value) return;
  const idKey = usuarioActivo.value.id;
  
  const energiaGuardada = localStorage.getItem(`energia_${idKey}`);
  const ultimoTiempoGuardado = localStorage.getItem(`tiempo_energia_${idKey}`);
  
  if (energiaGuardada !== null && !isNaN(parseInt(energiaGuardada))) {
    energia.value = parseInt(energiaGuardada);
  } else {
    energia.value = MAX_ENERGIA;
    localStorage.setItem(`energia_${idKey}`, MAX_ENERGIA.toString());
  }

  if (ultimoTiempoGuardado && energia.value < MAX_ENERGIA) {
    const segundosPasados = Math.floor((Date.now() - parseInt(ultimoTiempoGuardado)) / 1000);
    const segundosPorPunto = TIEMPO_RECARGA_MINUTOS * 60;
    const puntosGanados = Math.floor(segundosPasados / segundosPorPunto);
    
    if (puntosGanados > 0) {
      energia.value = Math.min(MAX_ENERGIA, energia.value + puntosGanados);
      const remanenteSegundos = segundosPasados % segundosPorPunto;
      tiempoParaProximaCarga.value = Math.max(0, segundosPorPunto - remanenteSegundos);
    } else {
      tiempoParaProximaCarga.value = Math.max(0, segundosPorPunto - segundosPasados);
    }
    guardarEstadoEnergia();
  } else {
    tiempoParaProximaCarga.value = TIEMPO_RECARGA_MINUTOS * 60;
  }

  const hoy = new Date().toDateString();
  const ultimoCheckIn = localStorage.getItem(`ultimo_checkin_${idKey}`);

  if (ultimoCheckIn !== hoy) {
    usuarioActivo.value.monedas += 50;
    localStorage.setItem(`ultimo_checkin_${idKey}`, hoy);
    actualizarBaseUsuariosGlobal(usuarioActivo.value);
    
    setTimeout(() => {
      activarReaccionMascota("🐾 ¡Miau! El Sol te bendijo con +50 monedas de oro diarias.");
    }, 1200);
  }

  iniciarRelojEnergia();
};

const iniciarRelojEnergia = () => {
  if (intervaloRegeneracion) clearInterval(intervaloRegeneracion);
  
  intervaloRegeneracion = setInterval(() => {
    if (energia.value >= MAX_ENERGIA) {
      tiempoParaProximaCarga.value = TIEMPO_RECARGA_MINUTOS * 60;
      return;
    }
    tiempoParaProximaCarga.value--;
    if (tiempoParaProximaCarga.value <= 0) {
      energia.value++;
      tiempoParaProximaCarga.value = TIEMPO_RECARGA_MINUTOS * 60;
      guardarEstadoEnergia();
      activarReaccionMascota("⚡ ¡Tus energías cósmicas se han regenerado! Siento más poder.");
    }
    localStorage.setItem(`tiempo_energia_${usuarioActivo.value.id}`, Date.now().toString());
  }, 1000);
};

const guardarEstadoEnergia = () => {
  if (!usuarioActivo.value) return;
  localStorage.setItem(`energia_${usuarioActivo.value.id}`, energia.value.toString());
};

const comprarEnergia = () => {
  if (energia.value >= MAX_ENERGIA) {
    alert("Tu Energía Astral ya está a su máximo esplendor.");
    return;
  }
  if (usuarioActivo.value.monedas < 60) {
    alert(`⚠️ Oro místico insuficiente.\nNecesitas 60 monedas para restaurar tu poder (Tienes: ${usuarioActivo.value.monedas}).`);
    return;
  }

  usuarioActivo.value.monedas -= 60;
  energia.value = MAX_ENERGIA;
  tiempoParaProximaCarga.value = TIEMPO_RECARGA_MINUTOS * 60;
  
  guardarEstadoEnergia();
  actualizarBaseUsuariosGlobal(usuarioActivo.value);
  activarReaccionMascota("😼 ¡Ritual completado! He devorado tu oro para restaurar tu energía mística.");
};

const actualizarBaseUsuariosGlobal = (usuarioModificado: any) => {
  localStorage.setItem('portal_astral_sesion', JSON.stringify(usuarioModificado));
  const usuariosDb = localStorage.getItem('portal_astral_db_usuarios');
  if (usuariosDb) {
    const lista = JSON.parse(usuariosDb);
    const index = lista.findIndex((u: any) => u.id === usuarioModificado.id);
    if (index !== -1) {
      lista[index] = usuarioModificado;
      localStorage.setItem('portal_astral_db_usuarios', JSON.stringify(lista));
    }
  }
};

const manejarRegistro = () => {
  if (!emailInput.value.includes('@') || passwordInput.value.length < 4) {
    alert("Por favor, introduce un correo válido y una contraseña de al menos 4 caracteres.");
    return;
  }
  if (!nombreUsuario.value.trim() || !fechaNacimiento.value) {
    alert("El nombre y la fecha de nacimiento son obligatorios.");
    return;
  }

  const usuariosGuardados = localStorage.getItem('portal_astral_db_usuarios');
  const listaUsuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

  const existe = listaUsuarios.find((u: any) => u.email === emailInput.value.toLowerCase());
  if (existe) {
    alert("Este correo electrónico ya está registrado.");
    return;
  }

  let ultimoId = 1000;
  if (listaUsuarios.length > 0) {
    const ultimoUsuario = listaUsuarios[listaUsuarios.length - 1];
    if (ultimoUsuario && ultimoUsuario.id && !isNaN(ultimoUsuario.id)) {
      ultimoId = parseInt(ultimoUsuario.id);
    } else {
      ultimoId = 1000 + listaUsuarios.length;
    }
  }
  const nuevoId = ultimoId + 1;

  const nuevoUsuario = {
    id: nuevoId, 
    email: emailInput.value.toLowerCase().trim(),
    password: passwordInput.value,
    nombre: nombreUsuario.value,
    fecha: fechaNacimiento.value,
    hora: horaNacimiento.value,
    ciudad: ciudadNacimiento.value,
    monedas: 50,
    mascotaActiva: 'Gato Cósmico'
  };

  listaUsuarios.push(nuevoUsuario);
  localStorage.setItem('portal_astral_db_usuarios', JSON.stringify(listaUsuarios));
  localStorage.setItem('portal_astral_sesion', JSON.stringify(nuevoUsuario));
  
  usuarioActivo.value = nuevoUsuario;
  primeraVez.value = false;
  pestañaActiva.value = 'tarot';
  inicializarDatosGamificados();
  
  alert(`¡Cuenta mística creada! Tu ID de Consultante asignado es: #${nuevoUsuario.id}`);
};

const manejarLogin = () => {
  const usuariosGuardados = localStorage.getItem('portal_astral_db_usuarios');
  const listaUsuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

  const usuarioEncontrado = listaUsuarios.find(
    (u: any) => u.email === emailInput.value.toLowerCase() && u.password === passwordInput.value
  );

  if (!usuarioEncontrado) {
    alert("Correo electrónico o contraseña incorrectos.");
    return;
  }

  localStorage.setItem('portal_astral_sesion', JSON.stringify(usuarioEncontrado));
  usuarioActivo.value = usuarioEncontrado;
  primeraVez.value = false;
  pestañaActiva.value = 'tarot';
  inicializarDatosGamificados();
};

const cerrarSesion = () => {
  if (intervaloRegeneracion) clearInterval(intervaloRegeneracion);
  localStorage.removeItem('portal_astral_sesion');
  usuarioActivo.value = null;
  primeraVez.value = true;
  cartasTiradas.value = [];
  emailInput.value = '';
  passwordInput.value = '';
};

// --- LÓGICA DEL MAZO DE TAROT ---
const cartasTiradas = ref<CartaInteractiva[]>([]);
const cartaSeleccionada = ref<CartaInteractiva | null>(null);

const formatearTiempo = (segundos: number): string => {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;
  return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
};

// 🌟 FUNCIÓN DE SEGURIDAD EXTRA: Limpia las barras inclinadas duplicadas en las rutas de imágenes
const limpiarRutaImagen = (baraja: string, archivoCarta: string): string => {
  if (!archivoCarta) return '';
  
  // 🌟 EXTRAE SOLO EL NOMBRE DEL ARCHIVO (Ej: si viene "/cartas/00_el_mago.jpg", saca solo "00_el_mago.jpg")
  const nombreArchivoPuro = archivoCarta.substring(archivoCarta.lastIndexOf('/') + 1);
  
  // 🌟 CONSTRUYE LA RUTA EXACTA según tus carpetas reales en public
  const rutaCorrecta = `/cartas/${baraja}/${nombreArchivoPuro}`;
  
  return encodeURI(rutaCorrecta); 
};

const realizarTirada = () => {
  if (isNaN(energia.value) || energia.value <= 0) {
    alert("⚠️ No tienes suficiente Energía Astral. Espera la recarga pasiva o restaura tu poder usando monedas.");
    return;
  }
  
  energia.value--;
  guardarEstadoEnergia();

  if (usuarioActivo.value) {
    actualizarBaseUsuariosGlobal(usuarioActivo.value);
  }

  const tiradaBase = obtenerTirada(mazoCompleto, 3);
  
  // Inician tapadas para el efecto de volteo
  cartasTiradas.value = tiradaBase.map(carta => ({
    ...carta,
    mostrarTexto: true,
    volteada: false
  }));
  cartaSeleccionada.value = null;
  
  activarReaccionMascota();
};

const manejarClickCarta = (event: Event, carta: CartaInteractiva, index: number) => {
  if (!cartasTiradas.value[index].volteada) {
    cartasTiradas.value[index].volteada = true;
    activarReaccionMascota("✨ Un arcano se ha revelado ante tu destino...");
    return;
  }

  const target = event.target as HTMLElement;
  if (target.classList.contains('ojo-indicador')) {
    cartasTiradas.value[index].mostrarTexto = !cartasTiradas.value[index].mostrarTexto;
  } else {
    if (carta.mostrarTexto) {
      cartaSeleccionada.value = carta;
      activarReaccionMascota(`👀 Revelando el arcano de tu destino...`);
    }
  }
};

const cerrarModal = () => {
  cartaSeleccionada.value = null;
};

const convertARomano = (num: number): string => {
  const mapaRomanos: { [key: number]: string } = {
    0: '0', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 
    6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X',
    11: 'XI', 12: 'XII', 13: 'XIII', 14: 'XIV',
    15: 'XV', 16: 'XVI', 17: 'XVII', 18: 'XVIII', 19: 'XIX', 20: 'XX', 21: 'XXI'
  };
  return mapaRomanos[num] || String(num);
};
</script>

<template>
  <div class="app-container">
    
    <div v-if="primeraVez" class="welcome-container">
      <div class="welcome-card">
        <div class="oracle-avatar">👁️‍🗨️</div>
        <h1>Portal Astral</h1>
        <p class="welcome-subtitle">Tarot Védico & Conexión Cósmica</p>
        
        <div class="auth-tabs">
          <button :class="{ 'active': esLogin }" @click="esLogin = true">Ingresar</button>
          <button :class="{ 'active': !esLogin }" @click="esLogin = false">Registrarse</button>
        </div>

        <form v-if="esLogin" @submit.prevent="manejarLogin" class="formulario-astral">
          <div class="input-group">
            <label>Correo Electrónico</label>
            <input type="email" v-model="emailInput" placeholder="tu@correo.com" required />
          </div>
          <div class="input-group">
            <label>Contraseña</label>
            <input type="password" v-model="passwordInput" placeholder="••••••••" required />
          </div>
          <button type="button" @click="manejarLogin" class="btn-ingresar">Entrar al Portal ✨</button>
        </form>

        <form v-else @submit.prevent="manejarRegistro" class="formulario-astral">
          <div class="input-group">
            <label>Correo Electrónico</label>
            <input type="email" v-model="emailInput" placeholder="tu@correo.com" required />
          </div>
          <div class="input-group">
            <label>Contraseña Segura</label>
            <input type="password" v-model="passwordInput" placeholder="Mínimo 4 caracteres" required />
          </div>
          
          <div class="divisor-formulario">Coordenadas Astrales</div>

          <div class="input-group">
            <label>Nombre o Alias místico</label>
            <input type="text" v-model="nombreUsuario" placeholder="Ej. Arjuna" required />
          </div>
          <div class="input-row">
            <div class="input-group">
              <label>Fecha de Nacimiento</label>
              <input type="date" v-model="fechaNacimiento" required />
            </div>
            <div class="input-group">
              <label>Hora (Opcional)</label>
              <input type="time" v-model="horaNacimiento" />
            </div>
          </div>
          <div class="input-group">
            <label>Ciudad natal</label>
            <input type="text" v-model="ciudadNacimiento" placeholder="Ej. Santiago, Chile" />
          </div>
          
          <button type="button" @click="manejarRegistro" class="btn-ingresar">Crear Cuenta Astral 🔮</button>
        </form>
      </div>
    </div>

    <div v-else class="tablero-container animate-fade-in">
      
      <div class="user-bar">
        <div class="user-identity">
          <span class="user-name">
            🌌 ¡Hola, <strong>{{ usuarioActivo?.nombre }}</strong>!
            <span class="support-id-badge" title="ID de Soporte Técnico">#{{ usuarioActivo?.id }}</span>
          </span>
        </div>
        
        <div class="energia-container" @click="comprarEnergia" title="Clic para recargar con 60 monedas">
          <span class="energia-icono">⚡</span>
          <span class="energia-puntos">{{ energia }}/{{ MAX_ENERGIA }}</span>
          <span v-if="energia < MAX_ENERGIA" class="energia-reloj">⏳ {{ formatearTiempo(tiempoParaProximaCarga) }}</span>
        </div>

        <span class="monedas-badge">🪙 {{ usuarioActivo?.monedas }}</span>
        <button @click="cerrarSesion" class="btn-logout">Salir</button>
      </div>

      <div class="navigation-menu">
        <button :class="{ 'active': pestañaActiva === 'tarot' }" @click="pestañaActiva = 'tarot'">🔮 Tirada Astral</button>
        <button :class="{ 'active': pestañaActiva === 'config' }" @click="pestañaActiva = 'config'">⚙️ Configuración Perfil</button>
      </div>

      <div v-if="pestañaActiva === 'tarot'" class="view-content animate-fade-in">
        <h1>✨ Portal Astral & Tarot Védico ✨</h1>
        <p class="subtitle">Cada tirada consume 1 punto de Energía Astral. Haz clic sobre una carta oculta para voltearla.</p>
        
        <div class="selector-barajas">
          <label style="color: #c5a880; font-weight: bold; margin-right: 10px;">Mazo Activo: </label>
          <button :class="{ 'activo': barajaSeleccionada === 'clasico' }" @click="barajaSeleccionada = 'clasico'">📜 Clásico Rider</button>
          <button :class="{ 'activo': barajaSeleccionada === 'tlotr' }" @click="barajaSeleccionada = 'tlotr'">🧝‍♂️ El Señor de los Anillos</button>
        </div>

        <button @click="realizarTirada" class="btn-tirada" :class="{ 'sin-energia': energia <= 0 }">
          {{ energia > 0 ? 'Realizar Tirada (Consume ⚡1)' : '⚠️ Sin Energía Astral' }}
        </button>

        <div v-if="cartasTiradas.length > 0" class="tablero-cartas">
          <div 
            v-for="(carta, index) in cartasTiradas" 
            :key="carta.id" 
            class="carta-container"
            @click="manejarClickCarta($event, carta, index)"
          >
            <div class="carta-card" :class="{ 'rotada-3d': carta.volteada, 'es-invertida': carta.isInvertida }">
              
              <div class="carta-back">
                <div class="simbolo-dorso">🌌</div>
              </div>

              <div 
                class="carta-front"
                :style="{ backgroundImage: `url(${limpiarRutaImagen(barajaSeleccionada, carta.imagenes.clasico)})` }"
              >
                <div class="marca-agua">PROPIEDAD EXCLUSIVA</div>
                <div class="capa-oscura" :class="{ 'ocultar': !carta.mostrarTexto }">
                  <div class="visual-card">🔮</div>
                  <h3>{{ carta.nombre }}</h3>
                  <p class="tipo">Arcano {{ carta.tipo }}</p>
                  <div class="btn-leer-mas">📖 Ver Revelación</div>
                </div>
                <div class="ojo-indicador">{{ convertARomano(carta.numero) }}</div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div v-if="pestañaActiva === 'config'" class="view-content config-view animate-fade-in">
        <h2>⚙️ Configuración Astral del Consultante</h2>
        <p class="subtitle">Modifica tus coordenadas natales para recalibrar la afinidad cósmica con el mazo.</p>

        <div class="config-card">
          <div class="pk-badge">Clave Primaria SQL Registrada: USER_ID_#{{ usuarioActivo?.id }}</div>
          <p class="config-email-display">Cuenta vinculada al correo: <strong>{{ usuarioActivo?.email }}</strong></p>
          
          <hr class="divisor-mistico">

          <form @submit.prevent="guardarCambiosPerfil" class="formulario-astral">
            <div class="input-group">
              <label>Nombre o Alias en el Tablero</label>
              <input type="text" v-model="usuarioActivo.nombre" required />
            </div>

            <div class="input-row">
              <div class="input-group">
                <label>Fecha de Nacimiento</label>
                <input type="date" v-model="usuarioActivo.fecha" required />
              </div>
              <div class="input-group">
                <label>Hora Astral</label>
                <input type="time" v-model="usuarioActivo.hora" />
              </div>
            </div>

            <div class="input-group">
              <label>Lugar / Ciudad Natal</label>
              <input type="text" v-model="usuarioActivo.ciudad" />
            </div>

            <button type="submit" class="btn-ingresar btn-save-profile">
              💾 Guardar Coordenadas Astrales
            </button>
          </form>
        </div>
      </div>

      <div 
        class="mascota-fija-pantalla" 
        :class="{ 'accion-saltar': mascotaAnimando }" 
        @click="activarReaccionMascota(undefined)" 
        title="Haz clic en tu mascota para oír su sabiduría"
        style="position: fixed; bottom: 25px; right: 25px; display: flex; flex-direction: column; align-items: center; z-index: 999999; pointer-events: none;"
      >
        <div class="bubble-chat-flotante" style="pointer-events: auto; margin-bottom: 15px;">
          <p>{{ mensajeMascota }}</p>
        </div>
        <div class="mascota-wrapper" style="cursor: pointer; display: flex; flex-direction: column; align-items: center; pointer-events: auto;">
          
          <div class="mascota-gif-container" style="width: 180px; height: 180px; border-radius: 50%; border: 3px solid #c5a880; background: #ffffff; box-shadow: 0 0 25px rgba(197, 168, 128, 0.6); overflow: hidden; display: flex; align-items: center; justify-content: center; position: relative;">
            <img 
              src="/mascota/gato.gif" 
              alt="Gato Astral Animado Local" 
              class="gif-mascota-render"
              style="width: 105%; height: 105%; max-width: 105%; max-height: 105%; object-fit: cover; mix-blend-mode: multiply; display: block;"
            />
          </div>
          
          <small class="mascota-label" style="background: #1e1438; color: #c5a880; font-size: 13px; font-weight: bold; padding: 4px 12px; border-radius: 12px; margin-top: -10px; border: 1px solid #c5a880; z-index: 2; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 2px 8px rgba(0,0,0,0.4);">
            {{ usuarioActivo?.mascotaActiva || 'Gato Cósmico' }}
          </small>
        </div>
      </div>

    </div> 

    <Transition name="fade-modal">
      <div v-if="cartaSeleccionada" class="modal-overlay" @click.self="cerrarModal">
        <div class="modal-content" :class="{ 'modal-invertida': cartaSeleccionada.isInvertida }">
          <button class="btn-cerrar" @click="cerrarModal">✕</button>
          <div class="modal-body">
            <div class="modal-tarjeta-visual" :style="{ backgroundImage: `url(${limpiarRutaImagen(barajaSeleccionada, cartaSeleccionada.imagenes.clasico)})` }">
              <div class="marca-agua-modal">PORTAL ASTRAL</div>
            </div>
            <div class="modal-info">
              <h2>{{ cartaSeleccionada.nombre }} {{ cartaSeleccionada.isInvertida ? '(Invertida)' : '' }}</h2>
              <p class="modal-tipo">Arcano {{ cartaSeleccionada.tipo }} · Número {{ convertARomano(cartaSeleccionada.numero) }}</p>
              <hr class="divisor-mistico">
              <div class="modal-significado-box">
                <h3>📜 Mensaje del Destino</h3>
                <p class="modal-texto-revelacion">
                  {{ cartaSeleccionada.isInvertida ? cartaSeleccionada.significadoInvertido : cartaSeleccionada.significadoDerecho }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped src="./assets/css/estilos.css"></style>