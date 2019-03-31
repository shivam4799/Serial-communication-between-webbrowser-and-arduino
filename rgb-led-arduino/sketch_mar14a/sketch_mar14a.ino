#include <Esplora.h>

void setup() {
 Serial.begin(9600); // initialize serial communications
  Serial.setTimeout(10);

}
 
void loop() {

if(Serial.available()>0){
 String s = Serial.readString();
  int r = s.substring(0,3).toInt();
  int g = s.substring(3,6).toInt();
  int b = s.substring(6,9).toInt();
 Esplora.writeRGB(r,g,b);
}
 delay(10);
 
  

                                            // slight delay to stabilize the ADC
}
