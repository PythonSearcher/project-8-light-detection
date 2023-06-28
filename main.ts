serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("Light intensity", input.lightLevel())
    if (input.lightLevel() < 20) {
        basic.showLeds(`
            . . # # .
            . # # . .
            . # # . .
            . # # . .
            . . # # .
            `)
    } else {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
})
