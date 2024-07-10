# 🚀 Sistema de Gestión de Inventario de Hidrocarburos

Este proyecto es un sistema de gestión de inventario de hidrocarburos que implementa el método FIFO (First In, First Out) para manejar la entrada y salida de productos. La aplicación permite agregar inventario de diésel, registrar ventas en litros, mostrar el inventario actual y generar un resumen detallado de las entradas utilizadas para surtir una venta, incluyendo el costo final de la venta.

## 🌟 Funcionalidades

- **Agregar Inventario**: Formulario para agregar inventario con cantidad (litros), fecha de entrada y precio por litro.
- **Registrar Ventas**: Formulario para registrar ventas con cantidad de litros vendidos. Actualización del inventario utilizando el método FIFO y generación del resumen de la venta.
- **Mostrar Inventario**: Lista de inventario mostrando cantidad de litros, fecha de entrada y precio por litro.
- **Resumen de Venta**: Mostrar las entradas utilizadas para surtir la venta y el costo final de la venta.

## 📋 Requisitos

- Node.js (>= 16.0.0)
- Yarn (>= 1.22.10)

## ⚙️ Instalación

Sigue estos pasos para clonar el repositorio e instalar las dependencias necesarias:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/<tu-usuario>/<nombre-del-repositorio>.git
    cd <nombre-del-repositorio>
    ```

2. Instala las dependencias:
    ```bash
    yarn install
    ```

## 🚀 Ejecución

Para ejecutar el proyecto localmente, utiliza el siguiente comando:

```bash
yarn start