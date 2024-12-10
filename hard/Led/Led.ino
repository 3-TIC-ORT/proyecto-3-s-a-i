#define LED 9

void setup() {
  pinMode(LED, OUTPUT);
  digitalWrite(LED, LOW);
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    char comando = Serial.read();
    Serial.print("Comando recibido: ");
    Serial.println(comando);

    if (comando == '1') {
      digitalWrite(LED, HIGH);
    } else if (comando == '0') {
      digitalWrite(LED, LOW);
    }
  }
}
