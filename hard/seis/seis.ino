// C++ code
//
void setup()
{
  pinMode(A0, INPUT);
  pinMode(5, OUTPUT);
}

void loop()
{
  analogWrite(5, constrain(analogRead(A0), 0, 255));
  delay(10); // Delay a little bit to improve simulation performance
}
