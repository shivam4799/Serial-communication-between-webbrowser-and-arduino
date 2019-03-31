

void setup() {
 Serial.begin(9600); // initialize serial communications
  Serial.setTimeout(10);
  pinMode(9,OUTPUT);
  pinMode(10,OUTPUT);
  pinMode(11,OUTPUT);

}
 
void loop() {

if(Serial.available()>0){
 String s = Serial.readString();
  int r = s.substring(0,3).toInt();
  int g = s.substring(3,6).toInt();
  int b = s.substring(6,9).toInt();

  analogWrite(9,r);
  analogWrite(10,g);
  analogWrite(11,b);
}
 delay(10);
 
  

                                            // slight delay for fast execution
}
