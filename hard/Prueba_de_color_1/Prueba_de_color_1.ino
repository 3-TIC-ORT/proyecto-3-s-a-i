#define rojo 6
#define verde 9
#define azul 10

int brillo = 255; // Intensidad constante del LED (0 a 255)

void setup() {
  pinMode(rojo, OUTPUT);
  pinMode(verde, OUTPUT);
  pinMode(azul, OUTPUT);
}

void loop() {
  for (int hue = 0; hue < 360; hue += 1) { // Recorrer todos los tonos
    setColorHSV(hue, 255, brillo); // Saturación y brillo de 0 a 255
    delay(20); // Pausa entre cambios de color
  }
}

// Función para establecer el color basado en HSV
void setColorHSV(int hue, int sat, int val) {
  int r, g, b;

  int i = hue / 60; // Segmento (0-5)
  int f = hue % 60; // Fracción dentro del segmento (0-59)
  int p = (val * (255 - sat)) / 255;
  int q = (val * (255 - (sat * f) / 60)) / 255;
  int t = (val * (255 - (sat * (60 - f)) / 60)) / 255;

  switch (i % 6) {
    case 0: r = val; g = t; b = p; break;
    case 1: r = q; g = val; b = p; break;
    case 2: r = p; g = val; b = t; break;
    case 3: r = p; g = q; b = val; break;
    case 4: r = t; g = p; b = val; break;
    case 5: r = val; g = p; b = q; break;
  }

  // Escribir los valores RGB en los pines
  analogWrite(rojo, r);
  analogWrite(verde, g);
  analogWrite(azul, b);
}
