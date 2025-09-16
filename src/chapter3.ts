
// object
let user: { id?: number, name: string } = { id: 1, name: '김장한' };

console.log(user.id);

user = { name: '김한장' };

let config: { readonly apiKey: string } = { apiKey: "MY API KEY" };

// config.apiKey = "MY API KEY2";