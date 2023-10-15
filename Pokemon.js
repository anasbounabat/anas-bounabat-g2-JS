Pokemon.js

Class Pokemon {
    constructor(name,attack,defense,hp,luck){

        this.name = name
        this.attack = attack
        this.pv = pv
        this.luck = luck
        this.defense = defense 
    }

    let meowth = new Pokemon('meowth', 24 , 31 , 100 0.4 ) 
    let shinx = new Pokemon(' shinx', 28 , 42 , 100 0.7 ) 
    
    attackPokemon(Pokemon)
    if (this.luck){
        let damage = this.attack - pokemon.defense
    
    {console.log(this.name + 'a attaque' + pokemon.name + damage + 'il lui reste ' + pokemon.hp  )}
    else
    {
       console.log(this.name + 'a raté son attaque') 
    }
    }

    islucky()
    {
        return this.luck > math.random()
    }

    while ( shinx.hp > 0 && meowth.hp>0)
{ 
    shinx.attack(meowth)

    if (meowth.hp<0)
    {
        consol.log(meowth 'is dead')
    }

    meowth.attack(shinx)

    if (shinx.hp <0)
    {
     consol.log(shinx is dead)
    }
}