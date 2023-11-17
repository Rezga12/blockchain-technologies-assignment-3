import {MoneyRequest} from "./models";
import {Contract, Interface, JsonRpcProvider, Provider, Result, Wallet} from "ethers";

export class Splitwise {

    private wallet: Wallet;
    constructor(private contractAddress: string, private signerKey: string) {

        const provider = new JsonRpcProvider('https://rpc.notadegen.com/eth/sepolia');
        this.wallet = new Wallet(signerKey,provider);

    }

    // commands

    /*
        this method submits a money request, which should be saved on a blockchain.
        returns hash of submitted transaction
     */
    public async submitMoneyRequest(to: string, amount: bigint) : Promise<string> {
        return '';
    }

    /*
        this method is similar to `submitMoneyRequest` but works on multiple addresses and total
        amount if split among those addresses.
        error should be raised if an amount is not evenly divisible on all addresses.
     */
    public async splitTheBill(totalAmount: string, addresses: string[]): Promise<string> {
        return '';
    }

    /*
        this method rejects a specific money request, if the request if sent to the signer.
        Money request should be removed from a storage after rejection.
        method accepts requestId as a parameter, contract should be generating unique request ID
        for each request
     */
    public async rejectMoneyRequest(requestId: bigint) : Promise<string> {
        return '';
    }

    /*
        this method is mean to revoke your sent money request, Revoked MoneyRequest should also
        be deleted
     */
    public async cancelMoneyRequest(requestId: bigint) : Promise<string> {
        return '';
    }

    /*
        transfers amount of wei to the requesting party, paid requests should also be deleted from a list of
        incoming and outcoming requests. You probably need to declare corresponding solidity function as payable
     */
    public async payForRequestedAmount(requestId: bigint) : Promise<string> {
        return '';
    }

    /*
        this method pays for a money request by address. if several requests are sent from that address,
        the method should pay from all of them.
     */
    public async payToAddress(address: string): Promise<string> {
        return "";
    }


    /*
        This method should pay from all the incoming requests for the signer.
     */
    public async payForAllTheRequests() : Promise<string> {
        return '';
    }

    // queries

    /*
        Fetch all the addresses which received or sent money requests througout the history of a smart contract
     */
    public async getParticipatingAddresses(): Promise<string[]> {

        return []
    }

    /*
        fetch requests sent by the signer
     */
    public async getSentRequests(): Promise<MoneyRequest[]>{
        throw "TODO";
    }

    /*
        fetch requests sent to the signer by other users.
     */
    public async getReceivedRequests(): Promise<MoneyRequest[]> {
        throw "TODO";
    }


    /*
        get all the addresses who have sent money requests to the signer. Payed or Rejected requests
        should not be returned
     */
    public async getAllCreditors(): Promise<string[]> {
        throw "TODO";
    }

    /*
        fetch all addresses to whom signer have sent the money requests. This method should return only active
        requests as well.
     */
    public async getAllDebtors(): Promise<string[]> {
        throw "TODO";
    }

    /*
        method fetches total amount owed by combining all the incomming active requests' amounts.
     */
    public async getTotalAmountOwed() : Promise<bigint> {
        return 0n;
    }

    /*
        Fetches total amount requested by the signer from other users
     */
    public async getTotalAmountRequested() : Promise<bigint> {
        return 0n;
    }

    /*
        gets total amount owed to specific address by signer
     */
    public async getAmountOwedTo(address: string): Promise<bigint> {
        return 0n;
    }

    /*
        gets total amount which signer requested from specific address.
     */
    public async getAmountRequestedFrom(address: string): Promise<bigint> {
        return 0n;
    }

}