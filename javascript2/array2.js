const marval_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"] 

marval_heros.push(dc_heros)

// const allHeros = marval_heros.concat(dc_heros)

// console.log(dc_heros);
// console.log(marval_heros);

const all_new_heros = [...marval_heros, ...dc_heros]

// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6,], [8, 9]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);



// Array.isArray("Ravi Kumar")
// console.log(Array.isArray("Ravi kumar"))
// console.log(Array.from("Ravi kumar"))
// console.log(Array.from({name: "Ravi kumar"}))  // intersting


let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3))

