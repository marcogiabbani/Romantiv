

module.exports = (sequlize, type) => {
    return sequlize.define('sentence', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        message: type.STRING
    })
}