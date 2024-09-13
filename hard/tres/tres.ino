// C++ code
//
int pinAnalogico = A0;
  int v2; 
void setup()
{
 pinMode (pinAnalogico, INPUT);
   Serial.begin(9600);
}

void loop()
{
  v2 = analogRead(pinAnalogico);
  Serial.println(v2);
}
