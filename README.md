# UniBot - Sistema Asesor Académico

UniBot es un sistema de asistencia académica automatizada para apoyar a estudiantes de primer ingreso de la Universidad Icesi. Su propósito es orientar a cada estudiante en consultas académicas y técnicas relacionadas con su carrera, reducir las preguntas repetitivas que reciben los asesores humanos y evitar respuestas sobre temas ajenos a su programa académico.

## Objetivo

Desarrollar un sistema de asistencia académica que identifique la carrera del estudiante y lo oriente únicamente sobre los temas permitidos para esta.

## Usuarios del sistema

### Estudiante

- Accede al sistema mediante su código institucional.
- Realiza consultas académicas y técnicas.
- Recibe orientación relacionada con los temas de su carrera.

### Administrador

- Registra estudiantes.
- Gestiona los temas permitidos para cada carrera.
- Consulta y supervisa las sesiones de los estudiantes.

## Fases del proyecto

### Fase 1: Pensamiento sistémico e ingeniería de requisitos

Esta fase se enfocó en analizar y planear el sistema. El trabajo incluyó:

- Caracterización del sistema e identificación de sus entradas, procesos, salidas y elementos principales.
- Definición del enfoque de desarrollo incremental y organización del trabajo mediante Sprints.
- Construcción del Product Backlog.
- Diseño del diagrama de casos de uso y otros diagramas UML.
- Elaboración del tablero Kanban.

**Entregables:** Documento de Especificación y Planeación, diagramas UML, tablero Kanban y repositorio Git con la documentación del proyecto.

### Fase 2: Prototipo estructurado y autenticación

La fase actual construye la base operativa de UniBot en JavaScript y Node.js, aplicando los conceptos de programación de APO I. Se contempla organizar el código fuente, cargar estudiantes desde un archivo CSV, implementar el acceso con código institucional, autenticar al administrador con una contraseña configurada en variables de entorno, crear menús de consola para ambos roles y manejar errores de ejecución.

**Estado actual:** el prototipo lee los registros de `data/estudiantes.csv` y los muestra en la consola. La autenticación y los menús de estudiante y administrador están pendientes de implementación.

## Tecnologías

- JavaScript y Node.js.
- npm.
- dotenv para la futura gestión de variables de entorno.
- Git y GitHub.

## Requisitos

- Node.js y npm instalados.

## Instalación y ejecución

Desde la raíz del proyecto, instala las dependencias y ejecuta el prototipo:

bash
npm install
npm start


En su estado actual, el programa carga los registros del CSV e imprime la lista de estudiantes en la consola.

## Estructura del proyecto

`text
UniBot-Sistema-Asesor-Academico/
├── data/
│   └── estudiantes.csv
├── src/
│   └── index.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

El archivo `data/estudiantes.csv` contiene las columnas `codigo`, `nombre` y `carrera`. `.env.example` documenta la variable prevista `ADMIN_PASSWORD`; la autenticación del administrador aún no está implementada.

## Autor

**Samuel Vargas**

Universidad Icesi

Curso: Algoritmos y Programación I (APO I)