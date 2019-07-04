const fs = require('fs')
const path = require('path')

const readStream = fs.createReadStream(path.resolve(__dirname, 'test.txt'), {autoClose: true});

// readStream.close();

readStream.on('close', () => {
    console.log('close');
})

setTimeout(() => {
    console.log('时间到')
}, 2000)

