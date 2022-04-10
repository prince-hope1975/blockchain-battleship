// Automatically generated with Reach 0.1.9 (1f9218bd)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (1f9218bd)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v139 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v140 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  stdlib.protect(ctc2, await interact.getBoard(), {
    at: './index.rsh:65:37:application',
    fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:17:function exp)'],
    msg: 'getBoard',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v140, v139],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:70:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v140, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v146, v147], secs: v149, time: v148, didSend: v59, from: v145 } = txn1;
      
      sim_r.txns.push({
        amt: v146,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v158 = stdlib.add(v148, v147);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v146, v147], secs: v149, time: v148, didSend: v59, from: v145 } = txn1;
  ;
  const v158 = stdlib.add(v148, v147);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v158],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v145, v146, v158],
      evt_cnt: 0,
      funcNum: 2,
      lct: v148,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v184, time: v183, didSend: v100, from: v182 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v146,
          kind: 'from',
          to: v145,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v184, time: v183, didSend: v100, from: v182 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:60:29:application',
      fs: ['at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:59:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:58:28:function exp)', 'at ./index.rsh:79:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v165, time: v164, didSend: v69, from: v163 } = txn2;
    const v167 = stdlib.add(v146, v146);
    ;
    const v169 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:82:24:decimal', stdlib.UInt_max, 2), v146);
    const v170 = stdlib.eq(v167, v169);
    stdlib.assert(v170, {
      at: './index.rsh:82:10:application',
      fs: [],
      msg: null,
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(stdlib.checkedBigNumberify('./index.rsh:84:18:decimal', stdlib.UInt_max, 1)), {
      at: './index.rsh:90:24:application',
      fs: ['at ./index.rsh:89:7:application call to [unknown function] (defined at: ./index.rsh:89:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v146, v147], secs: v149, time: v148, didSend: v59, from: v145 } = txn1;
  ;
  const v158 = stdlib.add(v148, v147);
  stdlib.protect(ctc1, await interact.updateShip(), {
    at: './index.rsh:74:24:application',
    fs: ['at ./index.rsh:73:11:application call to [unknown function] (defined at: ./index.rsh:73:15:function exp)'],
    msg: 'updateShip',
    who: 'Bob'
    });
  stdlib.protect(ctc3, await interact.getBoard(), {
    at: './index.rsh:75:37:application',
    fs: ['at ./index.rsh:73:11:application call to [unknown function] (defined at: ./index.rsh:73:15:function exp)'],
    msg: 'getBoard',
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.acceptWager(v146), {
    at: './index.rsh:76:25:application',
    fs: ['at ./index.rsh:73:11:application call to [unknown function] (defined at: ./index.rsh:73:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v145, v146, v158],
    evt_cnt: 0,
    funcNum: 1,
    lct: v148,
    onlyIf: true,
    out_tys: [],
    pay: [v146, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v165, time: v164, didSend: v69, from: v163 } = txn2;
      
      const v167 = stdlib.add(v146, v146);
      sim_r.txns.push({
        amt: v146,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v169 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:82:24:decimal', stdlib.UInt_max, 2), v146);
      const v170 = stdlib.eq(v167, v169);
      ;
      sim_r.txns.push({
        amt: v169,
        kind: 'from',
        to: v163,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v158],
    tys: [ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v145, v146, v158],
      evt_cnt: 0,
      funcNum: 2,
      lct: v148,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v184, time: v183, didSend: v100, from: v182 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v146,
          kind: 'from',
          to: v145,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v184, time: v183, didSend: v100, from: v182 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:60:29:application',
      fs: ['at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:59:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:58:28:function exp)', 'at ./index.rsh:79:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v165, time: v164, didSend: v69, from: v163 } = txn2;
    const v167 = stdlib.add(v146, v146);
    ;
    const v169 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:82:24:decimal', stdlib.UInt_max, 2), v146);
    const v170 = stdlib.eq(v167, v169);
    stdlib.assert(v170, {
      at: './index.rsh:82:10:application',
      fs: [],
      msg: null,
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(stdlib.checkedBigNumberify('./index.rsh:84:18:decimal', stdlib.UInt_max, 1)), {
      at: './index.rsh:90:24:application',
      fs: ['at ./index.rsh:89:7:application call to [unknown function] (defined at: ./index.rsh:89:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAGAAECCCggJgIBAAAiNQAxGEEBbylkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAAl0kkDEAAQCQSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhBFsPRLEisgE0AyEFW7III7IQNANXACCyB7NCAKxIIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQVbNf+ABJqLkXSwMgY0AyEEWwxENP+IANUkNP8LNf40/0kINP4SRLEisgE0/rIII7IQMQCyB7NCAFtIIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JVs1/oAErNEfwzT/FlA0/hZQsIGgjQaIAIE0/4gAfDIGNP4INf0xADT/FlA0/RZQKEsBVwAwZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 48,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v146",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v147",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v146",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v147",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516109da3803806109da8339810160408190526100229161021d565b600080805543600355604080516020810190915290815260408051835181526020808501518051828401520151918101919091527f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9060600160405180910390a16020820151516100969034146007610125565b60208083015101516100a89043610277565b81526040805160608082018352600060208084018281528486018381523380875289840151518352885182526001948590554390945586519283019390935251948101949094525190830152906080016040516020818303038152906040526002908051906020019061011c92919061014e565b505050506102d8565b8161014a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461015a9061029d565b90600052602060002090601f01602090048101928261017c57600085556101c2565b82601f1061019557805160ff19168380011785556101c2565b828001600101855582156101c2579182015b828111156101c25782518255916020019190600101906101a7565b506101ce9291506101d2565b5090565b5b808211156101ce57600081556001016101d3565b604080519081016001600160401b038111828210171561021757634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303606081121561023057600080fd5b6102386101e7565b835181526040601f198301121561024e57600080fd5b6102566101e7565b60208581015182526040909501518582015293810193909352509092915050565b6000821982111561029857634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806102b157607f821691505b602082108114156102d257634e487b7160e01b600052602260045260246000fd5b50919050565b6106f3806102e76000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780632c10a159146100785780637eea518c1461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b610052610086366004610520565b6100d6565b610052610099366004610520565b61028c565b3480156100aa57600080fd5b50600154610065565b3480156100bf57600080fd5b506100c8610408565b60405161006f929190610538565b6100e6600160005414600a6104a5565b610100813515806100f957506001548235145b600b6104a5565b60008080556002805461011290610595565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610595565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a391906105ca565b90506101bb6040518060200160405280600081525090565b6101cc82604001514310600c6104a5565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1836040516101fb9190610646565b60405180910390a16102148260200151341460086104a5565b6020820151610224906002610686565b8082526020830151610243919061023b90806106a5565b1460096104a5565b8051604051339180156108fc02916000818181858888f19350505050158015610270573d6000803e3d6000fd5b5060008080556001819055610287906002906104ca565b505050565b61029c600160005414600e6104a5565b6102b6813515806102af57506001548235145b600f6104a5565b6000808055600280546102c890610595565b80601f01602080910402602001604051908101604052809291908181526020018280546102f490610595565b80156103415780601f1061031657610100808354040283529160200191610341565b820191906000526020600020905b81548152906001019060200180831161032457829003601f168201915b505050505080602001905181019061035991906105ca565b905061036d816040015143101560106104a5565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e18260405161039c9190610646565b60405180910390a16103b03415600d6104a5565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156103ed573d6000803e3d6000fd5b5060008080556001819055610404906002906104ca565b5050565b60006060600054600280805461041d90610595565b80601f016020809104026020016040519081016040528092919081815260200182805461044990610595565b80156104965780601f1061046b57610100808354040283529160200191610496565b820191906000526020600020905b81548152906001019060200180831161047957829003601f168201915b50505050509050915091509091565b816104045760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546104d690610595565b6000825580601f106104e6575050565b601f0160209004906000526020600020908101906105049190610507565b50565b5b8082111561051c5760008155600101610508565b5090565b60006040828403121561053257600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561056c57858101830151858201606001528201610550565b8181111561057e576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806105a957607f821691505b6020821081141561053257634e487b7160e01b600052602260045260246000fd5b6000606082840312156105dc57600080fd5b6040516060810181811067ffffffffffffffff8211171561060d57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461062757600080fd5b8152602083810151908201526040928301519281019290925250919050565b8135815260408101602083013580151580821461066257600080fd5b806020850152505092915050565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156106a0576106a0610670565b500290565b600082198211156106b8576106b8610670565b50019056fea26469706673582212202fe9ca7c5fa20be8e21bdacf7a4d6f321f824e227eb7ac60b1214f506dfaa1c764736f6c634300080c0033`,
  BytecodeLen: 2522,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:71:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:79:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:87:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
