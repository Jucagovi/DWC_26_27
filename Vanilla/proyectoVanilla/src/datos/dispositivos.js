const dispositivos = [
  {
    "id": 1,
    "nombre": "Quantum Laptop Pro",
    "marca": "TechCorp",
    "precio": 1499.99,
    "enStock": true,
    "especificaciones": {
      "procesador": "Core i9",
      "ram": "32GB",
      "almacenamiento": "1TB SSD"
    },
    "accesorios": [
      { "tipo": "Ratón", "inalambrico": true },
      { "tipo": "Funda", "inalambrico": false }
    ]
  },
  {
    "id": 2,
    "nombre": "SmartWatch X",
    "marca": "WearablesInc",
    "precio": 299.50,
    "enStock": true,
    "especificaciones": {
      "pantalla": "1.4 AMOLED",
      "bateria": "48h",
      "resistenciaAgua": "5ATM"
    },
    "accesorios": [
      { "tipo": "Correa deportiva", "inalambrico": false },
      { "tipo": "Cargador magnético", "inalambrico": false }
    ]
  },
  {
    "id": 3,
    "nombre": "Auriculares SonicBoom",
    "marca": "AudioMax",
    "precio": 199.90,
    "enStock": false,
    "especificaciones": {
      "tipo": "Over-ear",
      "cancelacionRuido": true,
      "peso": "250g"
    },
    "accesorios": [
      { "tipo": "Cable jack 3.5mm", "inalambrico": false },
      { "tipo": "Estuche de viaje", "inalambrico": false }
    ]
  },
  {
    "id": 4,
    "nombre": "Tablet Vision 10",
    "marca": "TechCorp",
    "precio": 450.00,
    "enStock": true,
    "especificaciones": {
      "pantalla": "10.1 IPS",
      "bateria": "8000mAh",
      "so": "Android"
    },
    "accesorios": [
      { "tipo": "Lápiz óptico", "inalambrico": true },
      { "tipo": "Teclado Bluetooth", "inalambrico": true }
    ]
  },
  {
    "id": 5,
    "nombre": "Cámara ActionCam 4K",
    "marca": "CaptureTech",
    "precio": 320.00,
    "enStock": true,
    "especificaciones": {
      "resolucion": "4K a 60fps",
      "sensor": "12MP",
      "estabilizador": "Óptico"
    },
    "accesorios": [
      { "tipo": "Soporte para casco", "inalambrico": false },
      { "tipo": "Carcasa sumergible", "inalambrico": false }
    ]
  },
  {
    "id": 6,
    "nombre": "Router WiFi 6 Mesh",
    "marca": "NetSpeed",
    "precio": 129.99,
    "enStock": true,
    "especificaciones": {
      "bandas": "Doble banda",
      "velocidadMaxima": "3000Mbps",
      "cobertura": "200m2"
    },
    "accesorios": [
      { "tipo": "Cable Ethernet Cat6", "inalambrico": false },
      { "tipo": "Adaptador de corriente", "inalambrico": false }
    ]
  },
  {
    "id": 7,
    "nombre": "Monitor UltraWide 34\"",
    "marca": "VisionPro",
    "precio": 599.00,
    "enStock": false,
    "especificaciones": {
      "resolucion": "3440x1440",
      "tasaRefresco": "144Hz",
      "panel": "IPS"
    },
    "accesorios": [
      { "tipo": "Cable DisplayPort", "inalambrico": false },
      { "tipo": "Soporte VESA", "inalambrico": false }
    ]
  },
  {
    "id": 8,
    "nombre": "Teclado Mecánico RGB",
    "marca": "GamerGear",
    "precio": 89.90,
    "enStock": true,
    "especificaciones": {
      "switches": "Cherry MX Red",
      "layout": "ISO Español",
      "material": "Aluminio"
    },
    "accesorios": [
      { "tipo": "Reposamuñecas", "inalambrico": false },
      { "tipo": "Extractor de teclas", "inalambrico": false }
    ]
  },
  {
    "id": 9,
    "nombre": "Altavoz Inteligente Home",
    "marca": "SmartLife",
    "precio": 59.99,
    "enStock": true,
    "especificaciones": {
      "asistente": "Integrado",
      "microfonos": 4,
      "potencia": "15W"
    },
    "accesorios": [
      { "tipo": "Soporte de pared", "inalambrico": false },
      { "tipo": "Cable de alimentación", "inalambrico": false }
    ]
  },
  {
    "id": 10,
    "nombre": "Drone Explorer Pro",
    "marca": "AeroTech",
    "precio": 850.00,
    "enStock": true,
    "especificaciones": {
      "autonomia": "35 minutos",
      "alcance": "8km",
      "peso": "595g"
    },
    "accesorios": [
      { "tipo": "Mando a distancia", "inalambrico": true },
      { "tipo": "Batería extra", "inalambrico": false },
      { "tipo": "Hélices de repuesto", "inalambrico": false }
    ]
  }
];

export {dispositivos};