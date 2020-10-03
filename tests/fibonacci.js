const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../src/app')
const { expect } = chai

chai.use(chaiHttp)

describe('Fibonacci API Tests Bad Requests', () => {
    it('GET /fibonacci should return an error message', (done) => {
        chai.request(server).get('/fibonacci').end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(400)
            expect(res.body).to.be.an('object')
            expect(res.body).to.deep.equal({error: 'No valid parameter and value provided!'})

            done(err)
        })
    })

    it('GET /fibonacci?v=2 should return an error message', (done) => {
        chai.request(server).get('/fibonacci').query({ v: 2 }).end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(400)
            expect(res.body).to.be.an('object')
            expect(res.body).to.deep.equal({error: 'No valid parameter and value provided!'})

            done(err)
        })
    })

    it('POST /fibonacci should return an error message', (done) => {
        chai.request(server).post('/fibonacci').end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(400)
            expect(res.body).to.be.an('object')
            expect(res.body).to.deep.equal({error: 'No valid parameter and value provided!'})

            done(err)
        })
    })

    it('POST /fibonacci?v=2 should return an error message', (done) => {
        chai.request(server).post('/fibonacci').send({ v: 2 }).end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(400)
            expect(res.body).to.be.an('object')
            expect(res.body).to.deep.equal({error: 'No valid parameter and value provided!'})

            done(err)
        })
    })

    it('GET /fibonacci?n=asdasd should return an error message', (done) => {
        chai.request(server).get('/fibonacci').query({ n: 'asdasd' }).end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(400)
            expect(res.body).to.be.an('object')
            expect(res.body).to.deep.equal({error: 'No valid parameter and value provided!'})

            done(err)
        })
    })

    it('POST /fibonacci?n=asdasd should return an error message', (done) => {
        chai.request(server).post('/fibonacci').send({ n: 'asdasd' }).end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(400)
            expect(res.body).to.be.an('object')
            expect(res.body).to.deep.equal({error: 'No valid parameter and value provided!'})

            done(err)
        })
    })
})

describe('Fibonacci API Tests Valid Requests', () => {
    it('GET /fibonacci?n=1 should return the proper table response', (done) => {
        chai.request(server).get('/fibonacci').query({ n: 1 }).end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
            expect(res.body).to.deep.equal([
                [null, 0],
                [0, 0]
            ])

            done(err)
        })
    })

    it('GET /fibonacci?n=2 should return the proper table response', (done) => {
        chai.request(server).get('/fibonacci').query({ n: 2 }).end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
            expect(res.body).to.deep.equal([
                [null, 0, 1],
                [0, 0, 0],
                [1, 0, 1]
            ])

            done(err)
        })
    })

    it('GET /fibonacci?n=3 should return the proper table response', (done) => {
        chai.request(server).get('/fibonacci').query({ n: 3 }).end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
            expect(res.body).to.deep.equal([
                [null, 0, 1, 1],
                [0, 0, 0, 0],
                [1, 0, 1, 1],
                [1, 0, 1, 1]
            ])

            done(err)
        })
    })

    it('GET /fibonacci?n=4 should return the proper table response', (done) => {
        chai.request(server).get('/fibonacci').query({ n: 4 }).end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
            expect(res.body).to.deep.equal([
                [null, 0, 1, 1, 2],
                [0, 0, 0, 0, 0],
                [1, 0, 1, 1, 2],
                [1, 0, 1, 1, 2],
                [2, 0, 2, 2, 4]
            ])

            done(err)
        })
    })

    it('GET /fibonacci?n=5 should return the proper table response', (done) => {
        chai.request(server).get('/fibonacci').query({ n: 5 }).end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
            expect(res.body).to.deep.equal([
                [null, 0, 1, 1, 2, 3],
                [0, 0, 0, 0, 0, 0],
                [1, 0, 1, 1, 2, 3],
                [1, 0, 1, 1, 2, 3],
                [2, 0, 2, 2, 4, 6],
                [3, 0, 3, 3, 6, 9]
            ])

            done(err)
        })
    })

    it('GET /fibonacci?n=8 should return the proper table response', (done) => {
        chai.request(server).get('/fibonacci').query({ n: 8 }).end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
            expect(res.body).to.deep.equal([
                [null, 0, 1, 1,2, 3, 5, 8, 13],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 1, 1, 2, 3, 5, 8, 13],
                [1, 0, 1, 1, 2, 3, 5, 8, 13],
                [2, 0, 2, 2, 4, 6, 10, 16, 26],
                [3, 0, 3, 3, 6, 9, 15, 24, 39],
                [5, 0, 5, 5, 10, 15, 25, 40, 65],
                [8, 0, 8,  8, 16, 24, 40, 64, 104],
                [13, 0, 13, 13, 26, 39, 65, 104, 169]
            ])

            done(err)
        })
    })

    it('POST /fibonacci?n=1 should return the proper table response', (done) => {
        chai.request(server).post('/fibonacci').send({ n: 1 }).end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
            expect(res.body).to.deep.equal([
                [null, 0],
                [0, 0]
            ])

            done(err)
        })
    })

    it('POST /fibonacci?n=2 should return the proper table response', (done) => {
        chai.request(server).post('/fibonacci').send({ n: 2 }).end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
            expect(res.body).to.deep.equal([
                [null, 0, 1],
                [0, 0, 0],
                [1, 0, 1]
            ])

            done(err)
        })
    })

    it('POST /fibonacci?n=3 should return the proper table response', (done) => {
        chai.request(server).post('/fibonacci').send({ n: 3 }).end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
            expect(res.body).to.deep.equal([
                [null, 0, 1, 1],
                [0, 0, 0, 0],
                [1, 0, 1, 1],
                [1, 0, 1, 1]
            ])

            done(err)
        })
    })

    it('POST /fibonacci?n=4 should return the proper table response', (done) => {
        chai.request(server).post('/fibonacci').send({ n: 4 }).end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
            expect(res.body).to.deep.equal([
                [null, 0, 1, 1, 2],
                [0, 0, 0, 0, 0],
                [1, 0, 1, 1, 2],
                [1, 0, 1, 1, 2],
                [2, 0, 2, 2, 4]
            ])

            done(err)
        })
    })

    it('POST /fibonacci?n=5 should return the proper table response', (done) => {
        chai.request(server).post('/fibonacci').send({ n: 5 }).end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
            expect(res.body).to.deep.equal([
                [null, 0, 1, 1, 2, 3],
                [0, 0, 0, 0, 0, 0],
                [1, 0, 1, 1, 2, 3],
                [1, 0, 1, 1, 2, 3],
                [2, 0, 2, 2, 4, 6],
                [3, 0, 3, 3, 6, 9]
            ])

            done(err)
        })
    })

    it('POST /fibonacci?n=8 should return the proper table response', (done) => {
        chai.request(server).post('/fibonacci').send({ n: 8 }).end((err, res) => {
            expect(res).to.be.json
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
            expect(res.body).to.deep.equal([
                [null, 0, 1, 1,2, 3, 5, 8, 13],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 1, 1, 2, 3, 5, 8, 13],
                [1, 0, 1, 1, 2, 3, 5, 8, 13],
                [2, 0, 2, 2, 4, 6, 10, 16, 26],
                [3, 0, 3, 3, 6, 9, 15, 24, 39],
                [5, 0, 5, 5, 10, 15, 25, 40, 65],
                [8, 0, 8,  8, 16, 24, 40, 64, 104],
                [13, 0, 13, 13, 26, 39, 65, 104, 169]
            ])

            done(err)
        })
    })
})
