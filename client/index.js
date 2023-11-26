import niceList from '../utils/niceList.json';
import MerkleTree from '../utils/MerkleTree';

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 

  const response = await fetch(`${serverUrl}/gift`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // TODO: add request body parameters here!
    })
  });

  const { gift } = await response.json();

  console.log({ gift });
}

main();