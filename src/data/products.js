// src/data/products.js

import sofaCloud from '../images/1.jpg';
import mesaNordica from '../images/2.jpg';
import mesaLiving from '../images/3.jpg';
import Mueble from '../images/4.jpg';
import MuebleDos from '../images/5.jpg';
export const initialProducts = [
  {
    id: 1,
    name: 'Estantería Industrial Escalonada',
    category: 'Sofás',
    price: 65000.00,
    description: 'Sofá de tres plazas con módulos intercambiables. Ideal para cualquier salón moderno.',
    material: 'Tela aterciopelada',
    imageUrl: sofaCloud, // Ruta a tu imagen
    colors: ['Gris', 'Blanco Roto', 'Azul Marino'],
  },
  {
    id: 2,
    name: 'Consola de madera y metal Nórdica',
    category: 'Mesas',
    price: 45000.00,
    description: 'Consola de madera y metal con diseño minimalista escandinavo. Madera de roble natural.',
    material: 'Madera de Roble',
    imageUrl: mesaNordica,
    colors: ['Natural'],
  },
  // ... Agrega más productos aquí  
{
    id: 3,
    name: 'Mesa de Centro Industrial con Cajones',
    category: 'Mesas',
    price: 45000.00,
    description: 'Mesa de centro con diseño minimalista escandinavo. Madera de roble natural.',
    material: 'Madera de Roble',
    imageUrl: mesaLiving,
    colors: ['Natural'],
  },

 {
    id: 4,
    name: 'Mesa de Centro Industrial Doble Nivel',
    category: 'Mesas',
    price: 45000.00,
    description: 'Mesa de centro con diseño minimalista escandinavo. Madera de roble natural.',
    material: 'Madera de Roble',
    imageUrl: Mueble,
    colors: ['Natural'],
  }, 

 {
    id: 5,
    name: 'Bar Industrial / Mueble Bar con Copero',
    category: 'Mesas',
    price: 45000.00,
    description: 'Mesa de centro con diseño minimalista escandinavo. Madera de roble natural.',
    material: 'Madera de Roble',
    imageUrl: MuebleDos,
    colors: ['Natural'],
  }, 




];

export default initialProducts;