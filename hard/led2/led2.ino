#define RED_PIN 9   // Pin PWM para el LED rojo
#define GREEN_PIN 10 // Pin PWM para el LED verde
#define BLUE_PIN 11  // Pin PWM para el LED azul

void setup() {
  Serial.begin(9600); // Iniciar comunicación serial a 9600 bps

  pinMode(RED_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);
  pinMode(BLUE_PIN, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    // Leer el mensaje del backend en formato "red,green,blue"
    String data = Serial.readStringUntil('\n');
    int redValue = 0, greenValue = 0, blueValue = 0;

    // Dividir el mensaje en los valores correspondientes
    sscanf(data.c_str(), "%d,%d,%d", &redValue, &greenValue, &blueValue);

    // Configurar los valores PWM para los pines del LED RGB
    analogWrite(RED_PIN, redValue);
    analogWrite(GREEN_PIN, greenValue);
    analogWrite(BLUE_PIN, blueValue);
  }
}
