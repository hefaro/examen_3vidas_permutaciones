// Banco de preguntas: Nivel Medio - Permutaciones (Grado 9°)
// Enfoque: P(n,k), regla multiplicativa condicional y análisis de orden (importa vs no importa)

const bancoIntermedio = [
    {
        pregunta: "En una carrera en el parque Cabal participan 8 atletas. Si se va a premiar con Oro, Plata y Bronce a los 3 primeros lugares, ¿de cuántas formas puede quedar el podio?",
        correcta: "336 formas: Como el orden importa, se calcula P(8,3) = 8 × 7 × 6 = 336.",
        distractoras: [
            "24 formas: Se calculó únicamente el factorial de los 3 lugares (3!).",
            "512 formas: Se elevó 8 a la potencia de 3 (8 × 8 × 8).",
            "56 formas: Se calculó como una combinación, ignorando el orden de las medallas."
        ]
    },
    {
        pregunta: "De un grupo de 5 estudiantes sobresalientes se va a elegir una directiva con tres cargos: Presidente, Secretario y Tesorero. ¿Cuántas directivas distintas se pueden formar?",
        correcta: "60 directivas: El cargo hace que el orden importe. P(5,3) = 5 × 4 × 3 = 60.",
        distractoras: [
            "15 directivas: Se multiplicó 5 por 3.",
            "120 directivas: Se calculó el factorial de los 5 estudiantes (5!).",
            "10 directivas: Se consideró como un grupo donde los cargos no importan (combinación)."
        ]
    },
    {
        pregunta: "Imagina que vas a la cafetería del colegio y pides un salpicón eligiendo 3 frutas de un menú de 5 posibles. ¿Esta situación es una permutación?",
        correcta: "No, es una combinación: El orden en que echan las frutas al vaso no cambia el salpicón resultante.",
        distractoras: [
            "Sí, es una permutación: Porque siempre se elige una cantidad menor al total disponible.",
            "Sí, es una permutación: Porque el sabor cambia dependiendo de qué fruta toque el fondo del vaso.",
            "No, es una variación con repetición: Porque se pueden elegir tres porciones de la misma fruta."
        ]
    },
    {
        pregunta: "Para desbloquear un celular se requiere un PIN de 4 dígitos diferentes. Si solo puedes usar los números {1, 2, 3, 4, 5, 6}, ¿cuántos PIN distintos existen?",
        correcta: "360 PINs: El orden de los números cambia la clave. P(6,4) = 6 × 5 × 4 × 3 = 360.",
        distractoras: [
            "24 PINs: Se calculó únicamente el factorial de 4.",
            "720 PINs: Se asumió que se debían usar los 6 números para la clave (6!).",
            "1.296 PINs: Se calculó asumiendo que los números sí se pueden repetir (6 × 6 × 6 × 6)."
        ]
    },
    {
        pregunta: "La fórmula general para calcular una permutación de 'n' elementos tomados de 'k' en 'k' (donde el orden importa y no hay repetición) es:",
        correcta: "P(n,k) = n! / (n - k)! : Se divide el factorial total entre el factorial de los elementos que no se seleccionan.",
        distractoras: [
            "P(n,k) = n! / (k! × (n - k)!) : Esta es la fórmula para combinaciones, donde el orden no importa.",
            "P(n,k) = n! × k! : Se multiplican los factoriales de la población y la muestra.",
            "P(n,k) = n^k : Esta fórmula aplica cuando se permite repetir los elementos indefinidamente."
        ]
    },
    {
        pregunta: "Con las letras de la palabra 'BUGA', ¿cuántas 'palabras' de 2 letras (tengan o no sentido) se pueden formar sin repetir letras?",
        correcta: "12 palabras: Se eligen 2 letras de 4 disponibles. P(4,2) = 4 × 3 = 12.",
        distractoras: [
            "24 palabras: Se calculó el arreglo de todas las letras juntas (4!).",
            "16 palabras: Se multiplicó 4 × 4 asumiendo que se pueden repetir.",
            "8 palabras: Se multiplicó 4 por 2."
        ]
    },
    {
        pregunta: "En un parqueadero hay 5 espacios vacíos alineados. Si llegan 3 vehículos distintos, ¿de cuántas maneras diferentes pueden estacionarse?",
        correcta: "60 maneras: El primer carro tiene 5 opciones, el segundo 4 y el tercero 3 (5 × 4 × 3 = 60).",
        distractoras: [
            "15 maneras: Se multiplicó 5 por 3.",
            "125 maneras: Se elevó 5 al cubo asumiendo que varios carros pueden ocupar un mismo espacio.",
            "10 maneras: Se calculó sin importar qué carro ocupa qué lugar."
        ]
    },

    {
        pregunta: "¿Cuál es el resultado matemático exacto de calcular P(6, 2)?",
        correcta: "30: Significa tomar 2 factores empezando desde el 6, es decir, 6 × 5 = 30.",
        distractoras: [
            "12: Se multiplicó directamente 6 por 2.",
            "36: Se elevó 6 al cuadrado.",
            "720: Se calculó el factorial completo de 6."
        ]
    },

    {
        pregunta: "Si tienes 5 libros distintos y quieres acomodar solo 3 en una repisa pequeña, ¿cuántos arreglos diferentes puedes hacer?",
        correcta: "60 arreglos: Al ponerlos en una repisa el orden importa. P(5,3) = 5 × 4 × 3 = 60.",
        distractoras: [
            "15 arreglos: Se multiplicó 5 × 3.",
            "120 arreglos: Se calculó como si se fueran a colocar los 5 libros a la vez.",
            "10 arreglos: Se trató como una selección donde la posición en la repisa no importara."
        ]
    },

    {
        pregunta: "Cinco amigos van a tomarse una foto en fila, pero Camilo y Andrés deciden que DEBEN salir juntos uno al lado del otro. ¿Cuántas fotos distintas pueden tomarse?",
        correcta: "48 fotos: Se toma a Camilo y Andrés como 1 bloque (quedan 4 bloques = 4! = 24). Luego se permutan ellos dos (24 × 2! = 48).",
        distractoras: [
            "120 fotos: Se calculó como 5! ignorando la restricción de que deben estar juntos.",
            "24 fotos: Se agruparon en un bloque, pero se olvidó multiplicar por el orden interno de Camilo y Andrés.",
            "12 fotos: Se restaron los dos amigos del total antes de sacar el factorial."
        ]
    },
    {
        pregunta: "Se tienen 6 materias para programar en un horario, pero solo hay tiempo para ver 3 de ellas en la mañana. ¿De cuántas formas se puede organizar el horario matutino?",
        correcta: "120 formas: El orden de las clases importa. P(6,3) = 6 × 5 × 4 = 120.",
        distractoras: [
            "18 formas: Se multiplicó directamente 6 por 3.",
            "720 formas: Se calculó el horario organizando las 6 materias completas.",
            "20 formas: Se calculó como si el orden de las clases en la mañana diera igual."
        ]
    },
    {
        pregunta: "Si P(n, 2) = 20, ¿cuál es el valor de 'n'?",
        correcta: "5: Buscamos un número que multiplicado por su antecesor dé 20 (5 × 4 = 20).",
        distractoras: [
            "10: Porque 10 multiplicado por 2 da 20.",
            "4: Porque 4 × 5 = 20, pero 'n' siempre debe ser el valor mayor inicial.",
            "6: Porque P(6,2) da 20 (lo cual es falso, da 30)."
        ]
    },
    {
        pregunta: "Con las letras de la palabra 'CASA', ¿cuántas palabras diferentes de 4 letras se pueden formar?",
        correcta: "12 palabras: Es permutación con repetición (la 'A' está 2 veces). 4! / 2! = 24 / 2 = 12.",
        distractoras: [
            "24 palabras: Se calculó 4! asumiendo que todas las letras eran diferentes.",
            "6 palabras: Se dividió el total entre el número de letras de la palabra.",
            "16 palabras: Se elevó 4 al cuadrado."
        ]
    },
    {
        pregunta: "¿Por qué en la fórmula de permutación circular se utiliza (n - 1)! en lugar de n! ?",
        correcta: "Porque al estar en círculo no hay un principio ni un fin fijo, se debe fijar a un elemento como referencia para evitar contar arreglos repetidos al rotar.",
        distractoras: [
            "Porque siempre hay un elemento que debe quedar excluido del círculo de forma obligatoria.",
            "Porque en los círculos el último puesto siempre vale la mitad del primer puesto.",
            "Porque (n - 1) garantiza que el resultado sea siempre un número impar."
        ]
    },
    {
        pregunta: "Hay 4 banderas de distintos colores. ¿Cuántas señales diferentes se pueden hacer izando 2 banderas una encima de la otra en un mástil?",
        correcta: "12 señales: El orden vertical cambia la señal. P(4,2) = 4 × 3 = 12.",
        distractoras: [
            "24 señales: Se calculó izando las 4 banderas al mismo tiempo.",
            "8 señales: Se multiplicó 4 por 2.",
            "6 señales: Se calculó como una combinación, ignorando que rojo-arriba es distinto a rojo-abajo."
        ]
    },
    {
        pregunta: "En una permutación donde se escogen 'k' elementos de un total de 'n' (P(n,k)), ¿qué ocurre matemáticamente cuando k es igual a n?",
        correcta: "La fórmula se convierte en n! : P(n,n) es igual al factorial de n, ya que se están ordenando todos los elementos.",
        distractoras: [
            "El resultado se vuelve cero: Al restar n - n, todo el arreglo se anula.",
            "El resultado es 1: Solo hay una forma de escoger a todo el grupo.",
            "La fórmula marca un error porque 'k' siempre debe ser menor estricto que 'n'."
        ]
    },
    {
        pregunta: "Se tienen los dígitos 1, 3, 5, 7. ¿Cuántos números de 3 cifras se pueden formar si se permite REPETIR los dígitos?",
        correcta: "64 números: Como hay repetición, por principio multiplicativo es 4 × 4 × 4 = 64.",
        distractoras: [
            "24 números: Se calculó como una permutación sin repetición P(4,3).",
            "12 números: Se multiplicó 4 por 3.",
            "81 números: Se multiplicó 3 × 3 × 3 × 3."
        ]
    },
    {
        pregunta: "Seis amigos se van a sentar en una fila de 6 sillas, pero dos de ellos están peleados y NO quieren sentarse juntos. ¿De cuántas formas pueden acomodarse?",
        correcta: "480 formas: Total de formas (6! = 720) menos las formas donde están juntos (5! × 2! = 240). 720 - 240 = 480.",
        distractoras: [
            "240 formas: Corresponde a la cantidad de veces que terminarían sentados juntos.",
            "360 formas: Se calculó dividiendo el total de arreglos entre dos.",
            "120 formas: Se calculó 5! excluyendo completamente a uno de los amigos."
        ]
    },
    {
        pregunta: "Un candado de bicicleta tiene 3 anillos, cada uno con los números del 0 al 9. ¿Cuántas combinaciones (arreglos) posibles existen si se pueden repetir los números?",
        correcta: "1.000 arreglos: Cada anillo tiene 10 opciones. 10 × 10 × 10 = 1.000.",
        distractoras: [
            "720 arreglos: Se calculó asumiendo que no se podían repetir los números (10 × 9 × 8).",
            "30 arreglos: Se sumaron las opciones de cada anillo (10 + 10 + 10).",
            "100 arreglos: Se multiplicó 10 × 10."
        ]
    },
    {
        pregunta: "Para conformar la comisión de convivencia, el profesor debe elegir a 3 estudiantes de un grupo de 5. ¿Esta situación se resuelve con una permutación?",
        correcta: "No, porque no hay cargos jerárquicos: El grupo final es el mismo sin importar a quién nombró primero. Es una combinación.",
        distractoras: [
            "Sí, porque se están eligiendo personas y las personas son elementos únicos e irrepetibles.",
            "Sí, porque siempre que se extrae un subgrupo menor (3) de un grupo mayor (5) el orden importa.",
            "No, porque al ser 3 estudiantes se debe utilizar obligatoriamente una permutación circular."
        ]
    }
];