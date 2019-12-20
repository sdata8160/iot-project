#include <CayenneMQTTESP8266.h>
#define CAYENNE_DEBUG
#define CAYENNE_PRINT Serial

int currentSensorPin = A0;
int relayPin = D1;

float current = 0.0;

float power = 0.0;

int currentValue = 0;

char ssid[] = "PGDCSL";
char password[] = "pgdcsl19";

char username[] = "b4e0e370-22df-11ea-b73d-1be39589c6b2";
char mqtt_password[] = "54abd5b4dd46b08878c46437591240d0f010ef0b";
char client_id[] = "d4063750-22df-11ea-ba7c-716e7f5ba423";

void setup() {
  Serial.begin(115200);
  Cayenne.begin(username, mqtt_password, client_id, ssid, password);
  pinMode(currentSensorPin,INPUT);
  pinMode(relayPin,OUTPUT);
  digitalWrite(relayPin,HIGH);

  currentValue = analogRead(currentSensorPin);

  current = (((currentValue/1024.0)*5000) - 2000)/660;
    
  Serial.println("Current Value: ");
  Serial.println(current);
  power = 84.7 * current;
  Serial.println("power: ");
  Serial.println(power);
}

void loop() {
 Cayenne.loop();
 Cayenne.virtualWrite(1, current);
 Cayenne.virtualWrite(2, power);
}

CAYENNE_IN(0)
{
  digitalWrite(relayPin, getValue.asInt());
}
