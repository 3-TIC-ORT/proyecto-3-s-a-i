#define RED_PIN 9   // Pin PWM para el LED rojo
#define GREEN_PIN 10 // Pin PWM para el LED verde
#define BLUE_PIN 11  // Pin PWM para el LED azul

#define POT_RED A0   // Pin analógico para el potenciómetro del color rojo
#define POT_GREEN A1 // Pin analógico para el potenciómetro del color verde
#define POT_BLUE A2  // Pin analógico para el potenciómetro del color azul

void setup() {
  Serial.begin(9600); // Iniciar comunicación serial a 9600 bps

  pinMode(RED_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);
  pinMode(BLUE_PIN, OUTPUT);
}

void loop() {
  // Leer valores de los potenciómetros
  int redValue = analogRead(POT_RED);   // Valor entre 0 y 1023
  int greenValue = analogRead(POT_GREEN); // Valor entre 0 y 1023
  int blueValue = analogRead(POT_BLUE);  // Valor entre 0 y 1023

  // Mapear valores a rango PWM (0 a 255)
  int redPWM = map(redValue, 0, 1023, 0, 255);
  int greenPWM = map(greenValue, 0, 1023, 0, 255);
  int bluePWM = map(blueValue, 0, 1023, 0, 255);

  // Enviar valores al backend en formato "red,green,blue\n"
  Serial.print(redPWM);
  Serial.print(",");
  Serial.print(greenPWM);
  Serial.print(",");
  Serial.println(bluePWM);

  // Configurar los valores PWM para los pines del LED RGB
  analogWrite(RED_PIN, redPWM);
  analogWrite(GREEN_PIN, greenPWM);
  analogWrite(BLUE_PIN, bluePWM);

  delay(100); // Pequeña pausa para estabilizar la comunicación
}
