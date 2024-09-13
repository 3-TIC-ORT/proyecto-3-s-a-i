int vOut; 
int pinPot = A0;
int pinLed = 10;
int valPot;
int luz;
void setup()
{
    pinMode(pinLed, OUTPUT);
    pinMode(pinPot, INPUT);
  Serial.begin(9600);
}

void loop()
{
   valPot = analogRead(pinPot);
   Serial.println(valPot);
   luz = map(valPot,0,1023,0,255);
   analogWrite(pinLed,luz); 
   delay(300);
}
