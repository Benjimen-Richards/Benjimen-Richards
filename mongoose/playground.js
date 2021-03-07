const jsontoken = require("jsonwebtoken")
const jwt=async()=>
{
    let token=jsontoken.sign({id:"12345"},"secret",{expiresIn:'0 seconds'})
    console.log(token)
    let data = jsontoken.verify(token,"secret")
    console.log(data)

}
jwt()
