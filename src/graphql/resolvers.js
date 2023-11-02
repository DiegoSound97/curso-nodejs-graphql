const {getProduct,getProducts,addProduct,updateProduct,deleteProduct,getProductsByCategory}=require('./productresolvers');
const {login}=require('./auth.resolvers');
const {addCategory, getCategory}=require('./category.resolvers');
const {RegularExpression}=require('graphql-scalars');
const { Category } = require('../db/models/category.model');

const CategoryNameType= new RegularExpression('CategoryNameType',/^[a-zA-Z0-9]{3,8}$/)

const resolvers ={
    Query: {
        hello: ()=> "Hola Mundo",
        getPerson:(_, args)=>`Hello, my name es ${args.name}, I'm ${args.age} years old`,
        getInt: (_,args)=>args.age,
        getFloat: (_,args)=>args.price,
        getString: ()=>"Palabra",
        getBoolean: ()=>true,
        getID: ()=>"121212",
        getNumbers: (_,args)=> args.numbers,
        //Products  
        product: getProduct,
        products:getProducts,
        category: getCategory

    },
    Mutation:{
        login,
        addProduct,
        updateProduct,
        deleteProduct,
        addCategory
    },
    CategoryNameType,
    Category:{
        products: getProductsByCategory
    }
}

module.exports= resolvers;