int vOut; 
#define pinPot A3
#define verde 10
#define pinPot2 A0
#define rojo 6
#define azul 3
#define pinLed2 5
#define pinButton 12
#define pinButton2 8
int valPot;
int luz;
int valPot2;
int luz2;
int buttonState;
int buttonState2;
void setup()
{
    pinMode(rojo, OUTPUT);
        pinMode(azul, OUTPUT);
            pinMode(verde, OUTPUT);
    pinMode(pinPot, INPUT);
     pinMode(pinLed2, OUTPUT);
    pinMode(pinPot2, INPUT);
    pinMode(pinButton, INPUT);
    pinMode(valPot2, INPUT);
    pinMode(pinButton2, INPUT);
  Serial.begin(9600);
} 

void loop()
{
   valPot = analogRead(pinPot);
   buttonState =(digitalRead(pinButton));
   buttonState2 =(digitalRead(pinButton2));
  
  delay(300);  
   
   luz = map(valPot,0,1023,0,255);
 Serial.println("tu luz es:");
   Serial.println(valPot);
   delay(300);
    if (buttonState2 ==HIGH){
   if (buttonState == HIGH) {
       
       analogWrite(rojo, luz);
       analogWrite(verde, luz);
       analogWrite(azul, luz);
       Serial.println("LEDs encendidos.");
   } else {
      
       digitalWrite(rojo, LOW);
       digitalWrite(verde, LOW);
       digitalWrite(azul, LOW);
       Serial.println("LEDs apagados");
   }
   }else{
    digitalWrite(rojo, LOW);
       digitalWrite(verde, LOW);
       digitalWrite(azul, LOW);
       Serial.println("LEDs apagados");
   }
   }
  /* valPot2 = analogRead(pinPot2);
   
   Serial.println("el sonido es:");
   Serial.println(valPot2);
   
   luz2 = map(valPot2,0,1023,0,255);
   
   if(buttonState == HIGH){
   analogWrite(pinLed2,luz2);
   } 
   else{
    Serial.println("el sonido no prende");
   delay(300);}
}
*/
