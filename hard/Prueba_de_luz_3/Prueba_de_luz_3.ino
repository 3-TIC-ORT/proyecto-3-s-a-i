#define rojo 9
#define verde 6
#define azul 10
#define pinPotrojo A5
#define pinPotazul A1
#define pinPotverde A2
#define pinPotgeneral A0

int valPotrojo;
int valPotazul;
int valPotverde;
int valPotGen;

int brilloVerde;
int brilloAzul;
int brilloRojo;
int brilloGen;

void setup() {
  pinMode(rojo, OUTPUT);
  pinMode(verde, OUTPUT);
  pinMode(azul, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // Leer los valores de los potenciometros
  valPotrojo = analogRead(pinPotrojo);
  valPotverde = analogRead(pinPotverde);
  valPotazul = analogRead(pinPotazul);
  valPotGen = analogRead(pinPotgeneral);

  Serial.print("Rojo: "); Serial.print(valPotrojo);
  Serial.print(" Verde: "); Serial.print(valPotverde);
  Serial.print(" Azul: "); Serial.print(valPotazul);
  Serial.print(" General: "); Serial.println(valPotGen);


  // Mapear valores de potenciometros a rango 0-255
  brilloRojo = map(valPotrojo, 0, 1023, 0, 255);
  brilloVerde = map(valPotverde, 0, 1023, 0, 255);
  brilloAzul = map(valPotazul, 0, 1023, 0, 255);
  brilloGen = map(valPotGen, 0, 1023, 0, 255);

  // Ajustar la intensidad de cada color según el brillo general
  brilloRojo = (brilloRojo * brilloGen) / 255;
  brilloVerde = (brilloVerde * brilloGen) / 255;
  brilloAzul = (brilloAzul * brilloGen) / 255;

  // Enviar valores ajustados a los LEDs
  analogWrite(rojo, brilloRojo);
  analogWrite(verde, brilloVerde);
  analogWrite(azul, brilloAzul);
}
