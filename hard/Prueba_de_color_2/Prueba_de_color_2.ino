#define rojo 6
#define verde 9
#define azul 10

// Definir los pines para los potenciometros
#define potRojo A3
#define potVerde A2
#define potAzul A5
#define potIntensidad A0  // Potenciómetro para controlar la intensidad

void setup() {
  pinMode(rojo, OUTPUT);  // Configurar el pin para el color rojo como salida
  pinMode(verde, OUTPUT);  // Configurar el pin para el color verde como salida
  pinMode(azul, OUTPUT);  // Configurar el pin para el color azul como salida
}

void loop() {
  // Leer los valores de los potenciometros para el color
  int valorRojo = analogRead(potRojo);  // Lee el valor del potenciometro para el rojo
  int valorVerde = analogRead(potVerde);  // Lee el valor del potenciometro para el verde
  int valorAzul = analogRead(potAzul);  // Lee el valor del potenciometro para el azul

  // Leer el valor del potenciómetro de intensidad
  int valorIntensidad = analogRead(potIntensidad);  // Lee el valor del potenciometro para la intensidad

  // Mapear los valores de 0-1023 a 0-255 para controlar la intensidad de cada color
  int intensidadRojo = map(valorRojo, 0, 1023, 0, 255);
  int intensidadVerde = map(valorVerde, 0, 1023, 0, 255);
  int intensidadAzul = map(valorAzul, 0, 1023, 0, 255);
  
  // Mapear el valor de intensidad global (del potenciómetro de intensidad)
  int intensidadFinal = map(valorIntensidad, 0, 1023, 0, 255);

  // Normalizar los valores de color para que no haya un color dominante
  int maxValor = max(intensidadRojo, max(intensidadVerde, intensidadAzul));

  // Si el máximo valor es menor que la intensidad, no se cambia nada
  if (maxValor > 0) {
    float factor = (float)maxValor / 255.0;
    intensidadRojo = (int)(intensidadRojo / factor);
    intensidadVerde = (int)(intensidadVerde / factor);
    intensidadAzul = (int)(intensidadAzul / factor);
  }

  // Aplicar la intensidad global a los colores
  intensidadRojo = (intensidadRojo * intensidadFinal) / 255;
  intensidadVerde = (intensidadVerde * intensidadFinal) / 255;
  intensidadAzul = (intensidadAzul * intensidadFinal) / 255;

  // Ajustar el color del LED según los valores de los potenciometros
  analogWrite(rojo, intensidadRojo);  // Cambiar la intensidad del color rojo
  analogWrite(verde, intensidadVerde);  // Cambiar la intensidad del color verde
  analogWrite(azul, intensidadAzul);  // Cambiar la intensidad del color azul

  delay(10);  // Pausa para estabilizar los valores
}
