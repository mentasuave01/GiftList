import { Hono } from 'hono'
import { serve } from '@hono/node-server'

//import verifyProof from '../utils/verifyProof.js' // Make sure this is an ES module or adapted accordingly

const app = new Hono()

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = ''


app.post('/gift', async (c) => {
  // grab the parameters from the front-end here
  const body = await c.req.json()

  console.log(body)
  // TODO: prove that a name is in the list 
  const isInTheList = false
  if (isInTheList) {
    return c.text("You got a toy robot!")
  } else {
    return c.text("You are not on the list :(")
  }
})

const port = 1225
serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`) // Listening on http://localhost:3000
})