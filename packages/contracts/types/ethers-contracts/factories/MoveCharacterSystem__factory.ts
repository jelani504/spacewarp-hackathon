/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  MoveCharacterSystem,
  MoveCharacterSystemInterface,
} from "../MoveCharacterSystem";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IWorld",
        name: "_world",
        type: "address",
      },
      {
        internalType: "address",
        name: "_components",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Ownable__NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "Ownable__NotTransitiveOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "arguments",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "characterId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "zoneId",
        type: "uint256",
      },
    ],
    name: "executeTyped",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610b7b380380610b7b83398101604081905261002f91610197565b818161003a336100ea565b6001600160a01b0381161561004f57806100b1565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b191906101d1565b600080546001600160a01b039283166001600160a01b0319918216179091556001805494909216931692909217909155506101f5915050565b60006100fe61015b60201b6103c41760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b038116811461019457600080fd5b50565b600080604083850312156101aa57600080fd5b82516101b58161017f565b60208401519092506101c68161017f565b809150509250929050565b6000602082840312156101e357600080fd5b81516101ee8161017f565b9392505050565b610977806102046000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063f2fde38b146100a7578063fbc070dd146100bc575b600080fd5b61006461005f366004610662565b6100cf565b6040516100719190610715565b60405180910390f35b6100826102c6565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100ba6100b5366004610781565b61030b565b005b6100646100ca3660046107be565b610387565b60606000806000848060200190518101906100ea91906107ea565b9194509250905060018281036101025750600261011e565b826002036101125750600361011e565b8260030361011e575060045b6000546101619073ffffffffffffffffffffffffffffffffffffffff167f49a4584d9706380e35459e1f31e673445371b5bac20aa516f8ba8650b18431066103e8565b73ffffffffffffffffffffffffffffffffffffffff1663f419df7285836040518363ffffffff1660e01b815260040161019b92919061084f565b600060405180830381600087803b1580156101b557600080fd5b505af11580156101c9573d6000803e3d6000fd5b5060049250505060018390036101e15750600061020d565b826002036101f15750600161020d565b826003036102015750600261020d565b8260040361020d575060035b6000546102509073ffffffffffffffffffffffffffffffffffffffff167fca217116a6cc2410f52fb18ff993e1c9720a7a02c4c68f73d5d06d1298921bb36103e8565b73ffffffffffffffffffffffffffffffffffffffff1663f419df7286836040518363ffffffff1660e01b815260040161028a92919061084f565b600060405180830381600087803b1580156102a457600080fd5b505af11580156102b8573d6000803e3d6000fd5b505050505050505050919050565b60006103067f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461037b576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61038481610530565b50565b60408051602081018590529081018390526060818101839052906103bc906080016040516020818303038152906040526100cf565b949350505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610458573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261049e919081019061086c565b9050805160000361050f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f742072656769737465726564000000000000000000000000000000604482015260640160405180910390fd5b6103bc8160008151811061052557610525610912565b602002602001015190565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610384928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561065a5761065a6105e4565b604052919050565b6000602080838503121561067557600080fd5b823567ffffffffffffffff8082111561068d57600080fd5b818501915085601f8301126106a157600080fd5b8135818111156106b3576106b36105e4565b6106e3847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610613565b915080825286848285010111156106f957600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b8181101561074257858101830151858201604001528201610726565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b60006020828403121561079357600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146107b757600080fd5b9392505050565b6000806000606084860312156107d357600080fd5b505081359360208301359350604090920135919050565b6000806000606084860312156107ff57600080fd5b8351925060208401519150604084015190509250925092565b60058110610384577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8281526040810161085f83610818565b8260208301529392505050565b6000602080838503121561087f57600080fd5b825167ffffffffffffffff8082111561089757600080fd5b818501915085601f8301126108ab57600080fd5b8151818111156108bd576108bd6105e4565b8060051b91506108ce848301610613565b81815291830184019184810190888411156108e857600080fd5b938501935b83851015610906578451825293850193908501906108ed565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea264697066735822122046de7801e8e32fed1ec0dfbfae18231f6e19ecb964e5cc8578ab7421ff94c79c64736f6c63430008110033";

type MoveCharacterSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MoveCharacterSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MoveCharacterSystem__factory extends ContractFactory {
  constructor(...args: MoveCharacterSystemConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MoveCharacterSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<MoveCharacterSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): MoveCharacterSystem {
    return super.attach(address) as MoveCharacterSystem;
  }
  override connect(signer: Signer): MoveCharacterSystem__factory {
    return super.connect(signer) as MoveCharacterSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MoveCharacterSystemInterface {
    return new utils.Interface(_abi) as MoveCharacterSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MoveCharacterSystem {
    return new Contract(address, _abi, signerOrProvider) as MoveCharacterSystem;
  }
}
