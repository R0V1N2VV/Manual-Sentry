# ManualSentry – Sistema de Control de Torreta

ManualSentry es un sistema que permite controlar una **torreta física** mediante una **interfaz web** intuitiva, utilizando tecnología **Arduino + Bluetooth**.  
El usuario puede mover la torreta, ejecutar el disparo y acceder a un panel de diagnóstico y administración desde cualquier navegador compatible.

---

## Objetivo del Proyecto

- Permitir el **control remoto** de una torreta mediante una página web.
- Facilitar movimientos direccionales: izquierda, derecha, arriba y abajo.
- Activar funciones como el **disparo** enviando señales al Arduino.
- Utilizar comunicación **Bluetooth** con el módulo HC-06.
- Ofrecer un control intuitivo y accesible para cualquier usuario.

---

## Características Principales

-  Control direccional completo  
-  Disparo remoto  
-  Conexión vía Bluetooth con selección de puerto  
-  Estado de conexión  
-  Panel de administración  
-  Tabla de verdad  
-  Circuitos lógicos  
-  Configuración de la torreta  
-  Cerrar sesión  

Compatible con: **Chrome, Brave, Opera y Edge**

---

## Tecnologías Utilizadas

### Hardware
- Arduino Mega  
- Módulo Bluetooth HC-06  
- Servomotores para movimientos  
- Portabaterías  
- Mecanismo de disparo  

### Software
- Arduino IDE (C++ para Arduino)  
- HTML, CSS y JavaScript  
- API Web Bluetooth / Web Serial  
- Backend local (según implementación del equipo)  

---

## Cómo Usar ManualSentry

### Encender la torreta
1. Colocar las baterías.  
2. Conectar la torreta al portabaterías.  
3. Verificar que la **luz verde superior esté encendida**.  

### Acceder al sistema
Desde un navegador compatible, entrar a:

**https://manualsentry.cavernservices.org**

### Crear una cuenta
Presionar **Registrarse** e ingresar:  
- Nombre  
- Correo electrónico  
- Contraseña  

### Conectar vía Bluetooth
1. Ir al panel **Estado de Conexión**.  
2. Presionar **Conectar**.  
3. Seleccionar el puerto Bluetooth del HC-06.  

### Controlar la torreta
Una vez conectado vas a ver:  
- Botones direccionales  
- Botón de disparo  
- Menú de funciones adicionales  

---

## Autores del Proyecto

- **Luciano Fullano** – Frontend  
- **Byron Ruiz** – Líder del proyecto  
- **Felipe López Mochi** – Investigador  
- **Marcos Olivares** – Documentador y Diseño 3D  
- **Ariel Russi** – Backend  
- **Augusto Kurtz** – Colaborador técnico  

---

## Licencia

El código está licenciado bajo:

**GNU Lesser General Public License v2.1 (LGPL 2.1)**  
© 2025 Luciano Fullano, Byron Ruiz, Augusto Kurtz, Ariel Russi, Marcos Olivares y Felipe Lopez Mochi.

Ver el archivo `LICENSE` para más información.

---
