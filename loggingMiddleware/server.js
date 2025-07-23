const { error } = require("console");

function logs(stack,level,package,message){
    if(error=log("backend","error","handler","received string","expected bool")){
        throw "expected bool";
    }
    if(error=log("backend ","fatal","db","Critical database connection failure"))
    {
        throw "Critical database connection failure";
    }
}
module.exports=logs;
