const axios = require('axios');

async function getName() {
    res = await axios({
        'method': 'GET',
        'url': 'https://www.mocklib.com/mock/random/name'
    })
    return res.data.name
}

const p = document.body.appendChild('p')
p.innerText = getName()