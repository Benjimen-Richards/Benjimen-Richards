let chai = require('chai')
let chai_http = require('chai-http')
let expect = chai.expect
chai.use(chai_http)

describe('testing rest api',()=>{
    it('should return 200 for users',(done)=>{
        chai.request(`http://localhost:1111`)
        .get('/users')
        .then(res=>{
            expect(res).to.have.status(200)
            done();
        })
        .catch((err)=>{
            throw err
        })
        
    })
    it('should return 200 for post',(done)=>{
        chai.request(`http://localhost:1111`)
        .post('/adduser')
        .send({
            "id": 31,
            "first_name": "annamani",
            "last_name": "weslel",
            "gender": "f",
            "phone_number": "123123",
            "email": "anna@gmail.com"
            },)
        .then(res=>{
            expect(res).to.have.status(200)
            done();
        })
        .catch((err)=>{
            throw err
        })
        
    })
})