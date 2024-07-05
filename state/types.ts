export interface LoginState {
  address: string
  chainId: number
}


// Block

export interface BlockState {
  currentBlock: number
  initialBlock: number
}


// Global state

export interface State {
  login: LoginState
  block: BlockState
}

