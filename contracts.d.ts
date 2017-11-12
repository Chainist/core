import * as Web3 from "web3";
import * as BigNumber from "bignumber.js";

type Address = string;
type TransactionOptions = Partial<Transaction>;
type UInt = number | BigNumber.BigNumber;

interface Transaction {
  hash: string;
  nonce: number;
  blockHash: string | null;
  blockNumber: number | null;
  transactionIndex: number | null;
  from: Address | ContractInstance;
  to: string | null;
  value: UInt;
  gasPrice: UInt;
  gas: number;
  input: string;
}

interface ContractInstance {
  address: string;
  sendTransaction(options?: TransactionOptions): Promise<void>;
}

export interface AccountRegistryInstance extends ContractInstance {
  inviteCollateralizer(options?: TransactionOptions): Promise<Address>;
  invite(recipient: Address, options?: TransactionOptions): Promise<void>;
  accounts(unnamed0: Address, options?: TransactionOptions): Promise<boolean>;
  owner(options?: TransactionOptions): Promise<Address>;
  invites(unnamed1: Address, options?: TransactionOptions): Promise<boolean>;
  createAccount(options?: TransactionOptions): Promise<void>;
  acceptInvite(options?: TransactionOptions): Promise<void>;
  blt(options?: TransactionOptions): Promise<Address>;
  transferOwnership(
    newOwner: Address,
    options?: TransactionOptions
  ): Promise<void>;
}

export interface AccountRegistryContract {
  new: (blt: Address) => Promise<AccountRegistryInstance>;
  deployed(): Promise<AccountRegistryInstance>;
  at(address: string): AccountRegistryInstance;
}

export interface ApproveAndCallFallBackInstance extends ContractInstance {
  receiveApproval(
    from: Address,
    amount: UInt,
    token: Address,
    data: string,
    options?: TransactionOptions
  ): Promise<void>;
}

export interface ApproveAndCallFallBackContract {
  new: () => Promise<ApproveAndCallFallBackInstance>;
  deployed(): Promise<ApproveAndCallFallBackInstance>;
  at(address: string): ApproveAndCallFallBackInstance;
}

