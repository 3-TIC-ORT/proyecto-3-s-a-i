#define buttonPin 2
#define buttonPin2 8
#define buttonPin3 4
#define buzzerPin 11

// Pines para potenciómetros
#define pinPotBrillo A0  
#define pinPotTonoRojo A1
#define pinPotTonoVerde A2
#define pinPotTonoAzul A4

// Pines para LED RGB
#define rojo 6
#define azul 10
#define verde 9

int brilloMaximo = 255; // Intensidad máxima del LED
int buttonState = 0;
int buttonState2 = 0;
int buttonState3 = 0;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(buttonPin2, INPUT);
  pinMode(buttonPin3, INPUT);
  
  pinMode(buzzerPin, OUTPUT);
  pinMode(rojo, OUTPUT);
  pinMode(azul, OUTPUT);
  pinMode(verde, OUTPUT);
  
  Serial.begin(9600); // Solo para depuración, si deseas eliminarlo puedes hacerlo
}

void loop() {
  buttonState = digitalRead(buttonPin);
  buttonState2 = digitalRead(buttonPin2);
  buttonState3 = digitalRead(buttonPin3);

  // Leer valores de los potenciómetros
  int brillo = map(analogRead(pinPotBrillo), 0, 1023, 0, brilloMaximo);
  int tonoRojo = map(analogRead(pinPotTonoRojo), 0, 1023, 100, 1000); // Frecuencia del buzzer
  int tonoVerde = map(analogRead(pinPotTonoVerde), 0, 1023, 100, 1000); 
  int tonoAzul = map(analogRead(pinPotTonoAzul), 0, 1023, 100, 1000); 

  if (buttonState == HIGH) {
    // Activar sonido con tono del color Rojo
    tone(buzzerPin, tonoRojo);
    Serial.print("Tono Rojo: "); Serial.println(tonoRojo);

    if (buttonState2 == HIGH) {
      // Activar luz y ajustar colores
      analogWrite(rojo, brillo);
      analogWrite(verde, brillo);
      analogWrite(azul, brillo);
    } else {
      // Apagar luz
      analogWrite(rojo, 0);
      analogWrite(verde, 0);
      analogWrite(azul, 0);
    }

    if (buttonState3 == HIGH) {
      // Cambiar a tono del color Verde o Azul según estado
      tone(buzzerPin, tonoVerde);
      Serial.print("Tono Verde: "); Serial.println(tonoVerde);
    } else {
      tone(buzzerPin, tonoAzul);
      Serial.print("Tono Azul: "); Serial.println(tonoAzul);
    }
  } else {
    // Apagar buzzer y LEDs
    noTone(buzzerPin);
    analogWrite(rojo, 0);
    analogWrite(verde, 0);
    analogWrite(azul, 0);
  }

  delay(100); // Pequeña pausa para estabilidad
}
