#!/bin/bash

# Script para aplicar traducciones a todos los archivos HTML

# Lista de archivos HTML a procesar
files=("carrito.html" "conocenos.html" "copias-impresion.html" "delivery.html" "productos.html" "politicas-privacidad.html" "terminos-condiciones.html")

for file in "${files[@]}"; do
    echo "Procesando $file..."
    
    # Agregar script de language-switcher si no existe
    if ! grep -q "language-switcher.js" "$file"; then
        # Buscar la línea que contiene </head> y agregar el script antes
        sed -i 's|</head>|  <script src="language-switcher.js"></script>\n</head>|' "$file"
    fi
    
    # Agregar atributos data-translate al navbar
    sed -i 's|>Inicio</a>| data-translate="nav-inicio">Inicio</a>|g' "$file"
    sed -i 's|>Productos</a>| data-translate="nav-productos">Productos</a>|g' "$file"
    sed -i 's|>Copias e Impresiones</a>| data-translate="nav-copias">Copias e Impresiones</a>|g' "$file"
    sed -i 's|> Conócenos</a>| data-translate="nav-conocenos"> Conócenos</a>|g' "$file"
    
    echo "Completado $file"
done

echo "Proceso completado para todos los archivos."
