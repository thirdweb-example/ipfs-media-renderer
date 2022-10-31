# IPFS Media Renderer

Render any asset stored on IPFS using our SDK's UI Components

## Setup

To run the project, first clone this repository, and then run one of the following commands to install the dependencies:

```bash
npm install
# or
yarn install
```

Finally, you can run the project with one of the following commands:

```bash
npm run dev
# or
yarn dev
```

Now, you can navigate to [http://localhost:3000](http://localhost:3000) to visit the client side page where you can connect a wallet, sign-in with eth and view the payload, and use the payload to authenticate with the backend.

## How It Works

Using the `useNFTs` hook we get all the NFTs of a collection:

```tsx
const { contract } = useContract("0x05B8aab3fd77580C29c6510d8C54D9E6be4262d2");

const { data: nfts } = useNFTs(contract, {
  start: 0,
  count: 10,
});
```

We then use the [MediaRenderer](https://portal.thirdweb.com/ui-components/ipfs-media-renderer) component to render the NFTs:

```tsx
<div className={styles.container}>
  {nfts?.map((nft) => (
    <MediaRenderer
      key={nft.metadata.id}
      src={nft.metadata.image}
      alt={String(nft.metadata.name)}
      style={{
        maxWidth: "200px",
      }}
    />
  ))}
</div>
```

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
