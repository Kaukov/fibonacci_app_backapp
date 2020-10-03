const SequelizeMock = require('sequelize-mock')
const { expect } = require('chai')

const dbMock = new SequelizeMock()

const Fibonacci = dbMock.define('fibonacci', {
    num: 3,
    table: '[[null, 0, 1, 1],[0, 0, 0, 0],[1, 0, 1, 1],[1, 0, 1, 1]]'
}, {
    freezeTableName: true,
    timestamps: false
})

describe('Sequelize Mocking', () => {
    it('Gets 1 fibonacci', (done) => {
        Fibonacci.findOne({ num: 3 })
            .then((fib) => {
                expect(fib).not.to.be.undefined
                expect(fib.get('num')).to.be.a('number')
                expect(fib.get('table')).to.be.a('string')
                expect(fib.get('table')).to.equal('[[null, 0, 1, 1],[0, 0, 0, 0],[1, 0, 1, 1],[1, 0, 1, 1]]')

                done()
            }).catch((err) => {
                done(err)
            })
    })
})
