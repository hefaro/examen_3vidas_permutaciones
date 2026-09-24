// Banco de preguntas: Nivel Bajo - Permutaciones (Grado 9°)
// Basado en las actividades de aprendizaje del libro de texto (Pág. 124-125)

const bancoBajo = [
    {
        pregunta: "Con las letras de la palabra 'LIBRO', ¿de cuántas formas diferentes se pueden ordenar todas sus letras sin repetir ninguna?",
        correcta: "120 formas: Se calcula como 5! = 5 × 4 × 3 × 2 × 1 = 120.",
        distractoras: [
            "25 formas: Se multiplicó la cantidad de letras por sí misma (5 × 5).",
            "15 formas: Se sumaron las posiciones posibles (5 + 4 + 3 + 2 + 1).",
            "60 formas: Se omitió multiplicar por el último factor de la permutación."
        ]
    },
    {
        pregunta: "Sandra tiene 6 libros de consulta en su estantería. ¿Cuántas ordenaciones distintas puede realizar con ellos alineados en el estante?",
        correcta: "720 ordenaciones: Al usar todos los elementos se aplica 6! = 6 × 5 × 4 × 3 × 2 × 1.",
        distractoras: [
            "36 ordenaciones: Se elevó el número de libros al cuadrado (6 × 6).",
            "120 ordenaciones: Se calculó el factorial para 5 libros en lugar de 6.",
            "24 ordenaciones: Se multiplicó la cantidad de libros por 4."
        ]
    },
    {
        pregunta: "Con las letras de la palabra 'PERA', ¿cuántos grupos diferentes de cuatro letras se pueden escribir si la PRIMERA letra debe ser la 'P'?",
        correcta: "6 grupos: Como la 'P' está fija en el primer lugar, solo se permutan las 3 letras restantes (3! = 3 × 2 × 1 = 6).",
        distractoras: [
            "24 grupos: Se permutaron las 4 letras sin dejar fija la letra P inicial.",
            "12 grupos: Se dividió el total de permutaciones de 4 letras entre dos.",
            "4 grupos: Se contó únicamente el número de letras que componen la palabra."
        ]
    },
    {
        pregunta: "En una jugada de cartas, a un jugador le reparten 4 cartas. ¿De cuántas formas distintas puede organizar sus 4 cartas en la mano?",
        correcta: "24 formas: Al organizar un conjunto de 4 elementos distintos se calcula 4! = 4 × 3 × 2 × 1 = 24.",
        distractoras: [
            "16 formas: Se calculó 4 elevado al cuadrado (4 × 4).",
            "8 formas: Se multiplicó la cantidad de cartas por dos.",
            "12 formas: Se multiplicó 4 × 3 omitiendo los factores restantes."
        ]
    },
    {
        pregunta: "A una reunión acudieron 12 mandatarios. A la hora de tomar una foto conmemorativa se ubicaron todos en una fila. ¿De cuántas formas distintas pueden ubicarse?",
        correcta: "12! formas: La ordenación lineal de 12 elementos distintos corresponde al factorial de 12 (12!).",
        distractoras: [
            "144 formas: Se multiplicó la cantidad de personas por sí misma (12 × 12).",
            "24 formas: Se multiplicó el número de personas por 2.",
            "(12 - 1)! formas: Se aplicó la fórmula de permutación circular en lugar de una fila recta."
        ]
    },
    {
        pregunta: "Con las letras {a, b, c, d, e, f}, ¿cuántos grupos diferentes de 6 letras se pueden formar sin que se repita ninguna?",
        correcta: "720 grupos: Dado que son 6 letras distintas, el total de arreglos es 6! = 720.",
        distractoras: [
            "36 grupos: Se multiplicó 6 por sí mismo.",
            "30 grupos: Se multiplicó el número de letras por 5.",
            "100 grupos: Se estimó una cifra redonda en base decimal."
        ]
    },
    {
        pregunta: "En una mesa redonda de un banquete hay capacidad para 8 personas. ¿De cuántas formas diferentes se pueden sentar alrededor de la mesa?",
        correcta: "5.040 formas: Para una permutación circular de n elementos se usa (n - 1)! = 7! = 5.040.",
        distractoras: [
            "40.320 formas: Se calculó como permutación lineal (8!) sin fijar una posición de referencia.",
            "64 formas: Se elevó el número de sillas al cuadrado (8 × 8).",
            "56 formas: Se multiplicó la cantidad de asientos por 7."
        ]
    },
    {
        pregunta: "Se desea formar una clave de 10 cifras usando cinco 2, tres 5 y dos 6. ¿Qué tipo de permutación se debe aplicar para hallar el total de claves?",
        correcta: "Permutación con repetición: Se calcula dividiendo 10! entre el producto de los factoriales de los elementos repetidos (5! × 3! × 2!).",
        distractoras: [
            "Permutación circular: Porque las cifras giran dentro del teclado numérico.",
            "Permutación lineal simple: Se calcula simplemente como 10! sin descontar los números repetidos.",
            "Combinación simple: Porque no importa el orden en el que se ingresen los dígitos."
        ]
    },
    {
        pregunta: "Un equipo de fútbol juega 12 partidos. Al final obtiene 7 ganados, 3 empatados y 2 perdidos. ¿De cuántas maneras se puede presentar esta secuencia de resultados?",
        correcta: "7.920 maneras: Corresponde a una permutación con repetición de 12 elementos: 12! / (7! × 3! × 2!).",
        distractoras: [
            "12! maneras: Se consideraron todos los partidos como si fueran resultados completamente distintos.",
            "42 maneras: Se multiplicaron los tres tipos de resultados entre sí (7 × 3 × 2).",
            "1.728 maneras: Se calculó 12 elevado al cubo."
        ]
    },
    {
        pregunta: "¿Cuál es la diferencia principal entre una permutación lineal de n elementos y una permutación circular de n elementos?",
        correcta: "En la circular no hay un primer ni un último lugar fijo, por lo que se fija un elemento y se calcula (n - 1)!.",
        distractoras: [
            "En la permutación circular siempre se multiplican los elementos por 2.",
            "En la permutación lineal el resultado siempre es menor que en la circular.",
            "No existe ninguna diferencia; en ambas se utiliza la fórmula exacta n!."
        ]
    },
    {
        pregunta: "¿Cuál es el valor del factorial 4! (cuatro factorial)?",
        correcta: "24: Resulta de multiplicar 4 × 3 × 2 × 1.",
        distractoras: [
            "10: Resulta de sumar 4 + 3 + 2 + 1.",
            "16: Resulta de elevar 4 al cuadrado.",
            "8: Resulta de multiplicar 4 por 2."
        ]
    },
    {
        pregunta: "Con las letras de la palabra 'GATO', ¿cuántas palabras de 4 letras (con o sin sentido) se pueden formar sin repetir letras?",
        correcta: "24 palabras: Corresponde al factorial de las 4 letras distintas (4! = 24).",
        distractoras: [
            "16 palabras: Se multiplicó 4 × 4.",
            "12 palabras: Se consideró solo la mitad de los arreglos posibles.",
            "4 palabras: Corresponde únicamente a la cantidad de letras de la palabra."
        ]
    },
    {
        pregunta: "Si 5 competidores llegan a la meta en una carrera y no hay empates, ¿de cuántas formas diferentes pueden ocupar los 5 puestos de llegada?",
        correcta: "120 formas: Se calcula mediante la permutación lineal de los 5 atletas (5! = 120).",
        distractoras: [
            "25 formas: Se calculó 5 × 5.",
            "10 formas: Se sumó 5 + 5.",
            "60 formas: Se dividió el resultado real entre dos."
        ]
    },
    {
        pregunta: "En una permutación con repetición $P_n^{a,b}$, si tenemos $n$ elementos totales donde el primero se repite $a$ veces y el segundo $b$ veces, la fórmula es:",
        correcta: "$n! / (a! \\times b!)$: Se divide el factorial total entre el producto de los factoriales de las repeticiones.",
        distractoras: [
            "$n! \\times a! \\times b!$: Se multiplican todos los factoriales.",
            "$(n - a - b)!$: Se restan los elementos repetidos al total antes de aplicar el factorial.",
            "$n! / (a + b)$: Se divide entre la suma simple de los elementos repetidos."
        ]
    },
    {
        pregunta: "¿De cuántas formas se pueden sentar 4 personas alrededor de una mesa circular?",
        correcta: "6 formas: Se aplica la fórmula circular (4 - 1)! = 3! = 3 × 2 × 1 = 6.",
        distractoras: [
            "24 formas: Se calculó 4! como si estuvieran sentados en una fila recta.",
            "16 formas: Se elevó 4 al cuadrado.",
            "12 formas: Se multiplicó 4 × 3 sin completar el factorial."
        ]
    },
    {
        pregunta: "Si se ordenan 3 libros distintos en un estante, ¿cuántas disposiciones posibles hay?",
        correcta: "6 disposiciones: Se calcula como 3! = 3 × 2 × 1 = 6.",
        distractoras: [
            "9 disposiciones: Se multiplicó 3 × 3.",
            "3 disposiciones: Se contó la cantidad de libros.",
            "12 disposiciones: Se multiplicó 3 × 4."
        ]
    },
    {
        pregunta: "Con las letras de la palabra 'CANAL', que tiene 5 letras con la 'A' repetida 2 veces, ¿cuántos arreglos diferentes se pueden formar?",
        correcta: "60 arreglos: Se calcula como 5! / 2! = 120 / 2 = 60.",
        distractoras: [
            "120 arreglos: Se calculó 5! sin descontar las repeticiones de la letra A.",
            "25 arreglos: Se elevó 5 al cuadrado.",
            "30 arreglos: Se dividió 120 entre 4 de forma errónea."
        ]
    },
    {
        pregunta: "Tres amigos (Juan, Pedro y María) van al cine y se sientan en 3 sillas consecutivas. ¿De cuántas maneras diferentes se pueden acomodar?",
        correcta: "6 maneras: Corresponde a la permutación lineal 3! = 3 × 2 × 1 = 6.",
        distractoras: [
            "3 maneras: Corresponde únicamente al número de sillas.",
            "9 maneras: Se calculó 3 × 3.",
            "2 maneras: Se asumió que solo cambian los de los extremos."
        ]
    },
    {
        pregunta: "¿Qué representa el símbolo '!' en la expresión $n!$ dentro de las permutaciones?",
        correcta: "Factorial: El producto de todos los números enteros positivos desde 1 hasta n.",
        distractoras: [
            "Exponente: Indica que el número debe multiplicarse por sí mismo n veces.",
            "Divisón especial: Indica que se debe dividir entre el número total de elementos.",
            "Suma acumulada: Indica la adición de todos los números desde 1 hasta n."
        ]
    },
    {
        pregunta: "Si en una permutación lineal de 5 elementos fijamos la posición del primer elemento, ¿cuántas permutaciones posibles quedan con los demás?",
        correcta: "24 permutaciones: Quedan 4 elementos por ordenar, es decir, 4! = 24.",
        distractoras: [
            "120 permutaciones: Se contó como si el primer elemento siguiera cambiando de posición.",
            "5 permutaciones: Se asumió que solo hay 5 formas posibles.",
            "12 permutaciones: Se dividió 24 entre dos."
        ]
    }
];