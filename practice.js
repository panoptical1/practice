function makeCoffee(sugarAmountInGrams, sugarType, milkFat){
    if (null){
        var instructions = "boil water,";
        instructions += "pour into cup,";
        instructions += "add coffe granules,";
        instructions += "stir,";
        instructions += " add " + sugarAmountInGrams + " grams of " + sugarType + " sweetener, ";
        instructions += " add " + milkFat + " milk ";
        return instructions;
    }
        else console.log("You didn't put in any ingredients");
}