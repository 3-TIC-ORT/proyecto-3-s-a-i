int vOut; 
#define pinPot A3
#define pinLed 10
#define pinPot2 A0
#define pinLed2 5
int valPot;
int luz;
int valPot2;
int luz2;
void setup()
{
    pinMode(pinLed, OUTPUT);
    pinMode(pinPot, INPUT);
     pinMode(pinLed2, OUTPUT);
    pinMode(pinPot2, INPUT);
  Serial.begin(9600);
}

void loop()
{
   valPot = analogRead(pinPot);
   Serial.println("tu luz es:");
   Serial.println(valPot);
   luz = map(valPot,0,1023,0,255);
   analogWrite(pinLed,luz); 
   delay(300); 
   valPot2 = analogRead(pinPot2);
   Serial.println("el sonido es:");
   Serial.println(valPot2);
   luz2 = map(valPot2,0,1023,0,255);
   analogWrite(pinLed2,luz2); 
   delay(300);
}
