// Banco de preguntas: Nivel Alto - Permutaciones (Grado 9°)
// Enfoque: Restricciones múltiples, permutaciones avanzadas con repetición, deducción factorial y modelos complejos

const bancoAlto = [
    {
        pregunta: "Con las letras de la palabra 'COLOMBIA', ¿cuántos grupos o arreglos diferentes de 8 letras se pueden formar en total?",
        correcta: "20.160 arreglos: La letra 'O' se repite 2 veces. Se calcula como 8! / 2! = 40.320 / 2 = 20.160.",
        distractoras: [
            "40.320 arreglos: Se calculó 8! sin descontar la repetición de la letra O.",
            "10.080 arreglos: Se dividió dos veces por 2 de forma errónea.",
            "5.040 arreglos: Se asumió que había dos pares de letras repetidas."
        ]
    },
    {
        pregunta: "Ocho personas van a cenar y se ubican en una mesa redonda. Si dos de ellas son esposos y exigen sentarse juntos, ¿de cuántas formas distintas pueden acomodarse?",
        correcta: "1.440 formas: Se toma a la pareja como 1 bloque (quedan 7 bloques en círculo = (7-1)! = 720). Luego se permutan entre ellos (720 × 2! = 1.440).",
        distractoras: [
            "5.040 formas: Se calculó la permutación circular de 8 personas sin aplicar la restricción de la pareja.",
            "720 formas: Se hizo la permutación circular del grupo pero se olvidó que los esposos pueden cambiar de lugar entre sí.",
            "40.320 formas: Se calculó como una fila recta ordinaria (8!)."
        ]
    },
    {
        pregunta: "Para acceder a una caja fuerte se debe ingresar un número de 10 cifras formado por cinco 2, tres 5 y dos 6. ¿Cuántas claves distintas se pueden generar?",
        correcta: "2.520 claves: Permutación con repetición de 10 elementos: 10! / (5! × 3! × 2!) = 3.628.800 / (120 × 6 × 2) = 2.520.",
        distractoras: [
            "30.240 claves: Se omitió dividir entre el factorial de las cifras menores (2!).",
            "3.628.800 claves: Se calculó 10! como si todas las cifras fueran distintas.",
            "1.200 claves: Se multiplicaron únicamente las cantidades de los dígitos."
        ]
    },
    {
        pregunta: "Se tienen 3 libros de Matemáticas diferentes y 2 libros de Lenguaje diferentes. ¿De cuántas formas se pueden organizar en una repisa si los libros de la misma materia DEBEN quedar juntos?",
        correcta: "24 formas: Los bloques de materias se ordenan de 2! formas. Matemáticas internamente 3! = 6; Lenguaje internamente 2! = 2. Total: 2 × 6 × 2 = 24.",
        distractoras: [
            "120 formas: Se organizaron los 5 libros juntos ignorando que deben estar separados por materias (5!).",
            "12 formas: Se olvidó permutar entre sí el orden de los dos bloques de materias.",
            "36 formas: Se multiplicaron los factoriales de manera incorrecta."
        ]
    },
    {
        pregunta: "Si P(n, 3) = 120, ¿cuál es el valor de 'n'?",
        correcta: "n = 6: Se buscan 3 números consecutivos decrecientes cuyo producto sea 120 (6 × 5 × 4 = 120).",
        distractoras: [
            "n = 5: Porque 5 × 4 × 3 = 60 (no alcanza el valor de 120).",
            "n = 8: Se asumió que 8 × 3 da un número cercano.",
            "n = 10: Se estimó en base decimal sin comprobar los tres factores."
        ]
    },
    {
        pregunta: "Con los dígitos {1, 2, 3, 4, 5, 6}, ¿cuántos números PARES de 3 cifras diferentes se pueden formar?",
        correcta: "60 números: El último dígito debe ser par (2, 4 o 6 -> 3 opciones). Las 2 primeras posiciones usan 2 dígitos de los 5 restantes: P(5,2) × 3 = 20 × 3 = 60.",
        distractoras: [
            "120 números: Se calculó el total de números de 3 cifras sin filtrar los que terminan en cifra par.",
            "36 números: Se asumió que en cada posición solo se podían poner números pares.",
            "90 números: Se multiplicó 5 × 6 × 3."
        ]
    },
    {
        pregunta: "¿De cuántas maneras se pueden ordenar las letras de la palabra 'MATEMATICAS' (11 letras en total, donde A se repite 3 veces, M 2 veces y T 2 veces)?",
        correcta: "1.663.200 maneras: Se calcula como 11! / (3! × 2! × 2!) = 39.916.800 / (6 × 2 × 2) = 1.663.200.",
        distractoras: [
            "39.916.800 maneras: Se calculó 11! sin descontar las letras repetidas.",
            "3.326.400 maneras: Se dividió únicamente entre el factorial de la letra 'A' (3!).",
            "831.600 maneras: Se dividió por un factor adicional no existente."
        ]
    },
    {
        pregunta: "Se van a ubicar 5 hombres y 5 mujeres alrededor de una mesa circular de tal manera que queden alternados (un hombre al lado de una mujer). ¿De cuántas formas pueden sentarse?",
        correcta: "2.880 formas: Se fijan las mujeres en el círculo en (5-1)! = 24 formas. Los 5 hombres ocupan los 5 lugares intermedios en 5! = 120 formas. Total: 24 × 120 = 2.880.",
        distractoras: [
            "362.880 formas: Se calculó la permutación circular simple de las 10 personas sin alternar géneros (9!).",
            "14.400 formas: Se calculó 5! × 5! ignorando que la disposición es en círculo.",
            "576 formas: Se restaron factores de forma incorrecta."
        ]
    },
    {
        pregunta: "Cuatro atletas participan en una carrera. ¿De cuántas maneras pueden llegar a la meta si se admiten empates en cualquier posición?",
        correcta: "75 maneras: Se analiza la partición de lugares (sin empates = 24; un empate doble = 36; dos empates dobles = 6; empate triple = 8; todos empatan = 1). Suma = 75.",
        distractoras: [
            "24 maneras: Se calculó únicamente el caso donde no hay ningún empate (4!).",
            "16 maneras: Se calculó 2 a la potencia de 4.",
            "256 maneras: Se calculó 4 a la potencia de 4."
        ]
    },
    {
        pregunta: "Un grupo de 7 estudiantes van a tomarse una foto en fila recta. ¿De cuántas formas pueden posar si el estudiante más alto DEBE quedar siempre en el centro?",
        correcta: "720 formas: La posición central queda ocupada por 1 sola persona. Las otras 6 personas se permutan libremente en los espacios restantes (6! = 720).",
        distractoras: [
            "5.040 formas: Se calculó la foto como si el más alto pudiera cambiar de posición (7!).",
            "2.520 formas: Se dividió el total entre dos sin justificación matemática.",
            "120 formas: Se calculó el factorial para 5 personas en lugar de 6."
        ]
    },
    {
        pregunta: "Se quieren formar números mayores que 4.000 con los dígitos {1, 3, 5, 7} sin repetir ninguna cifra. ¿Cuántos números se pueden formar?",
        correcta: "12 números: Para ser mayor a 4.000 y de 4 cifras, la primera cifra debe ser 5 o 7 (2 opciones). Las 3 posiciones restantes usan 3! = 6. Total: 2 × 6 = 12.",
        distractoras: [
            "24 números: Se formaron todos los números posibles de 4 cifras sin filtrar los menores que 4.000.",
            "6 números: Se consideró únicamente el número 5 como cifra inicial.",
            "18 números: Se sumaron opciones de forma incorrecta."
        ]
    },
    {
        pregunta: "¿De cuántas maneras se pueden sentar 6 personas en un banco con capacidad para 6, si 2 personas específicas REHUSAN sentarse en los extremos del banco?",
        correcta: "288 maneras: Los extremos se eligen con 2 de las 4 personas permitidas: P(4,2) = 12. Las 4 posiciones centrales internas alojan a las 4 restantes (4! = 24). Total: 12 × 24 = 288.",
        distractoras: [
            "720 maneras: Se acomodaron las 6 personas ignorando la condición de los extremos.",
            "480 maneras: Se calculó restando únicamente una posición restringida.",
            "144 maneras: Se dividió el total entre 5 de manera arbitraria."
        ]
    },
    {
        pregunta: "Si P(n, 2) + P(n-1, 2) = 32, ¿cuál es el valor de 'n'?",
        correcta: "n = 5: Verificación: P(5,2) = 5 × 4 = 20. P(4,2) = 4 × 3 = 12. Suma: 20 + 12 = 32.",
        distractoras: [
            "n = 6: P(6,2) = 30 y P(5,2) = 20, la suma da 50.",
            "n = 4: P(4,2) = 12 y P(3,2) = 6, la suma da 18.",
            "n = 7: Excede en gran medida el valor solicitado."
        ]
    },
    {
        pregunta: "Con las letras de la palabra 'RECONOCER' (9 letras), ¿cuántos arreglos de 9 letras se pueden formar?",
        correcta: "15.120 arreglos: Repeticiones: R (2 veces), E (2 veces), C (2 veces), O (2 veces). Fórmula: 9! / (2! × 2! × 2! × 2!) = 362.880 / 16 = 15.120.",
        distractoras: [
            "362.880 arreglos: Se calculó 9! sin descontar las 4 letras que están duplicadas.",
            "45.360 arreglos: Se dividió únicamente entre 8 en lugar de 16.",
            "90.720 arreglos: Se dividió únicamente entre 4."
        ]
    },
    {
        pregunta: "Se organizan 4 varones y 4 damas en una fila. ¿De cuántas formas se pueden acomodar si TODOS los varones deben estar juntos y TODAS las damas deben estar juntas?",
        correcta: "1.152 formas: Se forman 2 grandes bloques (Varones, Damas) que pueden ir en 2! = 2 órdenes. Internamente varones 4! = 24 y damas 4! = 24. Total: 2 × 24 × 24 = 1.152.",
        distractoras: [
            "40.320 formas: Se calculó como una fila recta ordinaria de 8 personas (8!).",
            "576 formas: Se olvidó multiplicar por el intercambio de posición entre el bloque de damas y el de varones.",
            "288 formas: Se calculó la permutación de un solo bloque."
        ]
    },
    {
        pregunta: "¿Cuántos códigos de 5 caracteres se pueden formar si los primeros 2 deben ser letras del alfabeto de 26 letras y los últimos 3 deben ser dígitos (0 al 9), sin repetir ningún carácter en su tipo?",
        correcta: "468.000 códigos: Elección de letras P(26,2) = 26 × 25 = 650. Elección de dígitos P(10,3) = 10 × 9 × 8 = 720. Total: 650 × 720 = 468.000.",
        distractoras: [
            "676.000 códigos: Se calculó asumiendo que tanto letras como dígitos se podían repetir.",
            "1.370 códigos: Se sumaron las combinaciones en lugar de multiplicarlas.",
            "2.340.000 códigos: Se sobreestimó la cantidad de dígitos disponibles."
        ]
    },
    {
        pregunta: "Un examen consta de 8 preguntas de opción múltiple. Si cada pregunta tiene 4 opciones de respuesta y un estudiante responde todas al azar, ¿de cuántas formas distintas puede diligenciar el examen?",
        correcta: "65.536 formas: Principio multiplicativo con repetición (variación con repetición): 4 elevado a la 8 = 4^8 = 65.536.",
        distractoras: [
            "32 formas: Se multiplicó 8 × 4.",
            "40.320 formas: Se calculó el factorial de 8 preguntas.",
            "1.638 formas: Se cometió un error en el cálculo de la potencia."
        ]
    },
    {
        pregunta: "Sabiendo que P(n, r) = 720 y C(n, r) = 120 para un mismo grupo de datos, ¿cuántos elementos se seleccionan en la muestra (cuál es el valor de 'r')?",
        correcta: "r = 3: La relación entre permutación y combinación es P(n,r) = C(n,r) × r!. Como 720 / 120 = 6, buscamos un r tal que r! = 6, el cual es 3 (3! = 6).",
        distractoras: [
            "r = 6: Se confundió el valor de r! con el valor directo de r.",
            "r = 2: Porque 2! = 2.",
            "r = 4: Porque 4! = 24."
        ]
    },
    {
        pregunta: "Se disponen 6 fichas de colores diferentes en una mesa en forma de hexágono regular. ¿Cuántas disposiciones de color distintas existen?",
        correcta: "120 disposiciones: Al tratarse de una figura cerrada simétrica (hexágono), aplica la permutación circular (6 - 1)! = 5! = 120.",
        distractoras: [
            "720 disposiciones: Se calculó como una ordenación lineal en fila recta.",
            "36 disposiciones: Se elevó 6 al cuadrado.",
            "15 disposiciones: Se aplicó la fórmula de combinaciones no ordenadas."
        ]
    },
    {
        pregunta: "Tres parejas de novios (6 personas en total) van al cine. ¿De cuántas maneras se pueden sentar en 6 sillas en fila si CADA PAREJA debe sentarse junta?",
        correcta: "48 maneras: Las 3 parejas se ordenan en 3! = 6 formas. Cada pareja puede cambiar internamente de puesto de 2! formas. Total: 6 × (2^3) = 6 × 8 = 48.",
        distractoras: [
            "720 maneras: Se calculó 6! ignorando que las parejas deben estar unidas.",
            "8 maneras: Se calculó únicamente la variación interna de las parejas.",
            "144 maneras: Se multiplicó por un factor extra de ordenación."
        ]
    }
];