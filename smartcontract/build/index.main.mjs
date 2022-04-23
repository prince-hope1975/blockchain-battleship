// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

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
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      4: [ctc0, ctc0, ctc1],
      5: [ctc0, ctc0, ctc1, ctc3],
      7: [ctc0, ctc0, ctc1],
      8: [ctc0, ctc0, ctc1],
      9: [ctc0, ctc0, ctc1],
      10: [ctc0, ctc0, ctc1, ctc3]
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
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  
  
  const v649 = stdlib.protect(ctc1, interact.Ship, 'for Alice\'s interact field Ship');
  const v665 = stdlib.protect(ctc2, interact.deadline, 'for Alice\'s interact field deadline');
  const v666 = stdlib.protect(ctc2, interact.wager, 'for Alice\'s interact field wager');
  
  const v685 = stdlib.protect(ctc3, await interact.getBoard(), {
    at: './index.rsh:53:47:application',
    fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:17:function exp)'],
    msg: 'getBoard',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v666, v665, v649],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:59:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc1],
    pay: [v666, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v787, v788, v789], secs: v791, time: v790, didSend: v187, from: v786 } = txn1;
      
      sim_r.txns.push({
        amt: v787,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v800 = stdlib.add(v790, v788);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v787, v788, v789], secs: v791, time: v790, didSend: v187, from: v786 } = txn1;
  ;
  const v800 = stdlib.add(v790, v788);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v800],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v786, v787, v800],
      evt_cnt: 0,
      funcNum: 2,
      lct: v790,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1188, time: v1187, didSend: v602, from: v1186 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v787,
          kind: 'from',
          to: v786,
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
      tys: [ctc5, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1188, time: v1187, didSend: v602, from: v1186 } = txn3;
    ;
    ;
    stdlib.protect(ctc4, await interact.informTimeout(), {
      at: './index.rsh:48:29:application',
      fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:46:28:function exp)', 'at ./index.rsh:69:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v907, time: v906, didSend: v297, from: v905 } = txn2;
    const v909 = stdlib.add(v787, v787);
    ;
    const v911 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:71:24:decimal', stdlib.UInt_max, '2'), v787);
    const v912 = stdlib.eq(v909, v911);
    stdlib.assert(v912, {
      at: './index.rsh:71:10:application',
      fs: [],
      msg: null,
      who: 'Alice'
      });
    const v913 = {
      isTrue: true,
      shipsAlice: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
      shipsBob: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
      };
    let v914 = v913;
    let v915 = v906;
    
    while (await (async () => {
      const v926 = v914.isTrue;
      
      return v926;})()) {
      const v929 = stdlib.protect(ctc2, await interact.getHand(), {
        at: './index.rsh:79:52:application',
        fs: ['at ./index.rsh:78:15:application call to [unknown function] (defined at: ./index.rsh:78:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v786, v905, v911, v929],
        evt_cnt: 1,
        funcNum: 6,
        lct: v915,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:81:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v931], secs: v933, time: v932, didSend: v318, from: v930 } = txn3;
          
          ;
          const v934 = stdlib.addressEq(v786, v930);
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc5, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v931], secs: v933, time: v932, didSend: v318, from: v930 } = txn3;
      ;
      const v934 = stdlib.addressEq(v786, v930);
      stdlib.assert(v934, {
        at: './index.rsh:81:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 7,
        out_tys: [ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v939], secs: v941, time: v940, didSend: v328, from: v938 } = txn4;
      ;
      const v942 = stdlib.addressEq(v905, v938);
      stdlib.assert(v942, {
        at: './index.rsh:88:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v945 = stdlib.mod(v939, stdlib.checkedBigNumberify('./index.rsh:93:35:decimal', stdlib.UInt_max, '100'));
      const v947 = v685[v945];
      const v948 = stdlib.eq(v947, stdlib.checkedBigNumberify('./index.rsh:93:43:decimal', stdlib.UInt_max, '1'));
      if (v948) {
        stdlib.protect(ctc4, await interact.updateShip(), {
          at: './index.rsh:95:28:application',
          fs: ['at ./index.rsh:92:15:application call to [unknown function] (defined at: ./index.rsh:92:19:function exp)'],
          msg: 'updateShip',
          who: 'Alice'
          });
        }
      else {
        }
      const v949 = stdlib.protect(ctc1, await interact.getShip(), {
        at: './index.rsh:97:53:application',
        fs: ['at ./index.rsh:92:15:application call to [unknown function] (defined at: ./index.rsh:92:19:function exp)'],
        msg: 'getShip',
        who: 'Alice'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v786, v905, v911, v949],
        evt_cnt: 1,
        funcNum: 8,
        lct: v940,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:99:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v966], secs: v968, time: v967, didSend: v357, from: v965 } = txn5;
          
          ;
          const v969 = stdlib.addressEq(v786, v965);
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc5, ctc2, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v966], secs: v968, time: v967, didSend: v357, from: v965 } = txn5;
      ;
      const v969 = stdlib.addressEq(v786, v965);
      stdlib.assert(v969, {
        at: './index.rsh:99:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 9,
        out_tys: [ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1094], secs: v1096, time: v1095, didSend: v487, from: v1093 } = txn6;
      ;
      const v1097 = stdlib.addressEq(v905, v1093);
      stdlib.assert(v1097, {
        at: './index.rsh:112:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v1098 = await stdlib.Array_asyncReduce([v1094], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v1100], v1099, v1101) => {
        const v1103 = stdlib.add(v1099, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
        const v1104 = v1100 ? v1103 : v1099;
        
        return v1104;})
      const v1105 = await stdlib.Array_asyncReduce([v1094], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v1107], v1106, v1108) => {
        const v1110 = stdlib.add(v1106, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
        const v1111 = v1107 ? v1110 : v1106;
        
        return v1111;})
      const v1119 = v966[stdlib.checkedBigNumberify('./index.rsh:123:25:array ref', stdlib.UInt_max, '14')];
      const v1120 = v1094[stdlib.checkedBigNumberify('./index.rsh:123:41:array ref', stdlib.UInt_max, '14')];
      const v1121 = v1119 ? true : v1120;
      const v1122 = v1121 ? false : true;
      const v1123 = {
        isTrue: v1122,
        shipsAlice: v1105,
        shipsBob: v1098
        };
      const cv914 = v1123;
      const cv915 = v1095;
      
      v914 = cv914;
      v915 = cv915;
      
      continue;
      
      
      
      
      
      
      
      }
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1143], secs: v1145, time: v1144, didSend: v544, from: v1142 } = txn3;
    ;
    const v1146 = stdlib.addressEq(v905, v1142);
    stdlib.assert(v1146, {
      at: './index.rsh:134:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v1149 = stdlib.protect(ctc1, await interact.getShip(), {
      at: './index.rsh:138:51:application',
      fs: ['at ./index.rsh:137:13:application call to [unknown function] (defined at: ./index.rsh:137:17:function exp)'],
      msg: 'getShip',
      who: 'Alice'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v786, v905, v911, v1143, v1149],
      evt_cnt: 1,
      funcNum: 5,
      lct: v1144,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:140:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v1166], secs: v1168, time: v1167, didSend: v569, from: v1165 } = txn4;
        
        ;
        const v1169 = stdlib.addressEq(v786, v1165);
        ;
        const v1170 = v1166[stdlib.checkedBigNumberify('./index.rsh:142:29:array ref', stdlib.UInt_max, '14')];
        const v1171 = v1143[stdlib.checkedBigNumberify('./index.rsh:142:51:array ref', stdlib.UInt_max, '14')];
        const v1172 = v1171 ? false : true;
        const v1173 = v1170 ? true : v1172;
        const v1175 = v1173 ? v786 : v905;
        sim_r.txns.push({
          amt: v911,
          kind: 'from',
          to: v1175,
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
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc5, ctc2, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v1166], secs: v1168, time: v1167, didSend: v569, from: v1165 } = txn4;
    ;
    const v1169 = stdlib.addressEq(v786, v1165);
    stdlib.assert(v1169, {
      at: './index.rsh:140:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v1170 = v1166[stdlib.checkedBigNumberify('./index.rsh:142:29:array ref', stdlib.UInt_max, '14')];
    const v1171 = v1143[stdlib.checkedBigNumberify('./index.rsh:142:51:array ref', stdlib.UInt_max, '14')];
    const v1172 = v1171 ? false : true;
    const v1173 = v1170 ? true : v1172;
    const v1175 = v1173 ? v786 : v905;
    ;
    stdlib.protect(ctc4, await interact.seeOutcome(v1173), {
      at: './index.rsh:147:24:application',
      fs: ['at ./index.rsh:146:7:application call to [unknown function] (defined at: ./index.rsh:146:25:function exp)'],
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
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'));
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v787, v788, v789], secs: v791, time: v790, didSend: v187, from: v786 } = txn1;
  ;
  const v800 = stdlib.add(v790, v788);
  stdlib.protect(ctc3, await interact.updateShip(), {
    at: './index.rsh:64:24:application',
    fs: ['at ./index.rsh:63:11:application call to [unknown function] (defined at: ./index.rsh:63:15:function exp)'],
    msg: 'updateShip',
    who: 'Bob'
    });
  stdlib.protect(ctc4, await interact.getBoard(), {
    at: './index.rsh:65:37:application',
    fs: ['at ./index.rsh:63:11:application call to [unknown function] (defined at: ./index.rsh:63:15:function exp)'],
    msg: 'getBoard',
    who: 'Bob'
    });
  stdlib.protect(ctc3, await interact.acceptWager(v787), {
    at: './index.rsh:66:25:application',
    fs: ['at ./index.rsh:63:11:application call to [unknown function] (defined at: ./index.rsh:63:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v786, v787, v800],
    evt_cnt: 0,
    funcNum: 1,
    lct: v790,
    onlyIf: true,
    out_tys: [],
    pay: [v787, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v907, time: v906, didSend: v297, from: v905 } = txn2;
      
      const v909 = stdlib.add(v787, v787);
      sim_r.txns.push({
        amt: v787,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v911 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:71:24:decimal', stdlib.UInt_max, '2'), v787);
      const v912 = stdlib.eq(v909, v911);
      ;
      const v913 = {
        isTrue: true,
        shipsAlice: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        shipsBob: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v914 = v913;
      const v915 = v906;
      
      if (await (async () => {
        const v926 = v914.isTrue;
        
        return v926;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v800],
    tys: [ctc5, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v786, v787, v800],
      evt_cnt: 0,
      funcNum: 2,
      lct: v790,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1188, time: v1187, didSend: v602, from: v1186 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v787,
          kind: 'from',
          to: v786,
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
      tys: [ctc5, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1188, time: v1187, didSend: v602, from: v1186 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:48:29:application',
      fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:46:28:function exp)', 'at ./index.rsh:69:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v907, time: v906, didSend: v297, from: v905 } = txn2;
    const v909 = stdlib.add(v787, v787);
    ;
    const v911 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:71:24:decimal', stdlib.UInt_max, '2'), v787);
    const v912 = stdlib.eq(v909, v911);
    stdlib.assert(v912, {
      at: './index.rsh:71:10:application',
      fs: [],
      msg: null,
      who: 'Bob'
      });
    const v913 = {
      isTrue: true,
      shipsAlice: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
      shipsBob: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
      };
    let v914 = v913;
    let v915 = v906;
    
    while (await (async () => {
      const v926 = v914.isTrue;
      
      return v926;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v931], secs: v933, time: v932, didSend: v318, from: v930 } = txn3;
      ;
      const v934 = stdlib.addressEq(v786, v930);
      stdlib.assert(v934, {
        at: './index.rsh:81:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v937 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:86:50:application',
        fs: ['at ./index.rsh:85:13:application call to [unknown function] (defined at: ./index.rsh:85:17:function exp)'],
        msg: 'getHand',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v786, v905, v911, v937],
        evt_cnt: 1,
        funcNum: 7,
        lct: v932,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:88:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v939], secs: v941, time: v940, didSend: v328, from: v938 } = txn4;
          
          ;
          const v942 = stdlib.addressEq(v905, v938);
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc5, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v939], secs: v941, time: v940, didSend: v328, from: v938 } = txn4;
      ;
      const v942 = stdlib.addressEq(v905, v938);
      stdlib.assert(v942, {
        at: './index.rsh:88:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 8,
        out_tys: [ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v966], secs: v968, time: v967, didSend: v357, from: v965 } = txn5;
      ;
      const v969 = stdlib.addressEq(v786, v965);
      stdlib.assert(v969, {
        at: './index.rsh:99:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v972 = stdlib.protect(ctc4, await interact.getBoard(), {
        at: './index.rsh:103:49:application',
        fs: ['at ./index.rsh:102:13:application call to [unknown function] (defined at: ./index.rsh:102:17:function exp)'],
        msg: 'getBoard',
        who: 'Bob'
        });
      const v1073 = stdlib.mod(v931, stdlib.checkedBigNumberify('./index.rsh:104:40:decimal', stdlib.UInt_max, '100'));
      const v1075 = v972[v1073];
      const v1076 = stdlib.eq(v1075, stdlib.checkedBigNumberify('./index.rsh:104:48:decimal', stdlib.UInt_max, '1'));
      if (v1076) {
        stdlib.protect(ctc3, await interact.updateShip(), {
          at: './index.rsh:106:28:application',
          fs: ['at ./index.rsh:102:13:application call to [unknown function] (defined at: ./index.rsh:102:17:function exp)'],
          msg: 'updateShip',
          who: 'Bob'
          });
        }
      else {
        }
      const v1077 = stdlib.protect(ctc2, await interact.getShip(), {
        at: './index.rsh:108:51:application',
        fs: ['at ./index.rsh:102:13:application call to [unknown function] (defined at: ./index.rsh:102:17:function exp)'],
        msg: 'getShip',
        who: 'Bob'
        });
      
      const txn6 = await (ctc.sendrecv({
        args: [v786, v905, v911, v966, v1077],
        evt_cnt: 1,
        funcNum: 9,
        lct: v967,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:112:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v1094], secs: v1096, time: v1095, didSend: v487, from: v1093 } = txn6;
          
          ;
          const v1097 = stdlib.addressEq(v905, v1093);
          ;
          const v1098 = await stdlib.Array_asyncReduce([v1094], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v1100], v1099, v1101) => {
            const v1103 = stdlib.add(v1099, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
            const v1104 = v1100 ? v1103 : v1099;
            
            return v1104;})
          const v1105 = await stdlib.Array_asyncReduce([v1094], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v1107], v1106, v1108) => {
            const v1110 = stdlib.add(v1106, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
            const v1111 = v1107 ? v1110 : v1106;
            
            return v1111;})
          const v1119 = v966[stdlib.checkedBigNumberify('./index.rsh:123:25:array ref', stdlib.UInt_max, '14')];
          const v1120 = v1094[stdlib.checkedBigNumberify('./index.rsh:123:41:array ref', stdlib.UInt_max, '14')];
          const v1121 = v1119 ? true : v1120;
          const v1122 = v1121 ? false : true;
          const v1123 = {
            isTrue: v1122,
            shipsAlice: v1105,
            shipsBob: v1098
            };
          const cv914 = v1123;
          const cv915 = v1095;
          
          await (async () => {
            const v914 = cv914;
            const v915 = cv915;
            
            if (await (async () => {
              const v926 = v914.isTrue;
              
              return v926;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc5, ctc0, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v1094], secs: v1096, time: v1095, didSend: v487, from: v1093 } = txn6;
      ;
      const v1097 = stdlib.addressEq(v905, v1093);
      stdlib.assert(v1097, {
        at: './index.rsh:112:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v1098 = await stdlib.Array_asyncReduce([v1094], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v1100], v1099, v1101) => {
        const v1103 = stdlib.add(v1099, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
        const v1104 = v1100 ? v1103 : v1099;
        
        return v1104;})
      const v1105 = await stdlib.Array_asyncReduce([v1094], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v1107], v1106, v1108) => {
        const v1110 = stdlib.add(v1106, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
        const v1111 = v1107 ? v1110 : v1106;
        
        return v1111;})
      const v1119 = v966[stdlib.checkedBigNumberify('./index.rsh:123:25:array ref', stdlib.UInt_max, '14')];
      const v1120 = v1094[stdlib.checkedBigNumberify('./index.rsh:123:41:array ref', stdlib.UInt_max, '14')];
      const v1121 = v1119 ? true : v1120;
      const v1122 = v1121 ? false : true;
      const v1123 = {
        isTrue: v1122,
        shipsAlice: v1105,
        shipsBob: v1098
        };
      const cv914 = v1123;
      const cv915 = v1095;
      
      v914 = cv914;
      v915 = cv915;
      
      continue;
      
      
      
      
      
      
      
      }
    const v1126 = stdlib.protect(ctc2, await interact.getShip(), {
      at: './index.rsh:132:49:application',
      fs: ['at ./index.rsh:131:11:application call to [unknown function] (defined at: ./index.rsh:131:15:function exp)'],
      msg: 'getShip',
      who: 'Bob'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v786, v905, v911, v1126],
      evt_cnt: 1,
      funcNum: 4,
      lct: v915,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:134:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v1143], secs: v1145, time: v1144, didSend: v544, from: v1142 } = txn3;
        
        ;
        const v1146 = stdlib.addressEq(v905, v1142);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc5, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v1143], secs: v1145, time: v1144, didSend: v544, from: v1142 } = txn3;
    ;
    const v1146 = stdlib.addressEq(v905, v1142);
    stdlib.assert(v1146, {
      at: './index.rsh:134:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1166], secs: v1168, time: v1167, didSend: v569, from: v1165 } = txn4;
    ;
    const v1169 = stdlib.addressEq(v786, v1165);
    stdlib.assert(v1169, {
      at: './index.rsh:140:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v1170 = v1166[stdlib.checkedBigNumberify('./index.rsh:142:29:array ref', stdlib.UInt_max, '14')];
    const v1171 = v1143[stdlib.checkedBigNumberify('./index.rsh:142:51:array ref', stdlib.UInt_max, '14')];
    const v1172 = v1171 ? false : true;
    const v1173 = v1170 ? true : v1172;
    const v1175 = v1173 ? v786 : v905;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v1173), {
      at: './index.rsh:147:24:application',
      fs: ['at ./index.rsh:146:7:application call to [unknown function] (defined at: ./index.rsh:146:25:function exp)'],
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
  appApproval: `BiAPAAFACAUJBg4HAgQKDyggJgIBAAAiNQAxGEEErilkSSJbNQFJJVs1AoEQWzUINhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAjdJIQgMQAF1SSUMQAEWSSEFDEAAtCEFEkSxIrIBIQayEDQIshizIQs0ARJENARJIhJMNAISEUQoZEk1A1cgIDX/STUFNf6ABADq4bQ0/lCwNP8xABJEIjX9IjX8NP40/FU1+zT9SSMINPtNNf00/CMISTX8IQwMQP/iIjX8IjX7NP40+1U1+jT8SSMINPpNNfw0+yMISTX7IQwMQP/iNANXACA0/zQDJFs0A1dIDyEHVTT+IQdVERQWUQcINPwWUDT9FlAyBkIDAkghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/1cgIDX+JFs1/Uk1BTX8gAQVlFNeNPxQsDT/MQASRDT/NP5QNP0WUDT8UChLAVcAV2dIIQs1ATIGNQJCAx9IJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/1cgIDX+JFs1/Uk1BRc1/IAEcaixozT8FlCwNP4xABJENP80/lA0/RZQKEsBVwBIZ0ghBTUBMgY1AkICxkkhBgxAAFlIIQg0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf9XICA1/iRbNf1JNQUXNfyABHDt73o0/BZQsDT/MQASRDT/NP5QNP0WUChLAVcASGdIJTUBMgY1AkICZkghBDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQU1/oAE4v/UaDT+ULA0/zEAEkSxIrIBNAMkW7III7IQNANXICA0/zT+IQdVNANXSA8hB1UUEU2yB7NCAd5JIQkMQACjSSEKDEAAW0ghCjQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/1cgIDX+JFs1/Uk1BTX8gARqmyadNPxQsDT+MQASRDT/NP5QNP0WUDT8UChLAVcAV2dIIQQ1ATIGNQJCAaIhCRJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyENWw9EsSKyATQDIQ5bsggjshA0A1cAILIHs0IBNEkjDEAAYEgjNAESRDQESSISTDQCEhFEKGRJNQMhDls1/4AEmouRdLAyBjQDIQ1bDEQ0/4gBbyEJNP8LNf40/0kINP4SRDQDVwAgMQA0/oARAQAAAAAAAAAAAAAAAAAAAAAyBkIAg0giNAESRDQESSISTDQCEhFESTUFSUkiWzX/JVs1/lcQDzX9gAQtmfphNP8WUDT+FlA0/VCwgcCaDIgBA7EisgEhBrIQIrIYgAYGMQAyCRKyHoABBrIfs7Q9NQg0/4gA3zIGNP4INfwxADT/FlA0/BZQKEsBVwAwZ0gjNQEyBjUCQgB4Nf81/jX9Nfw1+zT+VwABF0EAHDT7NPxQNP0WUChLAVcASGdIIQg1ATIGNQJCAEk0+zT8UDT9FlAoSwFXAEhnSCEKNQEyBjUCQgAtMRkhBBJEsSKyASEGshA0CLIYIQSyGbOxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQIiNQhC/7w0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: {
    publish9: 1
    },
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 87,
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
                "name": "v787",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v788",
                "type": "uint256"
              },
              {
                "internalType": "bool[15]",
                "name": "v789",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "name": "v787",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v788",
                "type": "uint256"
              },
              {
                "internalType": "bool[15]",
                "name": "v789",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
        "internalType": "struct T9",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "internalType": "bool[15]",
                "name": "v1143",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "internalType": "bool[15]",
                "name": "v1166",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "name": "v931",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "name": "v939",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "internalType": "bool[15]",
                "name": "v966",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "internalType": "bool[15]",
                "name": "v1094",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
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
        "internalType": "struct T9",
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
        "internalType": "struct T9",
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
                "internalType": "bool[15]",
                "name": "v1143",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
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
            "components": [
              {
                "internalType": "bool[15]",
                "name": "v1166",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v931",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v939",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
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
            "components": [
              {
                "internalType": "bool[15]",
                "name": "v966",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
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
            "components": [
              {
                "internalType": "bool[15]",
                "name": "v1094",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001cd738038062001cd783398101604081905262000026916200027b565b60008080554360035560408051602081018252918252517f2edb4cb1a68a508b300bbe382e71d681db6fc54cd68b1672ef4edca2513b8e74906200006e903390859062000340565b60405180910390a16020820151516200008b90341460076200011f565b60208083015101516200009f9043620003ab565b8152604080516060808201835260006020808401828152848601838152338087528984015151835288518252600194859055439094558651928301939093525194810194909452519083015290608001604051602081830303815290604052600290805190602001906200011592919062000149565b505050506200040f565b81620001455760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015790620003d2565b90600052602060002090601f0160209004810192826200017b5760008555620001c6565b82601f106200019657805160ff1916838001178555620001c6565b82800160010185558215620001c6579182015b82811115620001c6578251825591602001919060010190620001a9565b50620001d4929150620001d8565b5090565b5b80821115620001d45760008155600101620001d9565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200022a576200022a620001ef565b60405290565b604051606081016001600160401b03811182821017156200022a576200022a620001ef565b6040516101e081016001600160401b03811182821017156200022a576200022a620001ef565b6000818303610240808212156200029157600080fd5b6200029b62000205565b845181526020610220601f1985011215620002b557600080fd5b620002bf62000230565b935080860151845260408601518185015286607f870112620002e057600080fd5b620002ea62000255565b928601928088851115620002fd57600080fd5b606088015b858110156200032b57805180151581146200031d5760008081fd5b835291830191830162000302565b50604086015250810192909252509392505050565b6001600160a01b038316815281516020808301919091528281015180516040808501919091528183015160608501520151610260830191906080840160005b600f811015620003a05782511515825291830191908301906001016200037f565b505050509392505050565b60008219821115620003cd57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620003e757607f821691505b602082108114156200040957634e487b7160e01b600052602260045260246000fd5b50919050565b6118b8806200041f6000396000f3fe60806040526004361061009a5760003560e01c80637eea518c116100615780637eea518c146101135780638323075714610126578063980b6eac1461013b578063ab53f2c61461014e578063ba7038da14610171578063f13f60f71461018457005b80631e93b0f1146100a35780632c10a159146100c75780633eb5063e146100da57806351136f89146100ed5780636cec5d461461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d53660046113b4565b610197565b6100a16100e83660046113ea565b61035c565b6100a16100fb3660046113ea565b610522565b6100a161010e3660046113b4565b6106eb565b6100a16101213660046113b4565b61086d565b34801561013257600080fd5b506001546100b4565b6100a16101493660046113b4565b6109d0565b34801561015a57600080fd5b50610163610b4f565b6040516100be929190611407565b6100a161017f3660046113ea565b610bec565b6100a16101923660046113ea565b610d8b565b6101a7600160005414600a611072565b6101c1813515806101ba57506001548235145b600b611072565b6000808055600280546101d390611464565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90611464565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b5050505050806020019051810190610264919061153b565b905061026e61117b565b61027f82604001514310600c611072565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516102b092919061158c565b60405180910390a16102c9826020015134146008611072565b60208201516102d99060026115da565b80825260208301516102f891906102f090806115f9565b146009611072565b602080820180516001905280516000920182905251604001526103196111b8565b825181516001600160a01b039091169052805133602091820152825182516040015282810151818301805191909152514391015261035681611097565b50505050565b61036c6004600054146013611072565b6103868135158061037f57506001548235145b6014611072565b60008080556002805461039890611464565b80601f01602080910402602001604051908101604052809291908181526020018280546103c490611464565b80156104115780601f106103e657610100808354040283529160200191610411565b820191906000526020600020905b8154815290600101906020018083116103f457829003601f168201915b50505050508060200190518101906104299190611611565b90507f2ba6d9b060b920a0e84b36e35f671c73b8c0e3afe239608380cfe4b403a01eda338360405161045c92919061169a565b60405180910390a161047034156011611072565b602081015161048b906001600160a01b031633146012611072565b610493611211565b81516001600160a01b039081168252602080840151909116818301526040808401518184015280516101e081810190925291850190600f90839083908082843760009201829052506060850193909352505060059055436001556040516104fe90829060200161170a565b6040516020818303038152906040526002908051906020019061035692919061124b565b6105326005600054146017611072565b61054c8135158061054557506001548235145b6018611072565b60008080556002805461055e90611464565b80601f016020809104026020016040519081016040528092919081815260200182805461058a90611464565b80156105d75780601f106105ac576101008083540402835291602001916105d7565b820191906000526020600020905b8154815290600101906020018083116105ba57829003601f168201915b50505050508060200190518101906105ef91906117c1565b90507ff20290593304ed42a8cfd640a8b5a4de47cb46cc99ca45389a41253cfaad98d0338360405161062292919061169a565b60405180910390a161063634156015611072565b805161064e906001600160a01b031633146016611072565b61066061020083016101e084016117f4565b6106805760608101516101c00151610679576001610683565b6000610683565b60015b610691578060200151610694565b80515b6001600160a01b03166108fc82604001519081150290604051600060405180830381858888f193505050501580156106d0573d6000803e3d6000fd5b50600080805560018190556106e7906002906112cf565b5050565b6106fb600860005414601f611072565b6107158135158061070e57506001548235145b6020611072565b60008080556002805461072790611464565b80601f016020809104026020016040519081016040528092919081815260200182805461075390611464565b80156107a05780601f10610775576101008083540402835291602001916107a0565b820191906000526020600020905b81548152906001019060200180831161078357829003601f168201915b50505050508060200190518101906107b89190611611565b90507fcf1141db81cf673bada35f0f89f1438399a69251ff5f66f15c1433b39ac0ad7433836040516107eb929190611811565b60405180910390a16107ff3415601d611072565b602081015161081a906001600160a01b03163314601e611072565b604080516060810182526000808252602080830182815283850183815286516001600160a01b0390811686528784015116909152858501519052600990915543600155915190916104fe91839101611838565b61087d600160005414600e611072565b6108978135158061089057506001548235145b600f611072565b6000808055600280546108a990611464565b80601f01602080910402602001604051908101604052809291908181526020018280546108d590611464565b80156109225780601f106108f757610100808354040283529160200191610922565b820191906000526020600020905b81548152906001019060200180831161090557829003601f168201915b505050505080602001905181019061093a919061153b565b905061094e81604001514310156010611072565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161097f92919061158c565b60405180910390a16109933415600d611072565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106d0573d6000803e3d6000fd5b6109e0600760005414601b611072565b6109fa813515806109f357506001548235145b601c611072565b600080805560028054610a0c90611464565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3890611464565b8015610a855780601f10610a5a57610100808354040283529160200191610a85565b820191906000526020600020905b815481529060010190602001808311610a6857829003601f168201915b5050505050806020019051810190610a9d9190611611565b90507fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c3383604051610ad0929190611811565b60405180910390a1610ae434156019611072565b8051610afc906001600160a01b03163314601a611072565b604080516060810182526000808252602080830182815283850183815286516001600160a01b0390811686528784015116909152858501519052600890915543600155915190916104fe91839101611838565b600060606000546002808054610b6490611464565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9090611464565b8015610bdd5780601f10610bb257610100808354040283529160200191610bdd565b820191906000526020600020905b815481529060010190602001808311610bc057829003601f168201915b50505050509050915091509091565b610bfc6009600054146023611072565b610c1681351580610c0f57506001548235145b6024611072565b600080805560028054610c2890611464565b80601f0160208091040260200160405190810160405280929190818152602001828054610c5490611464565b8015610ca15780601f10610c7657610100808354040283529160200191610ca1565b820191906000526020600020905b815481529060010190602001808311610c8457829003601f168201915b5050505050806020019051810190610cb99190611611565b90507fc3e9b5fe31dfebe33d0f7fd2f1b273edba4eb923a027deb4c9c8bfaaf101d5e53383604051610cec92919061169a565b60405180910390a1610d0034156021611072565b8051610d18906001600160a01b031633146022611072565b610d20611211565b81516001600160a01b039081168252602080840151909116818301526040808401518184015280516101e081810190925291850190600f908390839080828437600092018290525060608501939093525050600a9055436001556040516104fe90829060200161170a565b610d9b600a600054146027611072565b610db581351580610dae57506001548235145b6028611072565b600080805560028054610dc790611464565b80601f0160208091040260200160405190810160405280929190818152602001828054610df390611464565b8015610e405780601f10610e1557610100808354040283529160200191610e40565b820191906000526020600020905b815481529060010190602001808311610e2357829003601f168201915b5050505050806020019051810190610e5891906117c1565b9050610e62611309565b7f7ba5bed78c13cb01253d6da65c0111a9c757498d0b0f5f5a0b7d44a8c1a676973384604051610e9392919061169a565b60405180910390a1610ea734156025611072565b6020820151610ec2906001600160a01b031633146026611072565b6000602082018190525b600f811015610f3c576020840181600f8110610eea57610eea6117de565b602002016020810190610efd91906117f4565b151560408301819052610f14578160200151610f25565b60018260200151610f2591906115f9565b602083015280610f3481611867565b915050610ecc565b50602081015181526000608082018190525b600f811015610fbe576020840181600f8110610f6c57610f6c6117de565b602002016020810190610f7f91906117f4565b151560a08301819052610f96578160800151610fa7565b60018260800151610fa791906115f9565b608083015280610fb681611867565b915050610f4e565b5060808101516060808301919091528201516101c00151610ff057610feb61020084016101e085016117f4565b610ff3565b60015b610ffe576001611001565b60005b60c082018051911515909152606082015181516020015281519051604001526110286111b8565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260c0830151818301805191909152514391015261035681611097565b816106e75760405163100960cb60e01b81526004810182905260240160405180910390fd5b60208101515151156111225760408051606081018252600080825260208083018281528385018381528651516001600160a01b03908116865287518401511690915285518501519052600790915543600155915190916110f991839101611838565b6040516020818303038152906040526002908051906020019061111d92919061124b565b505050565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b03908116865287518401511690915285518501519052600490915543600155915190916110f991839101611838565b50565b6040518060400160405280600081526020016111b3604051806060016040528060001515815260200160008152602001600081525090565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016111b36040805160a081018252600091810182815260608201839052608082018390528152602081019190915290565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016111b3611368565b82805461125790611464565b90600052602060002090601f01602090048101928261127957600085556112bf565b82601f1061129257805160ff19168380011785556112bf565b828001600101855582156112bf579182015b828111156112bf5782518255916020019190600101906112a4565b506112cb929150611387565b5090565b5080546112db90611464565b6000825580601f106112eb575050565b601f0160209004906000526020600020908101906111789190611387565b6040518060e00160405280600081526020016000815260200160001515815260200160008152602001600081526020016000151581526020016111b3604051806060016040528060001515815260200160008152602001600081525090565b604051806101e00160405280600f906020820280368337509192915050565b5b808211156112cb5760008155600101611388565b6000604082840312156113ae57600080fd5b50919050565b6000604082840312156113c657600080fd5b6113d0838361139c565b9392505050565b600061020082840312156113ae57600080fd5b600061020082840312156113fd57600080fd5b6113d083836113d7565b82815260006020604081840152835180604085015260005b8181101561143b5785810183015185820160600152820161141f565b8181111561144d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061147857607f821691505b602082108114156113ae57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156114d2576114d2611499565b60405290565b6040516080810167ffffffffffffffff811182821017156114d2576114d2611499565b6040516101e0810167ffffffffffffffff811182821017156114d2576114d2611499565b80516001600160a01b038116811461153657600080fd5b919050565b60006060828403121561154d57600080fd5b6115556114af565b61155e8361151f565b815260208301516020820152604083015160408201528091505092915050565b801515811461117857600080fd5b6001600160a01b0383168152813560208083019190915260608201908301356115b48161157e565b8015156040840152509392505050565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156115f4576115f46115c4565b500290565b6000821982111561160c5761160c6115c4565b500190565b60006060828403121561162357600080fd5b61162b6114af565b6116348361151f565b81526116426020840161151f565b6020820152604083015160408201528091505092915050565b80358252602080830181830160005b600f81101561169257813561167e8161157e565b15158352918301919083019060010161166a565b505050505050565b6001600160a01b038316815261022081016113d0602083018461165b565b80516001600160a01b03908116835260208083015190911681840152604080830151908401526060808301519190840160005b600f8110156116925783511515825292820192908201906001016116eb565b610240810161171982846116b8565b92915050565b600061024080838503121561173357600080fd5b61173b6114d8565b91506117468361151f565b8252602061175581850161151f565b818401526040840151604084015284607f85011261177257600080fd5b61177a6114fb565b91840191808684111561178c57600080fd5b606086015b848110156117b15780516117a48161157e565b8352918301918301611791565b5060608501525091949350505050565b600061024082840312156117d457600080fd5b6113d0838361171f565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561180657600080fd5b81356113d08161157e565b6001600160a01b0383168152606081016113d0602083018480358252602090810135910152565b81516001600160a01b039081168252602080840151909116908201526040918201519181019190915260600190565b600060001982141561187b5761187b6115c4565b506001019056fea2646970667358221220a0660cfc77249de1031ee8b167e1051de4d52d2013c907ba5e9718e9442d6b0164736f6c634300080c0033`,
  BytecodeLen: 7383,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:60:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:69:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:129:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:135:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:144:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:76:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:82:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:89:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:100:13:after expr stmt semicolon',
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
