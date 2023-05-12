function stop () {
    Kitronik_Robotics_Board.allOff()
    Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor3)
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("f")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("s")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "f") {
    	
    }
    if (receivedString == "b") {
    	
    }
    if (receivedString == "s") {
        basic.clearScreen()
        basic.showNumber(LDR)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("b")
})
function move (speed: number) {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, speed)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Reverse, speed)
}
let LDR = 0
let chan = 9
radio.setGroup(chan)
Kitronik_Robotics_Board.allOff()
pins.digitalWritePin(DigitalPin.P0, 1)
basic.forever(function () {
    LDR = pins.analogReadPin(AnalogPin.P3)
    if (LDR >= 190) {
        basic.showString("y")
        basic.clearScreen()
    }
    if (LDR <= 190) {
        basic.showString("n")
        basic.clearScreen()
    }
})
