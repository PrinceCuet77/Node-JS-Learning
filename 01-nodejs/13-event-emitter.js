const EventEmiter = require('events')

const customEmitter = new EventEmiter()

// 'on' method: listen for an event
// 1st parameter - name of the event (string)
// 2nd parameter - callback (when the event is taken place (call or match the string using 'emit' method), then called the callback)
customEmitter.on('request', (name, id) => {
    console.log(`Data received user ${name} with id: ${id}`)
})

// 1. I can use multiple event with the same event name
customEmitter.on('request', () => {
    console.log('Data received 2.')
})

// 2. Order matters - first use all the 'on' method(s) which are the same type of events to create an event(s) & then use 'emit' method to call that event. Otherwise program will not work properly.
// 3. I can pass arguments while using 'emit' method and receive that argument using 'on' method.

// 'emit' method: emit an event
// 1st parameter - call the event (string) - must match with the existing one.
customEmitter.emit('request', 'john', 34)

// Output:
// Data received user john with id: 34
// Data received 2.
