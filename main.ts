basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= i; j++) {
            led.plot(4 - i + j, j)
            basic.pause(100)
        }
    }
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= i; j++) {
            led.plot(i, j + 1)
            basic.pause(30)
        }
    }
    for (let i = 0; i <= 3; i++) {
        let index = 0
        for (let j = 0; j <= index; j++) {
            led.plot(i, j + 2)
            basic.pause(30)
        }
    }
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= i; j++) {
            led.plot(i, j + 3)
            basic.pause(20)
        }
    }
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= i; j++) {
            led.plot(i, j + 4)
            basic.pause(20)
        }
    }
    basic.clearScreen()
})
