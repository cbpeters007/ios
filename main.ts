input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (DI0 == 1) {
        led.plot(0, 0)
    } else {
        led.unplot(0, 0)
    }
    RESET()
})
function RESET () {
    DI0 = 0
    DI1 = 0
    AI0 = 0
}
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
})
let AI0 = 0
let DI1 = 0
let DI0 = 0
RESET()
basic.forever(function () {
    DI0 = pins.digitalReadPin(DigitalPin.P1)
    DI1 = pins.digitalReadPin(DigitalPin.P2)
    AI0 = pins.analogReadPin(AnalogPin.P0)
})
