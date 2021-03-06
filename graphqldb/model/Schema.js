const axios = require("axios");
const graphql = require("graphql");

const {
    GraphQLFloat,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graphql

const Moviestype = new GraphQLObjectType({
    name:'Movies',
    fields:{
        id: {type:GraphQLString},
        name:  {type:GraphQLString},
        genere:  {type:GraphQLString},
        imageurl:  {type:GraphQLString}        
    }  
})

const Root = new GraphQLObjectType({
    name:'RootqueryType',
    fields:{
        Movies:{
            type:Moviestype,
            args:{id:{type:GraphQLInt}},
            resolve(parentvalue,args){
                return axios.get(`http://localhost:3000/movies/${args.id}`).then(res=>res.data)
            }
        }
    }
})
module.exports=new GraphQLSchema({
    query:Root
})