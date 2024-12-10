#define buttonPin 2
#define buttonPin2 8
#define buttonPin3 4
#define buzzerPin 11
# define pinPot A0  
#define pinPot2 A3
#define pinPot3 A5
#define rojo 6
#define azul 10
#define verde 9
int valPot;
int sonido;
int luz;
int valPot2; 
int valPot3;
int buttonState = 0;
int buttonState2 = 0;
int buttonState3 = 0;
int tono;
int brilloMaximo = 255;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(pinPot, INPUT);
  pinMode(pinPot2, INPUT);
  pinMode(buzzerPin, OUTPUT);
  pinMode(rojo, OUTPUT);
  pinMode(azul, OUTPUT);
  pinMode(verde, OUTPUT);
  pinMode(buttonPin2, INPUT);
  pinMode(buttonPin3, INPUT);
  Serial.begin(9600);
}

void loop() {
  buttonState = digitalRead(buttonPin);
  buttonState2 = digitalRead(buttonPin2);
  buttonState3 = digitalRead(buttonPin3);
  Serial.println("boton1:");
  Serial.print(buttonState);
  Serial.println("boton2:");
  Serial.print(buttonState2);
  Serial.println("boton3:");
  Serial.print(buttonState3);
  int colorRojoBase = 255;
  int colorAzulBase = 220;
  int colorVerdeBase = 240;
  valPot = analogRead(pinPot);
  valPot2 = analogRead(pinPot2);
  luz = map(valPot2, 0, 1023, 0, brilloMaximo);
  sonido = map(valPot, 0, 1023, 0, 255); 
  tono = map(valPot, 0, 1023, 0, 255);
  Serial.println("el sonido esta en:");
  Serial.print(valPot);
  Serial.println("la luz esta en:");
  Serial.print(valPot2);
  delay(100);
  int valorRojo = (colorRojoBase * luz) / brilloMaximo;
    int valorVerde = (colorVerdeBase * luz) / brilloMaximo;
    int valorAzul = (colorAzulBase * luz) / brilloMaximo;
  if (buttonState == HIGH ){
    if(buttonState2 == HIGH){
    analogWrite(buzzerPin, sonido);
    tone(buzzerPin, tono);
    Serial.println("sonido encendido");
    }
    else{
      analogWrite(buzzerPin, 0);
      noTone(buzzerPin);
      }
    if(buttonState3 == HIGH){
      analogWrite(rojo, luz);
        analogWrite(verde, luz);
          analogWrite(azul, luz);
      Serial.println("luz encendida");
      }else{
      analogWrite(rojo, 0);
        analogWrite(verde, 0);
          analogWrite(azul, 0);
      }
      }
    else{
      analogWrite(buzzerPin, LOW);
      analogWrite(rojo, LOW);
analogWrite(azul, LOW);
      analogWrite(verde, LOW);
      Serial.println("todo apagado");
      }
}
