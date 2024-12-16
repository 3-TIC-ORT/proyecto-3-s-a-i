#include <Adafruit_NeoPixel.h>

// Configuración de la tira LED
#define PIXEL_PIN 6         // Pin de la tira LED
#define PIXEL_COUNT 8       // Número de LEDs en la tira
Adafruit_NeoPixel leds = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);

// Configuración de pines de sensores, pulsadores y LED indicador
#define SENSOR_A1 2         // Sensor digital
#define POT_1 A0            // Potenciómetro 1
#define POT_2 A1            // Potenciómetro 2
#define POT_3 A2            // Potenciómetro 3
#define B1_PIN 3            // Pulsador B1
#define B2_PIN 4            // Pulsador B2
#define B3_PIN 5            // Pulsador B3
#define BUTTON_PIN 10        // Pulsador de cambio de modo
#define LED_PIN 11          // LED indicador

// Variables de control
int currentMode = 0;        // Modo actual: 0 = Parpadeo, 1 = Arcoiris, 2 = Respiración, 3 = Desplazamiento
bool lastButtonState = HIGH; // Estado anterior del pulsador
unsigned long debounceTime = 0;
const unsigned long debounceDelay = 50; // Tiempo para evitar rebotes

// Variables RGB y sensores
int redValue = 255, greenValue = 0, blueValue = 0; // Valores RGB iniciales
unsigned long lastSensorTime = 0;                 // Para controlar el envío de datos de sensores
const unsigned long sensorInterval = 500;         // Intervalo de envío (500 ms)

void setup() {
  // Configurar pines
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  pinMode(B1_PIN, INPUT_PULLUP);
  pinMode(B2_PIN, INPUT_PULLUP);
  pinMode(B3_PIN, INPUT_PULLUP);
  pinMode(LED_PIN, OUTPUT);
  pinMode(SENSOR_A1, INPUT);

  // Inicializar la tira LED
  leds.begin();
  leds.show();

  // Iniciar la comunicación serial
  Serial.begin(9600);
}

void loop() {
  // 1. Leer y enviar valores de sensores y pulsadores
  if (millis() - lastSensorTime > sensorInterval) {
    lastSensorTime = millis();

    int sensorA1 = digitalRead(SENSOR_A1);
    int pot1 = analogRead(POT_1) / 4;  // Convertir a rango 0-255
    int pot2 = analogRead(POT_2) / 4;
    int pot3 = analogRead(POT_3) / 4;
    int b1State = !digitalRead(B1_PIN);
    int b2State = !digitalRead(B2_PIN);
    int b3State = !digitalRead(B3_PIN);

    // Enviar valores al puerto serie
    Serial.print("A1:"); Serial.println(sensorA1);
    Serial.print("P1:"); Serial.println(pot1);
    Serial.print("P2:"); Serial.println(pot2);
    Serial.print("P3:"); Serial.println(pot3);
    Serial.print("B1:"); Serial.println(b1State);
    Serial.print("B2:"); Serial.println(b2State);
    Serial.print("B3:"); Serial.println(b3State);
  }

  // 2. Leer y procesar comandos del puerto serie
  if (Serial.available() > 0) {
    String command = Serial.readStringUntil('\n'); // Leer el comando completo
    command.trim();

    if (isRGBCommand(command)) {
      sscanf(command.c_str(), "%d,%d,%d", &redValue, &greenValue, &blueValue);
      setLEDColor(redValue, greenValue, blueValue);
      toggleIndicatorLED();
      Serial.println("Color RGB actualizado");
    } else if (command == "Parpadeo") {
      currentMode = 0;
    } else if (command == "Arcoiris") {
      currentMode = 1;
    } else if (command == "Respiracion") {
      currentMode = 2;
    } else if (command == "Desplazamiento") {
      currentMode = 3;
    }

    toggleIndicatorLED();
    Serial.print("Modo cambiado por Serial a: ");
    Serial.println(currentMode);
  }

  // 3. Manejar pulsador para cambiar de modo
  bool buttonState = digitalRead(BUTTON_PIN);
  if (buttonState == LOW && lastButtonState == HIGH && (millis() - debounceTime) > debounceDelay) {
    debounceTime = millis();
    currentMode = (currentMode + 1) % 4; // Ciclo entre los 4 modos
    toggleIndicatorLED();
    Serial.print("Modo cambiado por Pulsador a: ");
    Serial.println(currentMode);
  }
  lastButtonState = buttonState;
  
  //
  
  
  

  // 4. Ejecutar el modo actual
  switch (currentMode) {
    case 0: modoParpadeo(); break;
    case 1: modoArcoiris(); break;
    case 2: modoRespiracion(); break;
    case 3: modoDesplazamiento(); break;
  }
}

// Función auxiliar para validar comandos RGB
bool isRGBCommand(String command) {
  return command.indexOf(',') > 0; // Verifica si contiene comas
}

// Función para cambiar el estado del LED indicador
void toggleIndicatorLED() {
 digitalWrite(LED_PIN, HIGH); // Encender LED
  delay(200);                 // Esperar 200 ms
  digitalWrite(LED_PIN, LOW);  // Apagar LED
}

// Función para establecer el color de la tira LED
void setLEDColor(int r, int g, int b) {
  for (int i = 0; i < PIXEL_COUNT; i++) {
    leds.setPixelColor(i, leds.Color(r, g, b));
  }
  leds.show();
}

// Modos de iluminación
void modoParpadeo() {
  setLEDColor(redValue, greenValue, blueValue);
  delay(500);
  setLEDColor(0, 0, 0);
  delay(500);
}

void modoArcoiris() {
  for (int j = 0; j < 256; j++) {
    for (int i = 0; i < PIXEL_COUNT; i++) {
      leds.setPixelColor(i, Wheel((i + j) & 255));
    }
    leds.show();
    delay(20);
  }
}

void modoRespiracion() {
  for (int i = 0; i <= 255; i += 5) {
    setLEDColor((redValue * i) / 255, (greenValue * i) / 255, (blueValue * i) / 255);
    delay(15);
  }
  for (int i = 255; i >= 0; i -= 5) {
    setLEDColor((redValue * i) / 255, (greenValue * i) / 255, (blueValue * i) / 255);
    delay(15);
  }
}

void modoDesplazamiento() {
  for (int i = 0; i < PIXEL_COUNT; i++) {
    leds.clear();
    leds.setPixelColor(i, leds.Color(redValue, greenValue, blueValue));
    leds.show();
    delay(100);
  }
}

// Función auxiliar para Arcoiris
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if (WheelPos < 85) return leds.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  if (WheelPos < 170) return leds.Color(0, (WheelPos - 85) * 3, 255 - (WheelPos - 85) * 3);
  return leds.Color((WheelPos - 170) * 3, 255 - (WheelPos - 170) * 3, 0);
}
