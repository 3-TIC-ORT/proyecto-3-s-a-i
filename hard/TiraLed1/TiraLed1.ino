#include <Adafruit_NeoPixel.h>

#define PIN 9  // Pin donde está conectada la tira LED
#define NUM_LEDS 81  // Número de LEDs en la tira
#define BRIGHTNESS 255  // Brillo máximo

Adafruit_NeoPixel strip = Adafruit_NeoPixel(NUM_LEDS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  strip.begin();  // Inicializa la tira LED
  strip.show();   // Asegura que los LEDs estén apagados al principio
  strip.setBrightness(BRIGHTNESS);  // Ajusta el brillo
}

void loop() {
  // Enciende todos los LEDs con color rojo
  for(int i = 0; i < NUM_LEDS; i++) {
    strip.setPixelColor(i, strip.Color(255, 0, 0));  // Establece un color rojo
  }
  strip.show();  // Muestra los cambios
  delay(500);  // Espera medio segundo
  // Apaga todos los LEDs
  for(int i = 0; i < NUM_LEDS; i++) {
    strip.setPixelColor(i, strip.Color(0, 0, 0));  // Apaga los LEDs
  }
  strip.show();  // Muestra los cambios
  delay(500);  // Espera medio segundo
}
