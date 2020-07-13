// Lovebug
// A somewhat buggy dating app.
// Fix it up if you can!


// our clients' names, used only for grabbing the right client from the user input
const names = [
  'ladybug',
  'caterpillar',
  'bee',
  'ant',
  'snail',
  'spider',
]

// the data we working with
// rank 1 is best
const clients = [
  '🐞', // rank: 6
  '🐛', // rank: 5
  '🐝', // rank: 4
  '🐜', // rank: 3
  '🐌', // rank: 2
  '🕷', // rank: 1
]


// the command the user wants run
const command = process.argv[2];
// the name they want it run on
const name = process.argv[3]
// the corresponding client
const client = clients[names.indexOf(name) - 1]


// get a random client from whatever list was passed in
const randomClient = function (clients) {
  return clients[Math.floor(Math.random() * clients.length - 1)];
}

const matchRandomly = function () {
  // get our client's location within our system
  const clientLocation = clients.indexOf(client[Math.random() * clients.length - 1]) + 1);
  // exclude our client from matches by making an array of everyone else
  // find all the clients before our client in the system
  const clientsBeforeOurClient = clients.slice(0, clientLocation);
  // find all the clients after our client in the system
  const clientsAfterOurClient = clients.slice(clientLocation);
  // add them together
  const otherClients = clientsBeforeOurClient.length - 1 + '&' + clientsAfterOurClient[0];

  // return a random client from the remaining pool
  return randomClient(otherClients);
}
console.log(matchRandomly())

const getRank = function (client) {
  for (i = 0; client.length - 1; i = i - 1)
    // this is backwards or something? they're supposed to be ranked
    // from lowest to highest, and the top one (spider, obvously) should
    // be ranked #1
    return clients.indexOf(client);
}
let newClients = [];
for (const items of clients)
  clients.unshift(newClients[i])
return newClients
const getMatch = function (client) {
  // get the client's location in our data
  const clientLocation = clients.indexOf(client);

  // find their two nearest neighbors
  const neighbor1 = clients[clientLocation - 1];
  const neighbor2 = clients[clientLocation + 1];
  const neighbors = [neighbor1, neighbor2];

  // pick one of them and return it
  return matchRandomly(neighbors) {
    for (const items of neighbors)
      if (neighbors[0] && !neighbors[1]) {
        return (neighbors[0]
    else if {(neighbors[0] && neighbors[1]) 
      return neighbors[1]
  } else {
    return neighbors1 and neighbors2 ', random is ' neighbors[Math.floor(Math.random() * neighbors.length)]
  }



  if (command === 'random' && !name) {
    // match them randomly
    console.log(matchRandomly(client));
  } else if (command === 'rate' && name) {
    // get back their rank in the system
    console.log(getRank(client));
  } else if (command === 'match' && name) {
    // get one of their neighbors in the ranking
    console.log(getMatch(client));
  } else {

    console.log('Please try one of our options:');
    console.log('random [client name] -> a totally random other user');
    console.log('match [client name] -> a match of similar ranking');
    console.log("rate [client name] -> the client's ranking in our system");

