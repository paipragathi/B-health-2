const hre = require('hardhat');

const main = async()=>{

  const [deployer] = await hre.ethers.getSigners();

  const MedicalRecord =await hre.ethers.getContractFactory("MedicalRecord");
  const medicalRecord = await MedicalRecord.deploy();

  await medicalRecord.deployed();
  console.log("Medical Record deployed successfully to :", medicalRecord.address);
}


main()
  .then(()=>process.exit(0))
  .catch((error)=>{
    console.error(error);
    process.exit(1);
  });