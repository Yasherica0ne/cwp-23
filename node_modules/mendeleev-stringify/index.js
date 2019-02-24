const mendeleev = require('../mendeleev/index');

module.exports = (name) => {
    const element = mendeleev(name);
    const result = `${element.number}. ${element.name} / ${element.weight}`;
    return result;
}