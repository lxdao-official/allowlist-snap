# Allowlist Snap

A significant 80% of users predominantly visit the top 20% of websites. Alarmingly, these sites also constitute 80% of phishing threats. Given this landscape, we're convinced that an allowlist approach is far superior to a blocklist.

Introducing the "AllowList Snap" - a tool designed to read on-chain allowlist data from Linea, ensuring users are informed when they engage with specific addresses.

For the allowlist to be a robust security measure, it's crucial that it remains up-to-date. To achieve this, we've integrated with Delegatable https://delegatable.org/. This tool enables us to devise a dynamic update strategy, allowing us to collaborate with reputable security firms for allowlist management.

Additionally, we're open to incorporating trusted public allowlist data, such as the AAStar Whitelist.

Our primary objective is to mitigate security vulnerabilities for Metamask users through the use of an allowlist. Our vision is to establish a universally trusted allowlist service, facilitating seamless integration for all wallets, thereby enhancing the overall security ecosystem.

This is the Snap repo, the contract repo is in <https://github.com/lxdao-official/allowlist-contract>.

## Getting Started

```shell
yarn install && yarn start
```

So that you can install the Snap. Currently, we deployed [our contract](https://explorer.goerli.linea.build/address/0x27e8cBA14010e413944E057D3A0327a20b22F99F) on Linea Goerli, so please switch to Linea Goerli for testing.

Currently, I have put my address 0x17c57bD297175e5711Ee3Daf045252B588f3162F on the allowlist for testing, you could try to transfer test ETH to this address, you will be able to get the notification.

More information, please refer to the demo video: TODO

## Future plans

- Refine the registration smart contract to incorporate a reliable update mechanism, ensuring widespread trust in this on-chain allowlist.
- Champion the concept of the AllowList. Initially, our focus is on safeguarding users during MetaMask snap installations. If successful, we aspire for a direct integration with MetaMask and other wallets, elevating the user experience.
- Integrate credible allowlist data from public platforms, such as the whitelist API offered by the AAStar community. <https://aastar.xyz/>
- In essence, our mission is to minimize phishing threats and associated risks, aiming to deliver an enhanced web3 experience for users.

## Tech Stack

- Linea: Our contract is deployed on-chain. Utilizing Linea as a Layer2 solution offers the benefit of reduced gas fees.
- Infura: Contract data retrieval within the Snap is facilitated through the Infura API gateway.
- Delegatable: Our system leverages the Delegatable contract. Its robust delegation capabilities enable us to grant permissions to esteemed security firms, fostering collaborative allowlist management. <https://delegatable.org/>
- MetaMask Snap: Central to our initiative is the snap we've developed, ensuring an impeccable Developer Experience (DX).
