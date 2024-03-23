import { ethers } from "ethers";

export default eventHandler(async (event) => {
  const random = Math.floor(Math.random() * (1024 - 1 + 1) + 1).toString().padStart(4, '0');

  const ownerOfABI = [
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
  ]

  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

  const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, ownerOfABI, provider);

  const owner: any = await contract.ownerOf(random)

  const shortOwner = owner.slice(0, 6) + "..." + owner.slice(-4)

  if (owner === "0x0000000000000000000000000000000000000000") {
    return `
    <!DOCTYPE html>
      <html>
        <head>
          <title>Basic Frame</title>
          <meta
            property="og:image"
            content="https://frames-gilt.vercel.app/site-preview.jpg"
          />
          <meta property="fc:frame" content="vNext" />
          <meta
            property="fc:frame:image"
            content="https://bafybeidd62ezqvyyviibduxaz2wuuyexkpuwbdfo34wukucxtav7qh3cbe.ipfs.dweb.link/${random}.gif"
          />
          <meta
            property="fc:frame:image:aspect_ratio"
            content="1:1"
          />
          <meta property="fc:frame:button:1" content="Next" />
          <meta
            property="fc:frame:post_url"
            content="${process.env.API_URL}"
          />
          <meta name="fc:frame:button:2" content="More..." />
          <meta name="fc:frame:button:2:action" content="link" />
          <meta name="fc:frame:button:2:target" content="https://buttpluggy.com/buttpluggy/${random}" />
          <meta name="fc:frame:button:3" content="Not minted yet!! Try to mine it..." />
          <meta name="fc:frame:button:3:action" content="link" />
          <meta name="fc:frame:button:3:target" content="https://buttpluggy.com/mine" />
        </head>
        <body>
          <h1>Basic Frame</h1>
        </body>
      </html>
    `
  } else {

    return `
    <!DOCTYPE html>
      <html>
        <head>
          <title>Basic Frame</title>
          <meta
            property="og:image"
            content="https://frames-gilt.vercel.app/site-preview.jpg"
          />
          <meta property="fc:frame" content="vNext" />
          <meta
            property="fc:frame:image"
            content="https://bafybeidd62ezqvyyviibduxaz2wuuyexkpuwbdfo34wukucxtav7qh3cbe.ipfs.dweb.link/${random}.gif"
          />
          <meta
            property="fc:frame:image:aspect_ratio"
            content="1:1"
          />
          <meta property="fc:frame:button:1" content="Next" />
          <meta
            property="fc:frame:post_url"
            content="${process.env.API_URL}"
          />
          <meta name="fc:frame:button:2" content="More..." />
          <meta name="fc:frame:button:2:action" content="link" />
          <meta name="fc:frame:button:2:target" content="https://buttpluggy.com/buttpluggy/${random}" />
          <meta name="fc:frame:button:3" content="Owned by ${shortOwner}" />
        </head>
        <body>
          <h1>Basic Frame</h1>
        </body>
      </html>
    `
  }

});