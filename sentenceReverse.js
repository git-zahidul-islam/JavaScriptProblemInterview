// const sentence = 'JavaScript and Zahid will Make a It firm'

const sentence = 'Harsh bhai kaise ho'

const revText = sentence.split(' ')

const nowRevText = revText.map((rev) => {
    const single = rev;
    const singleRev = single.split('').reverse().join('')
    return singleRev
})
console.log(nowRevText.join(' '));