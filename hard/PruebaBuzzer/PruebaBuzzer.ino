#define buzzerPin 9  
void setup() {
  pinMode(buzzerPin, OUTPUT); 
  Serial.begin(9600);          
}

void loop() {
  if (Serial.available() > 0) { 
    char comando = Serial.read(); 
    
    if (comando == '1') {
      tone(buzzerPin, 1000, 500); 
      Serial.println("Reproduciendo: 1");
    } 
    else if (comando == '0') {
      tone(buzzerPin, 500, 500); 
      Serial.println("Reproduciendo: 0");
    }
  }
}
