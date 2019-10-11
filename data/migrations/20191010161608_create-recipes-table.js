
exports.up = function(knex) {
    return knex.schema.createTable("recipes", tbl => {
        tbl.increments()
        tbl.string("name", 255).notNullable()
    })
    
    .createTable("instructions", tbl => {
        tbl.increments()
        tbl.integer("recipes_id")
        tbl.string("instructions", 255)
    })

    .createTable("ingredients", tbl => {
        tbl.increments()

        tbl.string("ingredients", 255).notNullable()
        
        tbl
        .integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate('CASCADE')
        .onDelete("RESTRICT");

      tbl
        .integer("quantity_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("quantity")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");


        
        tbl.unique(["recipes_id", "quantity_id"]);
    })

    .createTable("quantity", tbl => {
        tbl.increments()
        tbl.integer("ingredients_id")
        tbl.string("quantity")
        
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("quantity")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("instructions")
        .dropTableIfExists("recipes")
};
