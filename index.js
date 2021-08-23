const _ = require('lodash')

function fetchGracePeriodLogicFromMapping (cardId, mapping = '') {
    let res = null;
    const types = {};

    mapping.split(';').reverse().forEach((str) => {
        const tmp = str.split(':');
        if(tmp[0]) {
            //если элемент определен, записываем в объект пару, где ключ - логическое имя,
            //а значение - массив id для этого имени из входных данных
            types[tmp[0].trim()] = tmp[1].split(',');
        };
        
    });
    
    for(let type in types) {
        types[type].forEach((elem) => {
            if(elem.trim() === cardId && !res) {
                res = type;
            }
        });
    }
    
    return res;
}

module.exports = fetchGracePeriodLogicFromMapping
