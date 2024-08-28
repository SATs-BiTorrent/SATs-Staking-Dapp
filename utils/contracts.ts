import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { STAKING_CONTRACT_ABI } from "./stakingContractABI";

// Replace <contract_address> with the contract address of your contract
const stakeTokenContractAddress = "0x23181F21DEa5936e24163FFABa4Ea3B316B57f3C";
const rewardTokenContractAddress = "0x0f5A428dc4f225941efbf29d7c957434e35B3b11";
const stakingContractAddress = "0x1cb3831F541fDc962d5d1a68e3AEAfD4e2d5b473";

export const STAKE_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakeTokenContractAddress,
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress,
});


export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: STAKING_CONTRACT_ABI
});