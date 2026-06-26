// src/utils/mazoCompleto.ts
import type { CartaTarot } from '../interfaces/index';

export const mazoCompleto: CartaTarot[] = [
  // ================= ARCANOS MAYORES (22) =================
  {
    id: 'am_0', numero: 0, nombre: 'El Loco', tipo: 'Mayor',
    significadoDerecho: '✨ Nuevos comienzos, aventura, espontaneidad, fe ciega y libertad.',
    significadoInvertido: '⚠️ Imprudencia, irresponsabilidad, dirección errática o resistencia al cambio.',
    imagenes: { clasico: '/arcanos_mayores/0.jpg' }
  },
  {
    id: 'am_1', numero: 1, nombre: 'El Mago', tipo: 'Mayor',
    significadoDerecho: '🔮 Manifestación, poder personal, ingenio, acción y habilidades innatas.',
    significadoInvertido: '❌ Manipulación, talentos desperdiciados, malas intenciones o ilusiones.',
    imagenes: { clasico: '/arcanos_mayores/1.jpg' }
  },
  {
    id: 'am_2', numero: 2, nombre: 'La Sacerdotisa', tipo: 'Mayor',
    significadoDerecho: '🌙 Intuición, misterio, subconsciente, sabiduría interior y divinidad.',
    significadoInvertido: '👁️ Intuición bloqueada, secretos superficiales, agendas ocultas.',
    imagenes: { clasico: '/arcanos_mayores/2.jpg' }
  },
  {
    id: 'am_3', numero: 3, nombre: 'La Emperatriz', tipo: 'Mayor',
    significadoDerecho: '🌿 Abundancia, fertilidad, creatividad, naturaleza, maternidad y éxito.',
    significadoInvertido: '🍂 Bloqueo creativo, dependencia de otros, asfixia emocional.',
    imagenes: { clasico: '/arcanos_mayores/3.jpg' }
  },
  {
    id: 'am_4', numero: 4, nombre: 'El Emperador', tipo: 'Mayor',
    significadoDerecho: '🏛️ Autoridad, estructura, estabilidad, protección y control firme.',
    significadoInvertido: '⛓️ Tiranía, rigidez, falta de disciplina o pérdida de control.',
    imagenes: { clasico: '/arcanos_mayores/4.jpg' }
  },
  {
    id: 'am_5', numero: 5, nombre: 'El Hierofante', tipo: 'Mayor',
    significadoDerecho: '🙏 Tradición, espiritualidad, enseñanza, guía mística y conformidad.',
    significadoInvertido: '⚡ Rebelión, nuevos caminos, dogmatismo o pensamiento libre.',
    imagenes: { clasico: '/arcanos_mayores/5.jpg' }
  },
  {
    id: 'am_6', numero: 6, nombre: 'Los Enamorados', tipo: 'Mayor',
    significadoDerecho: '💞 Amor, armonía, relaciones, decisiones cruciales y alineación de valores.',
    significadoInvertido: '💔 Desarmonía, conflicto interno, malas elecciones o desequilibrio.',
    imagenes: { clasico: '/arcanos_mayores/6.jpg' }
  },
  {
    id: 'am_7', numero: 7, nombre: 'El Carro', tipo: 'Mayor',
    significadoDerecho: '🏎️ Victoria, control, fuerza de voluntad, éxito y superación de obstáculos.',
    significadoInvertido: '🛑 Falta de dirección, agresión desmedida o pérdida de rumbo.',
    imagenes: { clasico: '/arcanos_mayores/7.jpg' }
  },
  {
    id: 'am_8', numero: 8, nombre: 'La Fuerza', tipo: 'Mayor',
    significadoDerecho: '🦁 Valentía, paciencia, compasión, fortaleza interior y dominio propio.',
    significadoInvertido: '💥 Debilidad, insecurity, abuso de poder u orgullo.',
    imagenes: { clasico: '/arcanos_mayores/8.jpg' }
  },
  {
    id: 'am_9', numero: 9, nombre: 'El Ermitaño', tipo: 'Mayor',
    significadoDerecho: '🕯️ Introspección, soledad buscada, sabiduría, guía interior y reflexión.',
    significadoInvertido: '🥶 Aislamiento dañino, paranoia, rechazo al consejo ajeno.',
    imagenes: { clasico: '/arcanos_mayores/9.jpg' }
  },
  {
    id: 'am_10', numero: 10, nombre: 'La Rueda de la Fortuna', tipo: 'Mayor',
    significadoDerecho: '🔄 Destino, cambio, buena suerte, karma y giros de la vida.',
    significadoInvertido: '📉 Mala racha, resistencia al cambio, romper ciclos difíciles.',
    imagenes: { clasico: '/arcanos_mayores/10.jpg' }
  },
  {
    id: 'am_11', numero: 11, nombre: 'La Justicia', tipo: 'Mayor',
    significadoDerecho: '⚖️ Causa y efecto, equidad, verdad, decisiones legales y honestidad.',
    significadoInvertido: '❌ Injusticia, deshonestidad, negación de la realidad.',
    imagenes: { clasico: '/arcanos_mayores/11.jpg' }
  },
  {
    id: 'am_12', numero: 12, nombre: 'El Colgado', tipo: 'Mayor',
    significadoDerecho: '🧘 Nueva perspectiva, pausa voluntaria, sacrificio, soltar el control.',
    significadoInvertido: '⏳ Estancamiento, resistencia, sacrificio inútil o indecisión.',
    imagenes: { clasico: '/arcanos_mayores/12.jpg' }
  },
  {
    id: 'am_13', numero: 13, nombre: 'La Muerte', tipo: 'Mayor',
    significadoDerecho: '💀 Transformación profunda, finales necesarios, transiciones, renacer.',
    significadoInvertido: '🔄 Resistencia al cambio, estancamiento, miedo a avanzar.',
    imagenes: { clasico: '/arcanos_mayores/13.jpg' }
  },
  {
    id: 'am_14', numero: 14, nombre: 'La Templanza', tipo: 'Mayor',
    significadoDerecho: '🧪 Equilibrio, paciencia, moderación, alquimia y paz interior.',
    significadoInvertido: '⚖️ Desequilibrio, excesos, falta de armonía o discordia.',
    imagenes: { clasico: '/arcanos_mayores/14.jpg' }
  },
  {
    id: 'am_15', numero: 15, nombre: 'El Diablo', tipo: 'Mayor',
    significadoDerecho: '⛓️ Ataduras, adicciones, materialismo, sombras y deseos terrenales.',
    significadoInvertido: '🔓 Liberación, superación de miedos, romper cadenas antiguas.',
    imagenes: { clasico: '/arcanos_mayores/15.jpg' }
  },
  {
    id: 'am_16', numero: 16, nombre: 'La Torre', tipo: 'Mayor',
    significadoDerecho: '⚡ Revelación repentina, destrucción de ilusiones, crisis, cambio drástico.',
    significadoInvertido: '🌋 Crisis evitada, retrasar lo inevitable, miedo al colapso.',
    imagenes: { clasico: '/arcanos_mayores/16.jpg' }
  },
  {
    id: 'am_17', numero: 17, nombre: 'La Estrella', tipo: 'Mayor',
    significadoDerecho: '⭐ Esperanza, fe, renovación espiritual, serenidad y sanación.',
    significadoInvertido: '☁️ Desesperanza, falta de fe, bloqueos espirituales.',
    imagenes: { clasico: '/arcanos_mayores/17.jpg' }
  },
  {
    id: 'am_18', numero: 18, nombre: 'La Luna', tipo: 'Mayor',
    significadoDerecho: '🌕 Ilusión, miedo, ansiedad, secretos, intuición confusa y sueños.',
    significadoInvertido: '☀️ Verdad revelada, miedos superados, claridad mental.',
    imagenes: { clasico: '/arcanos_mayores/18.jpg' }
  },
  {
    id: 'am_19', numero: 19, nombre: 'El Sol', tipo: 'Mayor',
    significadoDerecho: '🌞 Éxito, vitalidad, alegría, claridad, abundancia y celebración.',
    significadoInvertido: '⛅ Tristeza temporal, optimismo falso, gloria opacada.',
    imagenes: { clasico: '/arcanos_mayores/19.jpg' }
  },
  {
    id: 'am_20', numero: 20, nombre: 'El Juicio', tipo: 'Mayor',
    significadoDerecho: '🔔 Despertar, llamado interno, absolución, renovar el propósito de vida.',
    significadoInvertido: '🧠 Dudas, culpa, negar el llamado, decisiones pospuestas.',
    imagenes: { clasico: '/arcanos_mayores/20.jpg' }
  },
  {
    id: 'am_21', numero: 21, nombre: 'El Mundo', tipo: 'Mayor',
    significadoDerecho: '🌍 Integración, plenitud, finalización exitosa, logros, viajes.',
    significadoInvertido: '🏁 Ciclos inconclusos, frustración, falta de cierre.',
    imagenes: { clasico: '/arcanos_mayores/21.jpg' }
  },

  // ================= PALO DE BASTOS (14) =================
  { id: 'bastos_1', numero: 1, nombre: 'As de Bastos', tipo: 'Menor', significadoDerecho: '🔥 Inspiración, nueva iniciativa, pasión, energía creativa.', significadoInvertido: '🛑 Bloqueos creativos, falta de dirección, energía desperdiciada.', imagenes: { clasico: '/arcanos_menores/01 bastos.jpg' } },
  { id: 'bastos_2', numero: 2, nombre: 'Dos de Bastos', tipo: 'Menor', significadoDerecho: '🌍 Planificación, descubrimientos, visión de futuro, dar el primer paso.', significadoInvertido: '😰 Miedo a lo desconocido, mala estrategia, indecisión.', imagenes: { clasico: '/arcanos_menores/02 bastos.jpg' } },
  { id: 'bastos_3', numero: 3, nombre: 'Tres de Bastos', tipo: 'Menor', significadoDerecho: '🚢 Expansión, mirar al horizonte, frutos del esfuerzo inicial.', significadoInvertido: '⏳ Retrasos imprevistos, frustración, promesas rotas.', imagenes: { clasico: '/arcanos_menores/03 bastos.jpg' } },
  { id: 'bastos_4', numero: 4, nombre: 'Cuatro de Bastos', tipo: 'Menor', significadoDerecho: '🎉 Celebración, hogar estable, éxito, armonía y comunidad.', significadoInvertido: '🏠 Tensiones familiares ocultas, inestabilidad en el hogar.', imagenes: { clasico: '/arcanos_menores/04 bastos.jpg' } },
  { id: 'bastos_5', numero: 5, nombre: 'Cinco de Bastos', tipo: 'Menor', significadoDerecho: '⚔️ Competencia, rivalidad, caos, opiniones encontradas y desafíos.', significadoInvertido: '🤝 Resolución de conflictos, tregua, compromiso alcanzado.', imagenes: { clasico: '/arcanos_menores/05 bastos.jpg' } },
  { id: 'bastos_6', numero: 6, nombre: 'Seis de Bastos', tipo: 'Menor', significadoDerecho: '🏆 Victoria, reconocimiento público, orgullo, éxito merecido.', significadoInvertido: '📉 Pérdida de reputación, fracaso temporal, envidias del entorno.', imagenes: { clasico: '/arcanos_menores/06 bastos.jpg' } },
  { id: 'bastos_7', numero: 7, nombre: 'Siete de Bastos', tipo: 'Menor', significadoDerecho: '🛡️ Resistencia, defender firmemente tu posición frente a ataques.', significadoInvertido: '🏳️ Rendición, abrumado por las críticas, debilidad.', imagenes: { clasico: '/arcanos_menores/07 bastos.jpg' } },
  { id: 'bastos_8', numero: 8, nombre: 'Ocho de Bastos', tipo: 'Menor', significadoDerecho: '🏹 Velocidad, noticias rápidas, viajes rápidos, acción inmediata.', significadoInvertido: '🛑 Obstáculos, malas noticias, retrasos frustrantes.', imagenes: { clasico: '/arcanos_menores/08 bastos.jpg' } },
  { id: 'bastos_9', numero: 9, nombre: 'Nueve de Bastos', tipo: 'Menor', significadoDerecho: '🧗 Resiliencia, última prueba de resistencia, estar alerta.', significadoInvertido: '⚠️ Cansancio extremo, ganas de abandonar en el último tramo.', imagenes: { clasico: '/arcanos_menores/09 bastos.jpg' } },
  { id: 'bastos_10', numero: 10, nombre: 'Diez de Bastos', tipo: 'Menor', significadoDerecho: '🏋️ Gran carga, responsabilidades excesivas, fatiga física y mental.', significadoInvertido: '🎒 Aprender a delegar tareas, colapso por estrés acumulado.', imagenes: { clasico: '/arcanos_menores/10 bastos.jpg' } },
  { id: 'bastos_11', numero: 11, nombre: 'Sota de Bastos', tipo: 'Menor', significadoDerecho: '🌱 Entusiasmo, nuevas ideas apasionantes, noticias motivadoras.', significadoInvertido: '🥀 Indecisión, falta de compromiso, proyectos que no arrancan.', imagenes: { clasico: '/arcanos_menores/11 bastos.jpg' } },
  { id: 'bastos_12', numero: 12, nombre: 'Caballero de Bastos', tipo: 'Menor', significadoDerecho: '🐎 Acción audaz, pasión indomable, aventura, impulsividad.', significadoInvertido: '🔥 Arrogancia, agresión, dispersión de metas.', imagenes: { clasico: '/arcanos_menores/12 bastos.jpg' } },
  { id: 'bastos_13', numero: 13, nombre: 'Reina de Bastos', tipo: 'Menor', significadoDerecho: '🌻 Confianza, carisma, independencia, magnetismo y calidez.', significadoInvertido: '👁️ Celos, inseguridad oculta, temperamento explosivo y cruel.', imagenes: { clasico: '/arcanos_menores/13 bastos.jpg' } },
  { id: 'bastos_14', numero: 14, nombre: 'Rey de Bastos', tipo: 'Menor', significadoDerecho: '🦁 Liderazgo visionario, audacia, mentoría, control de proyectos.', significadoInvertido: '⛓️ Impaciencia, actitud dictatorial, metas tiránicas.', imagenes: { clasico: '/arcanos_menores/14 bastos.jpg' } },

  // ================= PALO DE COPAS (14) =================
  { id: 'copas_1', numero: 1, nombre: 'As de Copas', tipo: 'Menor', significadoDerecho: '💧 Amor puro, nuevas emociones, despertar espiritual, compasión.', significadoInvertido: '⚠️ Bloqueo emocional, amor no correspondido, vacío interior.', imagenes: { clasico: '/arcanos_menores/01 copas.jpg' } },
  { id: 'copas_2', numero: 2, nombre: 'Dos de Copas', tipo: 'Menor', significadoDerecho: '💞 Conexión mutua, romance, alianzas profundas y equilibrio.', significadoInvertido: '⚡ Ruptura, falta de comunicación, desencuentro afectivo.', imagenes: { clasico: '/arcanos_menores/02 copas.jpg' } },
  { id: 'copas_3', numero: 3, nombre: 'Tres de Copas', tipo: 'Menor', significadoDerecho: '🎉 Celebración, comunidad, amistad indestructible, alegría.', significadoInvertido: '🗣️ Excesos, chismes destructivos, aislamiento grupal.', imagenes: { clasico: '/arcanos_menores/03 copas.jpg' } },
  { id: 'copas_4', numero: 4, nombre: 'Cuatro de Copas', tipo: 'Menor', significadoDerecho: '😒 Apatía, aburrimiento, ignorar bendiciones u oportunidades.', significadoInvertido: '🌅 Despertar espiritual, motivación renovada, aceptar ofertas.', imagenes: { clasico: '/arcanos_menores/04 copas.jpg' } },
  { id: 'copas_5', numero: 5, nombre: 'Cinco de Copas', tipo: 'Menor', significadoDerecho: '😢 Lamento, pérdida emocional, enfocarse sólo en lo negativo.', significadoInvertido: '🌈 Aceptación, sanación interior, mirar con esperanza el mañana.', imagenes: { clasico: '/arcanos_menores/05 copas.jpg' } },
  { id: 'copas_6', numero: 6, nombre: 'Seis de Copas', tipo: 'Menor', significadoDerecho: '👶 Nostalgia sana, recuerdos de infancia, inocencia, reencuentros.', significadoInvertido: '⏩ Vivir atrapado en el pasado, estancamiento, miedo a crecer.', imagenes: { clasico: '/arcanos_menores/06 copas.jpg' } },
  { id: 'copas_7', numero: 7, nombre: 'Siete de Copas', tipo: 'Menor', significadoDerecho: '💭 Ilusiones, múltiples opciones confusas, fantasías sin base.', significadoInvertido: '🎯 Realismo absoluto, tomar una decisión madura, fin de la ilusión.', imagenes: { clasico: '/arcanos_menores/07 copas.jpg' } },
  { id: 'copas_8', numero: 8, nombre: 'Ocho de Copas', tipo: 'Menor', significadoDerecho: '🚶 Dejar atrás voluntariamente una situación por buscar algo mejor.', significadoInvertido: '🔄 Miedo al abandono, quedarse estancado en el lugar equivocado.', imagenes: { clasico: '/arcanos_menores/08 copas.jpg' } },
  { id: 'copas_9', numero: 9, nombre: 'Nueve de Copas', tipo: 'Menor', significadoDerecho: '🥰 Deseos cumplidos, satisfacción total, amor propio elevado.', significadoInvertido: '🥴 Inmadurez, egoísmo, insatisfacción a pesar del éxito.', imagenes: { clasico: '/arcanos_menores/09 copas.jpg' } },
  { id: 'copas_10', numero: 10, nombre: 'Diez de Copas', tipo: 'Menor', significadoDerecho: '🏡 Armonía familiar, felicidad compartida, alineación con el entorno.', significadoInvertido: '🏠 Conflictos familiares, desunión en el hogar, discusiones.', imagenes: { clasico: '/arcanos_menores/10 copas.jpg' } },
  { id: 'copas_11', numero: 11, nombre: 'Sota de Copas', tipo: 'Menor', significadoDerecho: '🐟 Mensaje intuitivo, joven sensible que llega, creatividad.', significadoInvertido: '🎭 Inmadurez emocional, hipersensibilidad, bloqueos.', imagenes: { clasico: '/arcanos_menores/11 copas.jpg' } },
  { id: 'copas_12', numero: 12, nombre: 'Caballero de Copas', tipo: 'Menor', significadoDerecho: '🦄 Oferta romántica o artística, idealismo, seguir al corazón.', significadoInvertido: '💔 Ilusiones destrozadas, cambios de humor, falsas promesas.', imagenes: { clasico: '/arcanos_menores/12 copas.jpg' } },
  { id: 'copas_13', numero: 13, nombre: 'Reina de Copas', tipo: 'Menor', significadoDerecho: '👑 Compasión maternal, empatía, madurez emocional, consejera.', significadoInvertido: '🌊 Manipulación afectiva, chantaje emocional, codependencia.', imagenes: { clasico: '/arcanos_menores/13 copas.jpg' } },
  { id: 'copas_14', numero: 14, nombre: 'Rey de Copas', tipo: 'Menor', significadoDerecho: '🌊 Control emocional absoluto, sabiduría, diplomacia y calma.', significadoInvertido: '🌪️ Inestabilidad, frialdad calculadora, vicios o bloqueos.', imagenes: { clasico: '/arcanos_menores/14 copas.jpg' } },

  // ================= PALO DE ESPADAS (14) =================
  { id: 'espadas_1', numero: 1, nombre: 'As de Espadas', tipo: 'Menor', significadoDerecho: '🗡️ Claridad mental radical, victoria intelectual, verdad revelada.', significadoInvertido: '🧠 Confusión masiva, argumentos destructivos, mentiras.', imagenes: { clasico: '/arcanos_menores/01 espada.jpg' } },
  { id: 'espadas_2', numero: 2, nombre: 'Dos de Espadas', tipo: 'Menor', significadoDerecho: '🙈 Encrucijada difícil, negar hechos evidentes, tregua tensa.', significadoInvertido: '👁️ Revelación de la verdad, tomar la decisión postergada.', imagenes: { clasico: '/arcanos_menores/02 espada.jpg' } },
  { id: 'espadas_3', numero: 3, nombre: 'Tres de Espadas', tipo: 'Menor', significadoDerecho: '💔 Traición, dolor profundo en el corazón, separación, duelo.', significadoInvertido: '❤️ Sanación progresiva, perdón, superar dolores del pasado.', imagenes: { clasico: '/arcanos_menores/03 espada.jpg' } },
  { id: 'espadas_4', numero: 4, nombre: 'Cuatro de Espadas', tipo: 'Menor', significadoDerecho: '🛌 Descanso necesario, meditación, recuperación de fuerzas.', significadoInvertido: '🏃 Regreso forzado a la acción, agotamiento, estrés mental.', imagenes: { clasico: '/arcanos_menores/04 espada.jpg' } },
  { id: 'espadas_5', numero: 5, nombre: 'Cinco de Espadas', tipo: 'Menor', significadoDerecho: '📉 Victoria vacía, conflicto egoísta, orgullo que daña.', significadoInvertido: '🤝 Deseo genuino de reconciliación, dejar ir rencores.', imagenes: { clasico: '/arcanos_menores/05 espada.jpg' } },
  { id: 'espadas_6', numero: 6, nombre: 'Seis de Espadas', tipo: 'Menor', significadoDerecho: '⛵ Transición, dejar atrás el caos para ir hacia la calma.', significadoInvertido: '🔄 Equipaje emocional pesado, resistencia al cambio de vida.', imagenes: { clasico: '/arcanos_menores/06 espada.jpg' } },
  { id: 'espadas_7', numero: 7, nombre: 'Siete de Espadas', tipo: 'Menor', significadoDerecho: '🥷 Estrategia inteligente, huir con un secreto, astucia extrema.', significadoInvertido: 'Conciencia limpia, ser descubierto, confesar la verdad.', imagenes: { clasico: '/arcanos_menores/07 espada.jpg' } },
  { id: 'espadas_8', numero: 8, nombre: 'Ocho de Espadas', tipo: 'Menor', significadoDerecho: '🕸️ Prisión mental autoimpuesta, parálisis por miedo.', significadoInvertido: '🔓 Liberación mental, ver las salidas reales del problema.', imagenes: { clasico: '/arcanos_menores/08 espada.jpg' } },
  { id: 'espadas_9', numero: 9, nombre: 'Nueve de Espadas', tipo: 'Menor', significadoDerecho: '😰 Pesadillas, ansiedad descontrolada, culpa e insomnio.', significadoInvertido: '🌅 Esperanza, comprender que los miedos estaban en la mente.', imagenes: { clasico: '/arcanos_menores/09 espada.jpg' } },
  { id: 'espadas_10', numero: 10, nombre: 'Diez de Espadas', tipo: 'Menor', significadoDerecho: '🪦 Final doloroso pero definitivo, tocar fondo (el renacer).', significadoInvertido: '🌅 Recuperación milagrosa, salir de una crisis extrema.', imagenes: { clasico: '/arcanos_menores/10 espada.jpg' } },
  { id: 'espadas_11', numero: 11, nombre: 'Sota de Espadas', tipo: 'Menor', significadoDerecho: '🔍 Curiosidad intelectual, agudeza mental, vigilancia.', significadoInvertido: '🗣️ Difamación, espionaje destructivo, palabras hirientes.', imagenes: { clasico: '/arcanos_menores/11 espada.jpg' } },
  { id: 'espadas_12', numero: 12, nombre: 'Caballero de Espadas', tipo: 'Menor', significadoDerecho: '🌪️ Avance feroz, defender la verdad sin medir consecuencias.', significadoInvertido: '💥 Agresión innecesaria, terquedad destructiva, imprudencia.', imagenes: { clasico: '/arcanos_menores/12 espada.jpg' } },
  { id: 'espadas_13', numero: 13, nombre: 'Reina de Espadas', tipo: 'Menor', significadoDerecho: '🧊 Intelecto frío, objetividad, límites muy firmes.', significadoInvertido: '🥶 Amargura, frialdad cruel, juicios destructivos hacia otros.', imagenes: { clasico: '/arcanos_menores/13 espada.jpg' } },
  { id: 'espadas_14', numero: 14, nombre: 'Rey de Espadas', tipo: 'Menor', significadoDerecho: '⚖️ Verdad lógica, autoridad mental, analítico y justo.', significadoInvertido: '⛓️ Abuso de poder, tiranía intelectual, frialdad calculadora.', imagenes: { clasico: '/arcanos_menores/14 espada.jpg' } },

  // ================= PALO DE OROS (14) =================
  { id: 'oros_1', numero: 1, nombre: 'As de Oros', tipo: 'Menor', significadoDerecho: '🪙 Nueva oportunidad financiera, abundancia física, prosperidad.', significadoInvertido: '💸 Pérdida de dinero, mala inversión, oportunidades perdidas.', imagenes: { clasico: '/arcanos_menores/01 oro.jpg' } },
  { id: 'oros_2', numero: 2, nombre: 'Dos de Oros', tipo: 'Menor', significadoDerecho: '🤹 Equilibrio de prioridades, adaptabilidad, recursos fluidos.', significadoInvertido: '🤯 Estrés por mala gestión del tiempo o del capital financiero.', imagenes: { clasico: '/arcanos_menores/02 oro.jpg' } },
  { id: 'oros_3', numero: 3, nombre: 'Tres de Oros', tipo: 'Menor', significadoDerecho: '👷 Trabajo en equipo, maestría en el oficio, éxito profesional.', significadoInvertido: '❌ Desorganización laboral, falta de esfuerzo grupal.', imagenes: { clasico: '/arcanos_menores/03 oro.jpg' } },
  { id: 'oros_4', numero: 4, nombre: 'Cuatro de Oros', tipo: 'Menor', significadoDerecho: '🔒 Codicia, miedo a perder estabilidad, apego material excesivo.', significadoInvertido: '💸 Gastos compulsivos, aprender a soltar bienes materiales.', imagenes: { clasico: '/arcanos_menores/04 oro.jpg' } },
  { id: 'oros_5', numero: 5, nombre: 'Cinco de Oros', tipo: 'Menor', significadoDerecho: '🥶 Crisis financiera, desamparo o salud precaria temporal.', significadoInvertido: '🏡 Fin de la mala racha económica, llegada de ayuda externa.', imagenes: { clasico: '/arcanos_menores/05 oro.jpg' } },
  { id: 'oros_6', numero: 6, nombre: 'Seis de Oros', tipo: 'Menor', significadoDerecho: '🤝 Generosidad equitativa, dar y recibir de forma justa.', significadoInvertido: '🤑 Egoísmo, deudas que atrapan, favores con segundas intenciones.', imagenes: { clasico: '/arcanos_menores/06 oro.jpg' } },
  { id: 'oros_7', numero: 7, nombre: 'Siete de Oros', tipo: 'Menor', significadoDerecho: '🌳 Paciencia, evaluación de frutos y proyectos a largo plazo.', significadoInvertido: '⏳ Frustración financiera, impaciencia, falta de recompensa.', imagenes: { clasico: '/arcanos_menores/07 oro.jpg' } },
  { id: 'oros_8', numero: 8, nombre: 'Ocho de Oros', tipo: 'Menor', significadoDerecho: '🛠️ Aprendizaje constante, dedicación minuciosa en tu labor.', significadoInvertido: '😒 Perfeccionismo que paraliza, flojera u obsesión laboral.', imagenes: { clasico: '/arcanos_menores/08 oro.jpg' } },
  { id: 'oros_9', numero: 9, nombre: 'Nueve de Oros', tipo: 'Menor', significadoDerecho: '💃 Independencia material, lujos merecidos, confort y seguridad.', significadoInvertido: '💸 Derroche imprudente, superficialidad, estafas en puerta.', imagenes: { clasico: '/arcanos_menores/09 oro.jpg' } },
  { id: 'oros_10', numero: 10, nombre: 'Diez de Oros', tipo: 'Menor', significadoDerecho: '🏰 Legado familiar duradero, riqueza estable, plenitud material.', significadoInvertido: '📉 Pérdidas patrimoniales, disputas familiares por herencias.', imagenes: { clasico: '/arcanos_menores/10 oro.jpg' } },
  { id: 'oros_11', numero: 11, nombre: 'Sota de Oros', tipo: 'Menor', significadoDerecho: '📖 Estudiante enfocado, semilla de negocio, sentido pragmático.', significadoInvertido: '💤 Pereza mental, metas poco realistas, dispersión absoluta.', imagenes: { clasico: '/arcanos_menores/11 oro.jpg' } },
  { id: 'oros_12', numero: 12, nombre: 'Caballero de Oros', tipo: 'Menor', significadoDerecho: '🐢 Trabajo duro y constante, rutina altamente eficiente, lealtad.', significadoInvertido: 'Estancamiento por terquedad, tacañería o apatía al cambio.', imagenes: { clasico: '/arcanos_menores/12 oro.jpg' } },
  { id: 'oros_13', numero: 13, nombre: 'Reina de Oros', tipo: 'Menor', significadoDerecho: '🏡 Éxito doméstico y material, mujer nutridora, abundancia real.', significadoInvertido: 'Materialismo excesivo, abandono del cuidado personal.', imagenes: { clasico: '/arcanos_menores/13 oro.jpg' } },
  { id: 'oros_14', numero: 14, nombre: 'Rey de Oros', tipo: 'Menor', significadoDerecho: '👑 Éxito empresarial rotundo, gran proveedor, estabilidad suprema.', significadoInvertido: '🤑 Corrupción monetaria, tacaño codicioso, malas decisiones.', imagenes: { clasico: '/arcanos_menores/14 oro.jpg' } }
];