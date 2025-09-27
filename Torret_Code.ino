void setup() {
  Serial.begin(9600);
  pinMode(3, OUTPUT);
}

void loop() {
  if (Serial.available()) {
    String cmd = Serial.readStringUntil('\n');
    cmd.trim();

    if (cmd == "MOVE_UP") {
      Serial.println("Arriba");
    } else if (cmd == "MOVE_DOWN") {
      Serial.println("Abajo");
    } else if (cmd == "MOVE_LEFT") {
      Serial.println("Izquierda");
    } else if (cmd == "MOVE_RIGHT") {
      Serial.println("Derecha");
    } else if (cmd == "FIRE") {
      Serial.println("Disparo");
      digitalWrite(3, HIGH);
      delay(200);
      digitalWrite(3, LOW);
    }
  }
}
