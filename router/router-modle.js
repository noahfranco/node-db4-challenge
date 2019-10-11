const db = require("../data/db-config.js"); 

// import modules for end points if i want to do stretch 
module.exports = {
    getRecipes, 
    getShoppingList, 
    getInstructions
}

function getRecipes(id) {
    return db.select("*")
    .from("recipes")
    .where({ id }).first()

}

function getShoppingList(id) {
    return db("recipes as r")
    .innerJoin(
        "ingredients as i", "i.recipes_id", "=", "r.id"
    )
    .select("r.name")
    .where({ id })
} 

function getInstructions() {
    return db("recipes as r")
    .innerJoin(
        "instructions as i", "i.recipes_id", "=", "r.id"  
    )
    .select("r.name")
    .where({ id })
}

