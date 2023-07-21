input.onGesture(Gesture.Shake, function () {
    Kitronik_Move_Motor.stop()
    moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
})
let distance = 0
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
basic.showString("Hello!")
basic.clearScreen()
basic.showIcon(IconNames.Heart)
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
moveMotorZIP.showRainbow(1, 360)
basic.forever(function () {
    distance = Kitronik_Move_Motor.measure()
    if (distance > 10) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (distance <= 10) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 100)
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # . # .
            . # . # .
            . . # . .
            `)
        Kitronik_Move_Motor.stop()
    }
})
