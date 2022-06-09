import { ContractFactory } from "ethers";
import { ethers } from "hardhat";
import { Greeter } from "../src/types";

import greeterInputs from "../shared/inputs/greeter.inputs";

const { message } = greeterInputs;

async function main() {
  const Greeter: ContractFactory = await ethers.getContractFactory("Greeter");
  const greeter: Greeter = (await Greeter.deploy(message)) as Greeter;

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
