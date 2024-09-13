// C++ code
//
int led = 9;
int brillo = 85;
void setup()
{
 pinMode(led, OUTPUT);
}

void loop()
{
  analogWrite(led, brillo);
}
