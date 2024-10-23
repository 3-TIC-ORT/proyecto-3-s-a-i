int vOut; 
int pinPot = A0;
int pinLed = 10;
int luz;
int flag=false;
void setup()
{
    pinMode(pinLed, OUTPUT);
    pinMode(pinPot, INPUT);
    pinMode(2,INPUT);
  Serial.begin(9600);
}

void loop()
{
   String mesage1="b11";
   if(digitalRead(2)==0 && flag==false){
     Serial.println(mesage1);
     flag=true;
   }
   if(digitalRead(2)==1){
   flag=false; 
   }
   int valPot = analogRead(pinPot);
   String str="p1";
   String mesage=str + valPot;
   Serial.println(mesage);
   //luz = map(valPot,0,1023,0,255);
   //analogWrite(pinLed,luz); 
   //delay(300);
}
