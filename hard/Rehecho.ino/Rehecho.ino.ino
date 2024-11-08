#define pinPot A3
#define rojo 10
#define verde 6 
#define azul 3
#define pinButton 13
int valPot;
int buttonState;
int luz;

void setup() {
  // put your setup code here, to run once:
 pinMode(rojo, OUTPUT);
  pinMode(azul, OUTPUT);
   pinMode(verde, OUTPUT);
    pinMode(pinButton, INPUT);
    pinMode(pinPot, INPUT);
    Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
 valPot = (analogRead(pinPot));
 luz = map (valPot,0, 1023, 0, 255);
 buttonState = (digitalRead(pinButton));
 if (buttonState == HIGH){
 analogWrite(rojo, luz);
  analogWrite(azul, luz);
   analogWrite(verde, luz);
   Serial.println(buttonState);
 }
   else{
    digitalWrite(rojo,LOW);
    digitalWrite(azul, LOW);
    digitalWrite(verde, LOW);
   Serial.println(buttonState);
    }
 }
 
