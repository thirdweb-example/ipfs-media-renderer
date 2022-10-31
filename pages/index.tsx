import { MediaRenderer, useContract, useNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { contract } = useContract(
    "0x05B8aab3fd77580C29c6510d8C54D9E6be4262d2"
  );

  const { data: nfts } = useNFTs(contract, {
    start: 0,
    count: 10,
  });

  return (
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
  );
};

export default Home;
