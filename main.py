serial.redirect_to_usb()

def on_forever():
    serial.write_value("Light intensity", input.light_level())
    if input.light_level() < 20:
        basic.show_leds("""
            . . # # .
            . # # . .
            . # # . .
            . # # . .
            . . # # .
            """)
    else:
        pass
basic.forever(on_forever)
