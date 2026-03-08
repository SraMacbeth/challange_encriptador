# 🔐 Encriptador de Texto - Challenge Alura Latam

Este proyecto es una aplicación web interactiva que permite **encriptar y desencriptar** mensajes de texto mediante un sistema de sustitución de vocales. Fue desarrollado como parte del desafío propuesto por el programa Oracle Next Education (ONE) junto a Alura Latam.

## 📋 Descripción del Proyecto

La aplicación transforma el texto ingresado por el usuario en un mensaje "secreto" y viceversa. El objetivo es practicar la manipulación de cadenas de texto y la lógica de programación utilizando JavaScript puro (Vanilla JS).

### Reglas de Encriptación
El algoritmo funciona reemplazando las vocales por las siguientes "llaves":
* **La letra "a"** se convierte en **"ai"**.
* **La letra "e"** se convierte en **"enter"**.
* **La letra "i"** se convierte en **"imes"**.
* **La letra "o"** se convierte en **"ober"**.
* **La letra "u"** se convierte en **"ufat"**.

## 🚀 Funcionalidades

* **Encriptación y Desencriptación:** Botones dedicados para transformar el texto en tiempo real.
* **Validación de Entrada:** El sistema detecta y advierte si el usuario ingresa mayúsculas, acentos o caracteres especiales.
* **Gestión de Paneles:** La interfaz cambia dinámicamente para mostrar el resultado o mensajes de error según el estado de la aplicación.
* **Copiado al Portapapeles:** Incluye una función para copiar el texto resultante con un solo clic.
* **Diseño Responsivo:** Adaptado para funcionar correctamente en computadoras, tablets y dispositivos móviles mediante Media Queries.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura del contenido y secciones.
* **CSS3:** Estilizado, animaciones de hover y diseño adaptativo (Responsive Design).
* **JavaScript (ES6+):** Lógica del encriptador, validaciones con expresiones regulares (Regex) y manipulación del DOM.
* **Google Fonts:** Tipografía "Inter" para una mejor legibilidad.

## 💻 Instalación y Uso

1.  Clona este repositorio:
    ```bash
    git clone [https://github.com/tu-usuario/challange_encriptador.git](https://github.com/tu-usuario/challange_encriptador.git)
    ```
2.  Navega a la carpeta del proyecto y abre el archivo `index.html` en tu navegador.
3.  Ingresa el texto que desees encriptar (asegúrate de que esté en minúsculas y sin acentos).

## 🌐 Demo

Puedes probar la versión en vivo aquí: [https://sramacbeth.github.io/challange_encriptador/](https://sramacbeth.github.io/challange_encriptador/)

---
**Desarrollado por Emilia Poletti** - *2023*
