console.log('----------desetructuring and  spred---------')
// Ej. 1 destructuring
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];
const [e1,e2,e3] = empleados;
const {email:correo} =e1; 
console.log('Ej.1.1 Empleada Ana : ', e2)
console.log('Ej.1.2 Email de Luis : ', correo)
const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
const{name:nombre} = pokemon; 
console.log('Ej.1.3 y 1.4 Nombre del Pokemon : ', nombre)
const{type:tipo} = pokemon; 
console.log('Ej.1.5 Tipo del Pokemon : ', tipo)
const{moves} = pokemon;
const [,takle]=moves;
console.log('Ej.1.6 movimiento Tackle : ', takle)
//Ej.2 spread/rest
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}
const pokemonFusion ={...pokemon,...pikachu}; 
console.log('Ej.2.1 Fusión Pokemon : ', pokemonFusion)

const sumEveryOther=(...numeros)=>numeros.reduce((cumulative,element)=>cumulative + element)
console.log('Ej.2.2 sumEveryOther(6, 8, 2, 3, 1) : ', sumEveryOther(6, 8, 2, 3, 1))
console.log('Ej.2.2 sumEveryOther(11, 3, 12) : ', sumEveryOther(11, 3, 12))
const addOnlyNums=(...arr)=>arr.filter(numero => typeof(numero) == 'number').reduce((cumulative,element)=>cumulative + element)
console.log('Ej.2.3 addOnlyNums(1, perro, 2, 4) : ', addOnlyNums(1, 'perro', 2, 4))
const countTheArgs=(...args)=>args.length
console.log('Ej.2.4 countTheArgs(gato, perro) : ', countTheArgs('gato', 'perro'))
console.log("Ej.2.4 countTheArgs('gato', 'perro', 'pollo', 'oso') : ", countTheArgs('gato', 'perro', 'pollo', 'oso'))
const combineTwoArrays=(arr1,arr2)=>[...arr1,...arr2]
console.log("Ej.2.4 combineTwoArrays(['gato', 'perro', 'pollo', 'oso'],[6, 8, 2, 3, 1]) : ", combineTwoArrays(['gato', 'perro', 'pollo', 'oso'],[6, 8, 2, 3, 1]))
//Ej.3. 
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };
//Ej. Extra
const {today:maximaHoy} = HIGH_TEMPERATURES
const {tomorrow:maximaManana} = HIGH_TEMPERATURES
console.log('Ej.Ext.1  maximaHoy y MaximaManana: ', maximaHoy+'|'+maximaManana)
const onlyUniques=(...arr)=>arr.filter((value,index,self) =>self.indexOf(value)===index)
console.log("Ej.Ext.2  onlyUniques('gato', 'pollo','cerdo', 'cerdo');  ",onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'))
console.log("Ej.Ext.2  onlyUniques(1, 1, 2, 2, 3, 6, 7, 8);  ",onlyUniques(1, 1, 2, 2, 3, 6, 7, 8))
const combineAllArrays=(...arr)=>{
    const a=[]; 
        arr.map((value)=>{
        a.push(...value)
        })
        return a
}
console.log("Ej.Ext.3  combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1])",combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]))
const sumAndSquare=(...arr)=>arr.filter(numero => typeof(numero) == 'number').reduce((cumulative,element)=>cumulative + element**2)
console.log('Ej.Ext.4 sumAndSquare(1, perro, 2, 4) : ', sumAndSquare(1, 'perro', 2, 4,3))