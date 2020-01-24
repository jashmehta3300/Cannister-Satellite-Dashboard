

void setup(){
  Serial.begin(9600);
  randomSeed(analogRead(0));
}

void loop(){

  double randNumber1 = random(0,200);

  double randNumber2 = random(10,20);

  double randNumber3 = random(50,150);

  double randNumber4 = random(50,80);


  Serial.println(String(randNumber1) + "," + String(randNumber2) + "," + String(randNumber3) + "," + String(randNumber4));

  delay(1000);
}
