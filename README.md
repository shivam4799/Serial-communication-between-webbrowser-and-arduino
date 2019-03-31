# Serial-communication-between-webbrowser-and-arduino

Download the [P5.serialcontrol app](https://github.com/vanevery/p5.serialcontrol/releases) (which is a packaged application for running serial server on computer). When you run this program, it allows you to select the serial port for communication.

Extract above zip files and run the app p5.serialcontrol.exe and click on list port, and copy listed port of your arduino to ardunio - rgb-slider -> sketch.js insted of COM12 on line no. 2.


Make sure your arduino is connected with pc via usb and do not close p5.serialcontrol.exe.

upload uno.ino to your arduino.


Run index.html file in chrome browser/firefox and don't use edge because it's not suported by edge yet.
Change the values of sliders and ENJOY !!!!!