export interface BLTInstance extends ContractInstance {
  tokenGrantsCount(
    holder: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  name(options?: TransactionOptions): Promise<string>;
  approve(
    spender: Address,
    amount: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  spendableBalanceOf(
    holder: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  creationBlock(options?: TransactionOptions): Promise<BigNumber.BigNumber>;
  totalSupply(options?: TransactionOptions): Promise<BigNumber.BigNumber>;
  setCanCreateGrants(
    addr: Address,
    allowed: boolean,
    options?: TransactionOptions
  ): Promise<void>;
  transferFrom(
    from: Address,
    to: Address,
    value: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  grants(
    unnamed2: Address,
    unnamed3: UInt,
    options?: TransactionOptions
  ): Promise<
    [
      Address,
      BigNumber.BigNumber,
      BigNumber.BigNumber,
      BigNumber.BigNumber,
      BigNumber.BigNumber,
      boolean,
      boolean
    ]
  >;
  decimals(options?: TransactionOptions): Promise<BigNumber.BigNumber>;
  changeController(
    newController: Address,
    options?: TransactionOptions
  ): Promise<void>;
  balanceOfAt(
    owner: Address,
    blockNumber: UInt,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  version(options?: TransactionOptions): Promise<string>;
  tokenGrant(
    holder: Address,
    grantId: UInt,
    options?: TransactionOptions
  ): Promise<
    [
      Address,
      BigNumber.BigNumber,
      BigNumber.BigNumber,
      BigNumber.BigNumber,
      BigNumber.BigNumber,
      BigNumber.BigNumber,
      boolean,
      boolean
    ]
  >;
  createCloneToken(
    cloneTokenName: string,
    cloneDecimalUnits: UInt,
    cloneTokenSymbol: string,
    snapshotBlock: UInt,
    transfersEnabled: boolean,
    options?: TransactionOptions
  ): Promise<Address>;
  lastTokenIsTransferableDate(
    holder: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  balanceOf(
    owner: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  parentToken(options?: TransactionOptions): Promise<Address>;
  generateTokens(
    owner: Address,
    amount: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  symbol(options?: TransactionOptions): Promise<string>;
  grantVestedTokens(
    to: Address,
    value: UInt,
    start: UInt,
    cliff: UInt,
    vesting: UInt,
    revokable: boolean,
    burnsOnRevoke: boolean,
    options?: TransactionOptions
  ): Promise<void>;
  totalSupplyAt(
    blockNumber: UInt,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  transfer(
    to: Address,
    value: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  revokeTokenGrant(
    holder: Address,
    receiver: Address,
    grantId: UInt,
    options?: TransactionOptions
  ): Promise<void>;
  transfersEnabled(options?: TransactionOptions): Promise<boolean>;
  parentSnapShotBlock(
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  approveAndCall(
    spender: Address,
    amount: UInt,
    extraData: string,
    options?: TransactionOptions
  ): Promise<boolean>;
  transferableTokens(
    holder: Address,
    time: UInt,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  destroyTokens(
    owner: Address,
    amount: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  allowance(
    owner: Address,
    spender: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  claimTokens(token: Address, options?: TransactionOptions): Promise<void>;
  tokenFactory(options?: TransactionOptions): Promise<Address>;
  enableTransfers(
    transfersEnabled: boolean,
    options?: TransactionOptions
  ): Promise<void>;
  controller(options?: TransactionOptions): Promise<Address>;
  changeVestingWhitelister(
    newWhitelister: Address,
    options?: TransactionOptions
  ): Promise<void>;
}

export interface BLTContract {
  new: (tokenFactory: Address) => Promise<BLTInstance>;
  deployed(): Promise<BLTInstance>;
  at(address: string): BLTInstance;
}

export interface ControlledInstance extends ContractInstance {
  changeController(
    newController: Address,
    options?: TransactionOptions
  ): Promise<void>;
  controller(options?: TransactionOptions): Promise<Address>;
}

export interface ControlledContract {
  new: () => Promise<ControlledInstance>;
  deployed(): Promise<ControlledInstance>;
  at(address: string): ControlledInstance;
}

export interface ConvertLibInstance extends ContractInstance {
  convert(
    amount: UInt,
    conversionRate: UInt,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
}

export interface ConvertLibContract {
  new: () => Promise<ConvertLibInstance>;
  deployed(): Promise<ConvertLibInstance>;
  at(address: string): ConvertLibInstance;
}

export interface ERC20Instance extends ContractInstance {
  approve(
    spender: Address,
    value: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  totalSupply(options?: TransactionOptions): Promise<BigNumber.BigNumber>;
  transferFrom(
    from: Address,
    to: Address,
    value: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  balanceOf(
    who: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  transfer(
    to: Address,
    value: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  allowance(
    owner: Address,
    spender: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
}

export interface ERC20Contract {
  new: () => Promise<ERC20Instance>;
  deployed(): Promise<ERC20Instance>;
  at(address: string): ERC20Instance;
}

export interface ERC20BasicInstance extends ContractInstance {
  totalSupply(options?: TransactionOptions): Promise<BigNumber.BigNumber>;
  balanceOf(
    who: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  transfer(
    to: Address,
    value: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
}

export interface ERC20BasicContract {
  new: () => Promise<ERC20BasicInstance>;
  deployed(): Promise<ERC20BasicInstance>;
  at(address: string): ERC20BasicInstance;
}

export interface InviteCollateralizerInstance extends ContractInstance {
  registry(options?: TransactionOptions): Promise<Address>;
  owner(options?: TransactionOptions): Promise<Address>;
  blt(options?: TransactionOptions): Promise<Address>;
  takeCollateral(
    owner: Address,
    options?: TransactionOptions
  ): Promise<boolean>;
  transferOwnership(
    newOwner: Address,
    options?: TransactionOptions
  ): Promise<void>;
}

export interface InviteCollateralizerContract {
  new: (
    registry: Address,
    blt: Address
  ) => Promise<InviteCollateralizerInstance>;
  deployed(): Promise<InviteCollateralizerInstance>;
  at(address: string): InviteCollateralizerInstance;
}

export interface MathInstance extends ContractInstance {}

export interface MathContract {
  new: () => Promise<MathInstance>;
  deployed(): Promise<MathInstance>;
  at(address: string): MathInstance;
}

export interface MetaCoinInstance extends ContractInstance {
  getBalanceInEth(
    addr: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  sendCoin(
    receiver: Address,
    amount: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  getBalance(
    addr: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
}

export interface MetaCoinContract {
  new: () => Promise<MetaCoinInstance>;
  deployed(): Promise<MetaCoinInstance>;
  at(address: string): MetaCoinInstance;
}

export interface MigrationsInstance extends ContractInstance {
  upgrade(new_address: Address, options?: TransactionOptions): Promise<void>;
  last_completed_migration(
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  owner(options?: TransactionOptions): Promise<Address>;
  setCompleted(completed: UInt, options?: TransactionOptions): Promise<void>;
}

export interface MigrationsContract {
  new: () => Promise<MigrationsInstance>;
  deployed(): Promise<MigrationsInstance>;
  at(address: string): MigrationsInstance;
}

export interface MiniMeTokenInstance extends ContractInstance {
  name(options?: TransactionOptions): Promise<string>;
  approve(
    spender: Address,
    amount: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  creationBlock(options?: TransactionOptions): Promise<BigNumber.BigNumber>;
  totalSupply(options?: TransactionOptions): Promise<BigNumber.BigNumber>;
  transferFrom(
    from: Address,
    to: Address,
    amount: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  decimals(options?: TransactionOptions): Promise<BigNumber.BigNumber>;
  changeController(
    newController: Address,
    options?: TransactionOptions
  ): Promise<void>;
  balanceOfAt(
    owner: Address,
    blockNumber: UInt,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  version(options?: TransactionOptions): Promise<string>;
  createCloneToken(
    cloneTokenName: string,
    cloneDecimalUnits: UInt,
    cloneTokenSymbol: string,
    snapshotBlock: UInt,
    transfersEnabled: boolean,
    options?: TransactionOptions
  ): Promise<Address>;
  balanceOf(
    owner: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  parentToken(options?: TransactionOptions): Promise<Address>;
  generateTokens(
    owner: Address,
    amount: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  symbol(options?: TransactionOptions): Promise<string>;
  totalSupplyAt(
    blockNumber: UInt,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  transfer(
    to: Address,
    amount: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  transfersEnabled(options?: TransactionOptions): Promise<boolean>;
  parentSnapShotBlock(
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  approveAndCall(
    spender: Address,
    amount: UInt,
    extraData: string,
    options?: TransactionOptions
  ): Promise<boolean>;
  destroyTokens(
    owner: Address,
    amount: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  allowance(
    owner: Address,
    spender: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  claimTokens(token: Address, options?: TransactionOptions): Promise<void>;
  tokenFactory(options?: TransactionOptions): Promise<Address>;
  enableTransfers(
    transfersEnabled: boolean,
    options?: TransactionOptions
  ): Promise<void>;
  controller(options?: TransactionOptions): Promise<Address>;
}

export interface MiniMeTokenContract {
  new: (
    tokenFactory: Address,
    parentToken: Address,
    parentSnapShotBlock: UInt,
    tokenName: string,
    decimalUnits: UInt,
    tokenSymbol: string,
    transfersEnabled: boolean
  ) => Promise<MiniMeTokenInstance>;
  deployed(): Promise<MiniMeTokenInstance>;
  at(address: string): MiniMeTokenInstance;
}

export interface MiniMeTokenFactoryInstance extends ContractInstance {
  createCloneToken(
    parentToken: Address,
    snapshotBlock: UInt,
    tokenName: string,
    decimalUnits: UInt,
    tokenSymbol: string,
    transfersEnabled: boolean,
    options?: TransactionOptions
  ): Promise<Address>;
}

export interface MiniMeTokenFactoryContract {
  new: () => Promise<MiniMeTokenFactoryInstance>;
  deployed(): Promise<MiniMeTokenFactoryInstance>;
  at(address: string): MiniMeTokenFactoryInstance;
}

export interface MiniMeVestedTokenInstance extends ContractInstance {
  tokenGrantsCount(
    holder: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  name(options?: TransactionOptions): Promise<string>;
  approve(
    spender: Address,
    amount: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  spendableBalanceOf(
    holder: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  creationBlock(options?: TransactionOptions): Promise<BigNumber.BigNumber>;
  totalSupply(options?: TransactionOptions): Promise<BigNumber.BigNumber>;
  setCanCreateGrants(
    addr: Address,
    allowed: boolean,
    options?: TransactionOptions
  ): Promise<void>;
  transferFrom(
    from: Address,
    to: Address,
    value: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  grants(
    unnamed4: Address,
    unnamed5: UInt,
    options?: TransactionOptions
  ): Promise<
    [
      Address,
      BigNumber.BigNumber,
      BigNumber.BigNumber,
      BigNumber.BigNumber,
      BigNumber.BigNumber,
      boolean,
      boolean
    ]
  >;
  decimals(options?: TransactionOptions): Promise<BigNumber.BigNumber>;
  changeController(
    newController: Address,
    options?: TransactionOptions
  ): Promise<void>;
  balanceOfAt(
    owner: Address,
    blockNumber: UInt,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  version(options?: TransactionOptions): Promise<string>;
  tokenGrant(
    holder: Address,
    grantId: UInt,
    options?: TransactionOptions
  ): Promise<
    [
      Address,
      BigNumber.BigNumber,
      BigNumber.BigNumber,
      BigNumber.BigNumber,
      BigNumber.BigNumber,
      BigNumber.BigNumber,
      boolean,
      boolean
    ]
  >;
  createCloneToken(
    cloneTokenName: string,
    cloneDecimalUnits: UInt,
    cloneTokenSymbol: string,
    snapshotBlock: UInt,
    transfersEnabled: boolean,
    options?: TransactionOptions
  ): Promise<Address>;
  lastTokenIsTransferableDate(
    holder: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  balanceOf(
    owner: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  parentToken(options?: TransactionOptions): Promise<Address>;
  generateTokens(
    owner: Address,
    amount: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  symbol(options?: TransactionOptions): Promise<string>;
  grantVestedTokens(
    to: Address,
    value: UInt,
    start: UInt,
    cliff: UInt,
    vesting: UInt,
    revokable: boolean,
    burnsOnRevoke: boolean,
    options?: TransactionOptions
  ): Promise<void>;
  totalSupplyAt(
    blockNumber: UInt,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  transfer(
    to: Address,
    value: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  revokeTokenGrant(
    holder: Address,
    receiver: Address,
    grantId: UInt,
    options?: TransactionOptions
  ): Promise<void>;
  transfersEnabled(options?: TransactionOptions): Promise<boolean>;
  parentSnapShotBlock(
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  approveAndCall(
    spender: Address,
    amount: UInt,
    extraData: string,
    options?: TransactionOptions
  ): Promise<boolean>;
  transferableTokens(
    holder: Address,
    time: UInt,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  destroyTokens(
    owner: Address,
    amount: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  allowance(
    owner: Address,
    spender: Address,
    options?: TransactionOptions
  ): Promise<BigNumber.BigNumber>;
  claimTokens(token: Address, options?: TransactionOptions): Promise<void>;
  tokenFactory(options?: TransactionOptions): Promise<Address>;
  enableTransfers(
    transfersEnabled: boolean,
    options?: TransactionOptions
  ): Promise<void>;
  controller(options?: TransactionOptions): Promise<Address>;
  changeVestingWhitelister(
    newWhitelister: Address,
    options?: TransactionOptions
  ): Promise<void>;
}

export interface MiniMeVestedTokenContract {
  new: (
    tokenFactory: Address,
    parentToken: Address,
    parentSnapShotBlock: UInt,
    tokenName: string,
    decimalUnits: UInt,
    tokenSymbol: string,
    transfersEnabled: boolean
  ) => Promise<MiniMeVestedTokenInstance>;
  deployed(): Promise<MiniMeVestedTokenInstance>;
  at(address: string): MiniMeVestedTokenInstance;
}

export interface OwnableInstance extends ContractInstance {
  owner(options?: TransactionOptions): Promise<Address>;
  transferOwnership(
    newOwner: Address,
    options?: TransactionOptions
  ): Promise<void>;
}

export interface OwnableContract {
  new: () => Promise<OwnableInstance>;
  deployed(): Promise<OwnableInstance>;
  at(address: string): OwnableInstance;
}

export interface SafeERC20Instance extends ContractInstance {}

export interface SafeERC20Contract {
  new: () => Promise<SafeERC20Instance>;
  deployed(): Promise<SafeERC20Instance>;
  at(address: string): SafeERC20Instance;
}

export interface SafeMathInstance extends ContractInstance {}

export interface SafeMathContract {
  new: () => Promise<SafeMathInstance>;
  deployed(): Promise<SafeMathInstance>;
  at(address: string): SafeMathInstance;
}

export interface TokenControllerInstance extends ContractInstance {
  onTransfer(
    from: Address,
    to: Address,
    amount: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  onApprove(
    owner: Address,
    spender: Address,
    amount: UInt,
    options?: TransactionOptions
  ): Promise<boolean>;
  proxyPayment(owner: Address, options?: TransactionOptions): Promise<boolean>;
}

export interface TokenControllerContract {
  new: () => Promise<TokenControllerInstance>;
  deployed(): Promise<TokenControllerInstance>;
  at(address: string): TokenControllerInstance;
}
