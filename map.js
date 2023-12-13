const friends = ["Alim", "Halim", "Jalim", "Malim", "Kalim"];
const friend = friends.map((friend) => friend[2]);
// console.log(friend);

//object map
const nayoks = [
  { id: 23, name: "sakib kHan", movie: "King Khan" },
  { id: 23, name: "Bappa kHan", movie: "King Khan" },
  { id: 23, name: "Riyas kHan", movie: "King Khan" },
  { id: 23, name: "Dipjol kHan", movie: "King Khan" },
];
const names = nayoks.map((nayok) => nayok.name);
const movies = nayoks.map((nayok) => nayok.movie);
console.log(names);
console.log(movies);
