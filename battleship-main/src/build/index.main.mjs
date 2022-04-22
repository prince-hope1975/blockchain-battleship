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
      1: [ctc0, ctc1, ctc3, ctc1],
      4: [ctc0, ctc0, ctc1],
      5: [ctc0, ctc0, ctc1, ctc3],
      7: [ctc0, ctc0, ctc1],
      10: [ctc0, ctc0, ctc1],
      11: [ctc0, ctc0, ctc1, ctc3],
      12: [ctc0, ctc0, ctc1],
      13: [ctc0, ctc0, ctc1],
      14: [ctc0, ctc0, ctc1],
      15: [ctc0, ctc0, ctc1]
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
  
  
  const v729 = stdlib.protect(ctc1, interact.Ship, 'for Alice\'s interact field Ship');
  const v745 = stdlib.protect(ctc2, interact.deadline, 'for Alice\'s interact field deadline');
  const v746 = stdlib.protect(ctc2, interact.wager, 'for Alice\'s interact field wager');
  
  const v765 = stdlib.protect(ctc3, await interact.getBoard(), {
    at: './index.rsh:54:47:application',
    fs: ['at ./index.rsh:53:13:application call to [unknown function] (defined at: ./index.rsh:53:17:function exp)'],
    msg: 'getBoard',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v746, v745, v729],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:60:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc1],
    pay: [v746, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v867, v868, v869], secs: v871, time: v870, didSend: v187, from: v866 } = txn1;
      
      sim_r.txns.push({
        amt: v867,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v880 = stdlib.add(v870, v868);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v867, v868, v869], secs: v871, time: v870, didSend: v187, from: v866 } = txn1;
  ;
  const v880 = stdlib.add(v870, v868);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v880],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v866, v867, v869, v880],
      evt_cnt: 0,
      funcNum: 2,
      lct: v870,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1338, time: v1337, didSend: v664, from: v1336 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v867,
          kind: 'from',
          to: v866,
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
      tys: [ctc5, ctc2, ctc1, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1338, time: v1337, didSend: v664, from: v1336 } = txn3;
    ;
    ;
    stdlib.protect(ctc4, await interact.informTimeout(), {
      at: './index.rsh:49:29:application',
      fs: ['at ./index.rsh:48:9:application call to [unknown function] (defined at: ./index.rsh:48:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:47:28:function exp)', 'at ./index.rsh:70:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v987, time: v986, didSend: v297, from: v985 } = txn2;
    const v989 = stdlib.add(v867, v867);
    ;
    const v991 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:72:24:decimal', stdlib.UInt_max, '2'), v867);
    const v992 = stdlib.eq(v989, v991);
    stdlib.assert(v992, {
      at: './index.rsh:72:10:application',
      fs: [],
      msg: null,
      who: 'Alice'
      });
    const v993 = await stdlib.Array_asyncReduce([v869], false, async([v995], v994, v996) => {
      const v997 = v995 ? false : true;
      const v999 = v994 ? v994 : v997;
      
      return v999;})
    let v1000 = v993;
    let v1001 = v986;
    
    while (await (async () => {
      
      return v1000;})()) {
      const v1014 = stdlib.protect(ctc2, await interact.getHand(), {
        at: './index.rsh:80:52:application',
        fs: ['at ./index.rsh:79:15:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v866, v985, v991, v1014],
        evt_cnt: 1,
        funcNum: 6,
        lct: v1001,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:82:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v1016], secs: v1018, time: v1017, didSend: v325, from: v1015 } = txn3;
          
          ;
          const v1019 = stdlib.addressEq(v866, v1015);
          ;
          const v1020 = true;
          const v1021 = v1017;
          
          if (await (async () => {
            
            return v1020;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v1072 = true;
            const v1073 = v1021;
            
            if (await (async () => {
              
              return v1072;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }}
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc5, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v1016], secs: v1018, time: v1017, didSend: v325, from: v1015 } = txn3;
      ;
      const v1019 = stdlib.addressEq(v866, v1015);
      stdlib.assert(v1019, {
        at: './index.rsh:82:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      let v1020 = true;
      let v1021 = v1017;
      
      while (await (async () => {
        
        return v1020;})()) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 13,
          out_tys: [ctc2],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1036], secs: v1038, time: v1037, didSend: v341, from: v1035 } = txn4;
        ;
        const v1039 = stdlib.addressEq(v985, v1035);
        stdlib.assert(v1039, {
          at: './index.rsh:93:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v1042 = stdlib.mod(v1036, stdlib.checkedBigNumberify('./index.rsh:97:36:decimal', stdlib.UInt_max, '100'));
        const v1044 = v765[v1042];
        const v1045 = stdlib.eq(v1044, stdlib.checkedBigNumberify('./index.rsh:97:44:decimal', stdlib.UInt_max, '1'));
        if (v1045) {
          stdlib.protect(ctc4, await interact.updateShip(), {
            at: './index.rsh:99:30:application',
            fs: ['at ./index.rsh:96:17:application call to [unknown function] (defined at: ./index.rsh:96:21:function exp)'],
            msg: 'updateShip',
            who: 'Alice'
            });
          }
        else {
          }
        const v1046 = stdlib.protect(ctc1, await interact.getShip(), {
          at: './index.rsh:101:56:application',
          fs: ['at ./index.rsh:96:17:application call to [unknown function] (defined at: ./index.rsh:96:21:function exp)'],
          msg: 'getShip',
          who: 'Alice'
          });
        const v1061 = v1046[stdlib.checkedBigNumberify('./index.rsh:101:56:application', stdlib.UInt_max, '14')];
        stdlib.protect(ctc4, await interact.print(v1061), {
          at: './index.rsh:103:23:application',
          fs: ['at ./index.rsh:96:17:application call to [unknown function] (defined at: ./index.rsh:96:21:function exp)'],
          msg: 'print',
          who: 'Alice'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v866, v985, v991, v1045, v1061],
          evt_cnt: 2,
          funcNum: 14,
          lct: v1037,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:105:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v1065, v1066], secs: v1068, time: v1067, didSend: v373, from: v1064 } = txn5;
            
            ;
            const v1069 = stdlib.addressEq(v866, v1064);
            ;
            const v1070 = v1066 ? false : true;
            const v1071 = v1065 ? v1070 : false;
            const cv1020 = v1071;
            const cv1021 = v1067;
            
            await (async () => {
              const v1020 = cv1020;
              const v1021 = cv1021;
              
              if (await (async () => {
                
                return v1020;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1072 = true;
                const v1073 = v1021;
                
                if (await (async () => {
                  
                  return v1072;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.isHalt = false;
                  }}})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc5, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [v1065, v1066], secs: v1068, time: v1067, didSend: v373, from: v1064 } = txn5;
        ;
        const v1069 = stdlib.addressEq(v866, v1064);
        stdlib.assert(v1069, {
          at: './index.rsh:105:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v1070 = v1066 ? false : true;
        const v1071 = v1065 ? v1070 : false;
        const cv1020 = v1071;
        const cv1021 = v1067;
        
        v1020 = cv1020;
        v1021 = cv1021;
        
        continue;
        
        
        
        }
      let v1072 = true;
      let v1073 = v1021;
      
      while (await (async () => {
        
        return v1072;})()) {
        const v1086 = stdlib.protect(ctc2, await interact.getHand(), {
          at: './index.rsh:115:54:application',
          fs: ['at ./index.rsh:114:17:application call to [unknown function] (defined at: ./index.rsh:114:21:function exp)'],
          msg: 'getHand',
          who: 'Alice'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v866, v985, v991, v1086],
          evt_cnt: 1,
          funcNum: 11,
          lct: v1073,
          onlyIf: true,
          out_tys: [ctc2],
          pay: [stdlib.checkedBigNumberify('./index.rsh:118:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v1088], secs: v1090, time: v1089, didSend: v392, from: v1087 } = txn4;
            
            ;
            const v1091 = stdlib.addressEq(v866, v1087);
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc5, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [v1088], secs: v1090, time: v1089, didSend: v392, from: v1087 } = txn4;
        ;
        const v1091 = stdlib.addressEq(v866, v1087);
        stdlib.assert(v1091, {
          at: './index.rsh:118:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 12,
          out_tys: [ctc0, ctc0],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1217, v1218], secs: v1220, time: v1219, didSend: v524, from: v1216 } = txn5;
        ;
        const v1221 = stdlib.addressEq(v985, v1216);
        stdlib.assert(v1221, {
          at: './index.rsh:131:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v1222 = v1218 ? false : true;
        const v1223 = v1217 ? v1222 : false;
        const cv1072 = v1223;
        const cv1073 = v1219;
        
        v1072 = cv1072;
        v1073 = cv1073;
        
        continue;
        
        
        
        }
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 9,
        out_tys: [ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1243], secs: v1245, time: v1244, didSend: v552, from: v1242 } = txn4;
      ;
      const v1246 = stdlib.addressEq(v985, v1242);
      stdlib.assert(v1246, {
        at: './index.rsh:140:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v1249 = stdlib.protect(ctc1, await interact.getShip(), {
        at: './index.rsh:144:53:application',
        fs: ['at ./index.rsh:143:15:application call to [unknown function] (defined at: ./index.rsh:143:19:function exp)'],
        msg: 'getShip',
        who: 'Alice'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v866, v985, v991, v1243, v1249],
        evt_cnt: 1,
        funcNum: 10,
        lct: v1244,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:146:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v1266], secs: v1268, time: v1267, didSend: v577, from: v1265 } = txn5;
          
          ;
          const v1269 = stdlib.addressEq(v866, v1265);
          ;
          const v1270 = v1266[stdlib.checkedBigNumberify('./index.rsh:148:27:array ref', stdlib.UInt_max, '14')];
          const v1271 = v1243[stdlib.checkedBigNumberify('./index.rsh:148:43:array ref', stdlib.UInt_max, '14')];
          const v1272 = v1270 ? true : v1271;
          const v1273 = v1272 ? false : true;
          const cv1000 = v1273;
          const cv1001 = v1267;
          
          await (async () => {
            const v1000 = cv1000;
            const v1001 = cv1001;
            
            if (await (async () => {
              
              return v1000;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc5, ctc2, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v1266], secs: v1268, time: v1267, didSend: v577, from: v1265 } = txn5;
      ;
      const v1269 = stdlib.addressEq(v866, v1265);
      stdlib.assert(v1269, {
        at: './index.rsh:146:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v1270 = v1266[stdlib.checkedBigNumberify('./index.rsh:148:27:array ref', stdlib.UInt_max, '14')];
      const v1271 = v1243[stdlib.checkedBigNumberify('./index.rsh:148:43:array ref', stdlib.UInt_max, '14')];
      const v1272 = v1270 ? true : v1271;
      const v1273 = v1272 ? false : true;
      const cv1000 = v1273;
      const cv1001 = v1267;
      
      v1000 = cv1000;
      v1001 = cv1001;
      
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
    const {data: [v1293], secs: v1295, time: v1294, didSend: v606, from: v1292 } = txn3;
    ;
    const v1296 = stdlib.addressEq(v985, v1292);
    stdlib.assert(v1296, {
      at: './index.rsh:156:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v1299 = stdlib.protect(ctc1, await interact.getShip(), {
      at: './index.rsh:160:51:application',
      fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:17:function exp)'],
      msg: 'getShip',
      who: 'Alice'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v866, v985, v991, v1293, v1299],
      evt_cnt: 1,
      funcNum: 5,
      lct: v1294,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:162:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v1316], secs: v1318, time: v1317, didSend: v631, from: v1315 } = txn4;
        
        ;
        const v1319 = stdlib.addressEq(v866, v1315);
        ;
        const v1320 = v1316[stdlib.checkedBigNumberify('./index.rsh:164:29:array ref', stdlib.UInt_max, '14')];
        const v1321 = v1293[stdlib.checkedBigNumberify('./index.rsh:164:51:array ref', stdlib.UInt_max, '14')];
        const v1322 = v1321 ? false : true;
        const v1323 = v1320 ? true : v1322;
        const v1325 = v1323 ? v866 : v985;
        sim_r.txns.push({
          amt: v991,
          kind: 'from',
          to: v1325,
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
    const {data: [v1316], secs: v1318, time: v1317, didSend: v631, from: v1315 } = txn4;
    ;
    const v1319 = stdlib.addressEq(v866, v1315);
    stdlib.assert(v1319, {
      at: './index.rsh:162:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v1320 = v1316[stdlib.checkedBigNumberify('./index.rsh:164:29:array ref', stdlib.UInt_max, '14')];
    const v1321 = v1293[stdlib.checkedBigNumberify('./index.rsh:164:51:array ref', stdlib.UInt_max, '14')];
    const v1322 = v1321 ? false : true;
    const v1323 = v1320 ? true : v1322;
    const v1325 = v1323 ? v866 : v985;
    ;
    stdlib.protect(ctc4, await interact.seeOutcome(v1323), {
      at: './index.rsh:170:24:application',
      fs: ['at ./index.rsh:169:7:application call to [unknown function] (defined at: ./index.rsh:169:25:function exp)'],
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
  const {data: [v867, v868, v869], secs: v871, time: v870, didSend: v187, from: v866 } = txn1;
  ;
  const v880 = stdlib.add(v870, v868);
  stdlib.protect(ctc3, await interact.updateShip(), {
    at: './index.rsh:65:24:application',
    fs: ['at ./index.rsh:64:11:application call to [unknown function] (defined at: ./index.rsh:64:15:function exp)'],
    msg: 'updateShip',
    who: 'Bob'
    });
  stdlib.protect(ctc4, await interact.getBoard(), {
    at: './index.rsh:66:37:application',
    fs: ['at ./index.rsh:64:11:application call to [unknown function] (defined at: ./index.rsh:64:15:function exp)'],
    msg: 'getBoard',
    who: 'Bob'
    });
  stdlib.protect(ctc3, await interact.acceptWager(v867), {
    at: './index.rsh:67:25:application',
    fs: ['at ./index.rsh:64:11:application call to [unknown function] (defined at: ./index.rsh:64:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v866, v867, v869, v880],
    evt_cnt: 0,
    funcNum: 1,
    lct: v870,
    onlyIf: true,
    out_tys: [],
    pay: [v867, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v987, time: v986, didSend: v297, from: v985 } = txn2;
      
      const v989 = stdlib.add(v867, v867);
      sim_r.txns.push({
        amt: v867,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v991 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:72:24:decimal', stdlib.UInt_max, '2'), v867);
      const v992 = stdlib.eq(v989, v991);
      ;
      const v993 = await stdlib.Array_asyncReduce([v869], false, async([v995], v994, v996) => {
        const v997 = v995 ? false : true;
        const v999 = v994 ? v994 : v997;
        
        return v999;})
      const v1000 = v993;
      const v1001 = v986;
      
      if (await (async () => {
        
        return v1000;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v880],
    tys: [ctc5, ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v866, v867, v869, v880],
      evt_cnt: 0,
      funcNum: 2,
      lct: v870,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1338, time: v1337, didSend: v664, from: v1336 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v867,
          kind: 'from',
          to: v866,
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
      tys: [ctc5, ctc0, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1338, time: v1337, didSend: v664, from: v1336 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:49:29:application',
      fs: ['at ./index.rsh:48:9:application call to [unknown function] (defined at: ./index.rsh:48:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:47:28:function exp)', 'at ./index.rsh:70:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v987, time: v986, didSend: v297, from: v985 } = txn2;
    const v989 = stdlib.add(v867, v867);
    ;
    const v991 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:72:24:decimal', stdlib.UInt_max, '2'), v867);
    const v992 = stdlib.eq(v989, v991);
    stdlib.assert(v992, {
      at: './index.rsh:72:10:application',
      fs: [],
      msg: null,
      who: 'Bob'
      });
    const v993 = await stdlib.Array_asyncReduce([v869], false, async([v995], v994, v996) => {
      const v997 = v995 ? false : true;
      const v999 = v994 ? v994 : v997;
      
      return v999;})
    let v1000 = v993;
    let v1001 = v986;
    
    while (await (async () => {
      
      return v1000;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1016], secs: v1018, time: v1017, didSend: v325, from: v1015 } = txn3;
      ;
      const v1019 = stdlib.addressEq(v866, v1015);
      stdlib.assert(v1019, {
        at: './index.rsh:82:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      let v1020 = true;
      let v1021 = v1017;
      
      while (await (async () => {
        
        return v1020;})()) {
        const v1034 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:90:52:application',
          fs: ['at ./index.rsh:89:15:application call to [unknown function] (defined at: ./index.rsh:89:19:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v866, v985, v991, v1034],
          evt_cnt: 1,
          funcNum: 13,
          lct: v1021,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:93:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v1036], secs: v1038, time: v1037, didSend: v341, from: v1035 } = txn4;
            
            ;
            const v1039 = stdlib.addressEq(v985, v1035);
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc5, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [v1036], secs: v1038, time: v1037, didSend: v341, from: v1035 } = txn4;
        ;
        const v1039 = stdlib.addressEq(v985, v1035);
        stdlib.assert(v1039, {
          at: './index.rsh:93:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 14,
          out_tys: [ctc1, ctc1],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1065, v1066], secs: v1068, time: v1067, didSend: v373, from: v1064 } = txn5;
        ;
        const v1069 = stdlib.addressEq(v866, v1064);
        stdlib.assert(v1069, {
          at: './index.rsh:105:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v1070 = v1066 ? false : true;
        const v1071 = v1065 ? v1070 : false;
        const cv1020 = v1071;
        const cv1021 = v1067;
        
        v1020 = cv1020;
        v1021 = cv1021;
        
        continue;
        
        
        
        }
      let v1072 = true;
      let v1073 = v1021;
      
      while (await (async () => {
        
        return v1072;})()) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 11,
          out_tys: [ctc0],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1088], secs: v1090, time: v1089, didSend: v392, from: v1087 } = txn4;
        ;
        const v1091 = stdlib.addressEq(v866, v1087);
        stdlib.assert(v1091, {
          at: './index.rsh:118:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v1094 = stdlib.protect(ctc4, await interact.getBoard(), {
          at: './index.rsh:122:51:application',
          fs: ['at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:19:function exp)'],
          msg: 'getBoard',
          who: 'Bob'
          });
        const v1195 = stdlib.mod(v1088, stdlib.checkedBigNumberify('./index.rsh:123:38:decimal', stdlib.UInt_max, '100'));
        const v1197 = v1094[v1195];
        const v1198 = stdlib.eq(v1197, stdlib.checkedBigNumberify('./index.rsh:123:46:decimal', stdlib.UInt_max, '1'));
        if (v1198) {
          stdlib.protect(ctc3, await interact.updateShip(), {
            at: './index.rsh:125:30:application',
            fs: ['at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:19:function exp)'],
            msg: 'updateShip',
            who: 'Bob'
            });
          }
        else {
          }
        const v1199 = stdlib.protect(ctc2, await interact.getShip(), {
          at: './index.rsh:127:56:application',
          fs: ['at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:19:function exp)'],
          msg: 'getShip',
          who: 'Bob'
          });
        const v1214 = v1199[stdlib.checkedBigNumberify('./index.rsh:127:56:application', stdlib.UInt_max, '14')];
        stdlib.protect(ctc3, await interact.print(v1214), {
          at: './index.rsh:129:23:application',
          fs: ['at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:19:function exp)'],
          msg: 'print',
          who: 'Bob'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v866, v985, v991, v1198, v1214],
          evt_cnt: 2,
          funcNum: 12,
          lct: v1089,
          onlyIf: true,
          out_tys: [ctc1, ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:131:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v1217, v1218], secs: v1220, time: v1219, didSend: v524, from: v1216 } = txn5;
            
            ;
            const v1221 = stdlib.addressEq(v985, v1216);
            ;
            const v1222 = v1218 ? false : true;
            const v1223 = v1217 ? v1222 : false;
            const cv1072 = v1223;
            const cv1073 = v1219;
            
            await (async () => {
              const v1072 = cv1072;
              const v1073 = cv1073;
              
              if (await (async () => {
                
                return v1072;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc5, ctc0, ctc1, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [v1217, v1218], secs: v1220, time: v1219, didSend: v524, from: v1216 } = txn5;
        ;
        const v1221 = stdlib.addressEq(v985, v1216);
        stdlib.assert(v1221, {
          at: './index.rsh:131:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v1222 = v1218 ? false : true;
        const v1223 = v1217 ? v1222 : false;
        const cv1072 = v1223;
        const cv1073 = v1219;
        
        v1072 = cv1072;
        v1073 = cv1073;
        
        continue;
        
        
        
        }
      const v1226 = stdlib.protect(ctc2, await interact.getShip(), {
        at: './index.rsh:138:51:application',
        fs: ['at ./index.rsh:137:13:application call to [unknown function] (defined at: ./index.rsh:137:17:function exp)'],
        msg: 'getShip',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v866, v985, v991, v1226],
        evt_cnt: 1,
        funcNum: 9,
        lct: v1073,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:140:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v1243], secs: v1245, time: v1244, didSend: v552, from: v1242 } = txn4;
          
          ;
          const v1246 = stdlib.addressEq(v985, v1242);
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc5, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v1243], secs: v1245, time: v1244, didSend: v552, from: v1242 } = txn4;
      ;
      const v1246 = stdlib.addressEq(v985, v1242);
      stdlib.assert(v1246, {
        at: './index.rsh:140:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 10,
        out_tys: [ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1266], secs: v1268, time: v1267, didSend: v577, from: v1265 } = txn5;
      ;
      const v1269 = stdlib.addressEq(v866, v1265);
      stdlib.assert(v1269, {
        at: './index.rsh:146:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v1270 = v1266[stdlib.checkedBigNumberify('./index.rsh:148:27:array ref', stdlib.UInt_max, '14')];
      const v1271 = v1243[stdlib.checkedBigNumberify('./index.rsh:148:43:array ref', stdlib.UInt_max, '14')];
      const v1272 = v1270 ? true : v1271;
      const v1273 = v1272 ? false : true;
      const cv1000 = v1273;
      const cv1001 = v1267;
      
      v1000 = cv1000;
      v1001 = cv1001;
      
      continue;
      
      
      
      
      
      }
    const v1276 = stdlib.protect(ctc2, await interact.getShip(), {
      at: './index.rsh:154:49:application',
      fs: ['at ./index.rsh:153:11:application call to [unknown function] (defined at: ./index.rsh:153:15:function exp)'],
      msg: 'getShip',
      who: 'Bob'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v866, v985, v991, v1276],
      evt_cnt: 1,
      funcNum: 4,
      lct: v1001,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:156:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v1293], secs: v1295, time: v1294, didSend: v606, from: v1292 } = txn3;
        
        ;
        const v1296 = stdlib.addressEq(v985, v1292);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc5, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v1293], secs: v1295, time: v1294, didSend: v606, from: v1292 } = txn3;
    ;
    const v1296 = stdlib.addressEq(v985, v1292);
    stdlib.assert(v1296, {
      at: './index.rsh:156:7:dot',
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
    const {data: [v1316], secs: v1318, time: v1317, didSend: v631, from: v1315 } = txn4;
    ;
    const v1319 = stdlib.addressEq(v866, v1315);
    stdlib.assert(v1319, {
      at: './index.rsh:162:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v1320 = v1316[stdlib.checkedBigNumberify('./index.rsh:164:29:array ref', stdlib.UInt_max, '14')];
    const v1321 = v1293[stdlib.checkedBigNumberify('./index.rsh:164:51:array ref', stdlib.UInt_max, '14')];
    const v1322 = v1321 ? false : true;
    const v1323 = v1320 ? true : v1322;
    const v1325 = v1323 ? v866 : v985;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v1323), {
      at: './index.rsh:170:24:application',
      fs: ['at ./index.rsh:169:7:application call to [unknown function] (defined at: ./index.rsh:169:25:function exp)'],
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
  appApproval: `BiARAAFADgUMDQ8KCwQCCAYHNyAmAgEAACI1ADEYQQW3KWRJIls1ASEMWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBCQxAAjpJIQUMQAEiSSEGDEAAvkklDEAAXyUSRCEHNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BUlXAAEXNf5XAQEXNf2ABPZdK+Y0/hZRBwhQNP0WUQcIULA0/zEAEkQ0/zQDVyAgNAMkWzT+NP0UEDIGQgRISCU0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf9XICA1/iRbNf1JNQUXNfyABPh09240/BZQsDT+MQASRDT/NP5QNP0WUChLAVcASGdIIQc1ATIGNQJCBIhIIQY0ARJENARJIhJMNAISEUQoZEk1A1cgIDX/STUFSVcAARc1/lcBARc1/YAEM9M/ETT+FlEHCFA0/RZRBwhQsDT/MQASRDQDVwAgNP80AyRbNP40/RQQMgZCA8hJIQgMQACvSSEJDEAAWkghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/1cgIDX+JFs1/Uk1BRc1/IAEECMi/zT8FlCwNP8xABJENP80/lA0/RZQKEsBVwBIZ0ghBjUBMgY1AkIDw0ghCTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQU1/oAEIxOGbDT+ULA0/zEAEkQ0/zQDVyAgNAMkWzT+JVU0A1dIDyVVERQyBkIClUghCDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/1cgIDX+JFs1/Uk1BTX8gAQA6uG0NPxQsDT+MQASRDT/NP5QNP0WUDT8UChLAVcAV2dIIQk1ATIGNQJCAxpJIQoMQAEJSSEEDEAAp0khDQxAAEchDRJEIQ40ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFFzX+gARw7e96NP4WULA0/zEAEkQ0/zQDVyAgNAMkWyMyBkICJUghBDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQU1/oAE4v/UaDT+ULA0/zEAEkSxIrIBNAMkW7III7IQNANXICA0/zT+JVU0A1dIDyVVFBFNsgezQgJJSCEKNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/VyAgNf4kWzX9STUFNfyABGqbJp00/FCwNP4xABJENP80/lA0/RZQNPxQKEsBVwBXZ0ghBDUBMgY1AkICCkkjDEAAvEkhCwxAAEEhCxJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEPWw9EsSKyATQDIRBbsggjshA0A1cAILIHs0IBoEgjNAESRDQESSISTDQCEhFEKGRJNQMhEFs1/4AEmouRdLAyBjQDIQ9bDEQ0/4gBySELNP8LNf40/0kINP4SRCI1/SI1/DQDVygPNPxVSTX7FDT9SU01/TT8IwhJNfwhBwxA/+E0A1cAIDEANP40/TIGQgBoSCI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hDFs1/lcQDzX9gAQtmfphNP8WUDT+FlA0/VCwgaCNBogBSDT/iAFDMgY0/gg1/DEANP8WUDT9UDT8FlAoSwFXAD9nSCM1ATIGNQJCAOA1/zX+Nf01/DX7NP5BABw0+zT8UDT9FlAoSwFXAEhnSCEONQEyBjUCQgC1NPs0/FA0/RZQKEsBVwBIZ0ghCjUBMgY1AkIAmTX/Nf41/TX8Nfs0/kEAGzT7NPxQNP0WUChLAVcASGdIJTUBMgY1AkIAbzT7NPw0/SM0/0IAADX/Nf41/TX8Nfs0/kEAHDT7NPxQNP0WUChLAVcASGdIIQU1ATIGNQJCADg0+zT8UDT9FlAoSwFXAEhnSCEINQEyBjUCQgAcMRkhBBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
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
                "name": "v867",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v868",
                "type": "uint256"
              },
              {
                "internalType": "bool[15]",
                "name": "v869",
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
                "name": "v867",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v868",
                "type": "uint256"
              },
              {
                "internalType": "bool[15]",
                "name": "v869",
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
        "internalType": "struct T8",
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
            "components": [
              {
                "internalType": "bool[15]",
                "name": "v1266",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
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
                "name": "v1088",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
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
                "internalType": "bool",
                "name": "v1217",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v1218",
                "type": "bool"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
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
                "name": "v1036",
                "type": "uint256"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
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
                "internalType": "bool",
                "name": "v1065",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v1066",
                "type": "bool"
              }
            ],
            "internalType": "struct T31",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T32",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
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
        "internalType": "struct T8",
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
                "name": "v1293",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
                "name": "v1316",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
                "name": "v1016",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
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
                "internalType": "bool[15]",
                "name": "v1243",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
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
        "internalType": "struct T8",
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
            "components": [
              {
                "internalType": "bool[15]",
                "name": "v1266",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
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
                "name": "v1088",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
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
                "internalType": "bool",
                "name": "v1217",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v1218",
                "type": "bool"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
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
                "name": "v1036",
                "type": "uint256"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
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
                "internalType": "bool",
                "name": "v1065",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v1066",
                "type": "bool"
              }
            ],
            "internalType": "struct T31",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T32",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
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
        "internalType": "struct T8",
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
                "name": "v1293",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
                "name": "v1316",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
                "name": "v1016",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
                "internalType": "bool[15]",
                "name": "v1243",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
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
  Bytecode: `0x60806040526040516200236a3803806200236a8339810160408190526200002691620002be565b60008080554360035560408051602081018252918252517f2edb4cb1a68a508b300bbe382e71d681db6fc54cd68b1672ef4edca2513b8e74906200006e9033908590620003b0565b60405180910390a16020820151516200008b903414600762000115565b60208083015101516200009f9043620003fe565b8152620000ab6200013f565b3381526020808401805151828401525160409081015181840152835160608401526001600081905543905551620000e59183910162000425565b604051602081830303815290604052600290805190602001906200010b9291906200016d565b50505050620004a5565b816200013b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080516080810182526000808252602082015290810162000160620001fc565b8152602001600081525090565b8280546200017b9062000468565b90600052602060002090601f0160209004810192826200019f5760008555620001ea565b82601f10620001ba57805160ff1916838001178555620001ea565b82800160010185558215620001ea579182015b82811115620001ea578251825591602001919060010190620001cd565b50620001f89291506200021b565b5090565b604051806101e00160405280600f906020820280368337509192915050565b5b80821115620001f857600081556001016200021c565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200026d576200026d62000232565b60405290565b604051606081016001600160401b03811182821017156200026d576200026d62000232565b6040516101e081016001600160401b03811182821017156200026d576200026d62000232565b600081830361024080821215620002d457600080fd5b620002de62000248565b845181526020610220601f1985011215620002f857600080fd5b6200030262000273565b935080860151845260408601518185015286607f8701126200032357600080fd5b6200032d62000298565b9286019280888511156200034057600080fd5b606088015b858110156200036e5780518015158114620003605760008081fd5b835291830191830162000345565b50604086015250810192909252509392505050565b8060005b600f811015620003aa578151151584526020938401939091019060010162000387565b50505050565b6001600160a01b038316815281516020808301919091528083015180516040808501919091529181015160608401520151610260820190620003f6608084018262000383565b509392505050565b600082198211156200042057634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b0316815260208083015190820152604080830151610240830191620004569084018262000383565b50606083015161022083015292915050565b600181811c908216806200047d57607f821691505b602082108114156200049f57634e487b7160e01b600052602260045260246000fd5b50919050565b611eb580620004b56000396000f3fe6080604052600436106100d55760003560e01c80637eea518c11610079578063a721bda011610056578063a721bda0146101af578063ab53f2c6146101c2578063e5f2ae31146101e5578063f13f60f7146101f857005b80637eea518c146101745780638323075714610187578063980b6eac1461019c57005b80632c10a159116100b25780632c10a159146101285780633eb5063e1461013b57806351136f891461014e5780637cb13a201461016157005b8063042730d7146100de5780631e93b0f1146100f1578063206325221461011557005b366100dc57005b005b6100dc6100ec366004611919565b61020b565b3480156100fd57600080fd5b506003545b6040519081526020015b60405180910390f35b6100dc61012336600461194f565b6103b4565b6100dc610136366004611919565b610569565b6100dc61014936600461194f565b6107af565b6100dc61015c36600461194f565b610951565b6100dc61016f36600461197e565b610b1a565b6100dc610182366004611919565b610ccf565b34801561019357600080fd5b50600154610102565b6100dc6101aa366004611919565b610e32565b6100dc6101bd366004611919565b610fab565b3480156101ce57600080fd5b506101d761112d565b60405161010c92919061199a565b6100dc6101f336600461197e565b6111ca565b6100dc61020636600461194f565b611382565b61021b600c600054146027611524565b6102358135158061022e57506001548235145b6028611524565b600080805560028054610247906119f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610273906119f7565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b50505050508060200190518101906102d89190611a87565b90507f1dc5544514ba94425d58f6bb92e7d14ae74289c6e17bbbc41c92cb16fa8304dd338360405161030b929190611aef565b60405180910390a161031f34156025611524565b8051610337906001600160a01b031633146026611524565b604080516060810182526000808252602080830182815283850183815286516001600160a01b0390811686528784015116909152858501519052600d909155436001559151909161038a91839101611b16565b604051602081830303815290604052600290805190602001906103ae929190611795565b50505050565b6103c4600b600054146023611524565b6103de813515806103d757506001548235145b6024611524565b6000808055600280546103f0906119f7565b80601f016020809104026020016040519081016040528092919081815260200182805461041c906119f7565b80156104695780601f1061043e57610100808354040283529160200191610469565b820191906000526020600020905b81548152906001019060200180831161044c57829003601f168201915b50505050508060200190518101906104819190611c25565b90507fd2d5da8cec24908c3f0d1324ba5493c1e8572885b466e1c3a76f848e83fabd3a33836040516104b4929190611c81565b60405180910390a16104c834156021611524565b80516104e0906001600160a01b031633146022611524565b6104e8611819565b815181516001600160a01b0391821690526020808401518351921691015260408083015182519091015261052461020084016101e08501611cb5565b6105375760608201516101c0015161053a565b60015b610545576001610548565b60005b6020808301805192151590925290514391015261056481611549565b505050565b610579600160005414600a611524565b6105938135158061058c57506001548235145b600b611524565b6000808055600280546105a5906119f7565b80601f01602080910402602001604051908101604052809291908181526020018280546105d1906119f7565b801561061e5780601f106105f35761010080835404028352916020019161061e565b820191906000526020600020905b81548152906001019060200180831161060157829003601f168201915b50505050508060200190518101906106369190611cd2565b60408051608081018252600080825260208201819052918101829052606081019190915290915061066e82606001514310600c611524565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338460405161069f929190611d27565b60405180910390a16106b8826020015134146008611524565b60208201516106c8906002611d75565b80825260208301516106e791906106df9080611d94565b146009611524565b6000604082018190525b600f81101561075b57826040015181600f811061071057610710611c9f565b602002015115156060830152604082015161073c578160600151610735576001610742565b6000610742565b81604001515b151560408301528061075381611dac565b9150506106f1565b50604081015115156020820152610770611819565b825181516001600160a01b039091169052805133602091820152825182516040015282810151818301805191151590915251439101526103ae81611549565b6107bf6004600054146013611524565b6107d9813515806107d257506001548235145b6014611524565b6000808055600280546107eb906119f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610817906119f7565b80156108645780601f1061083957610100808354040283529160200191610864565b820191906000526020600020905b81548152906001019060200180831161084757829003601f168201915b505050505080602001905181019061087c9190611a87565b90507f2ba6d9b060b920a0e84b36e35f671c73b8c0e3afe239608380cfe4b403a01eda33836040516108af929190611c81565b60405180910390a16108c334156011611524565b60208101516108de906001600160a01b031633146012611524565b6108e661185d565b81516001600160a01b039081168252602080840151909116818301526040808401518184015280516101e081810190925291850190600f908390839080828437600092018290525060608501939093525050600590554360015560405161038a908290602001611e19565b6109616005600054146017611524565b61097b8135158061097457506001548235145b6018611524565b60008080556002805461098d906119f7565b80601f01602080910402602001604051908101604052809291908181526020018280546109b9906119f7565b8015610a065780601f106109db57610100808354040283529160200191610a06565b820191906000526020600020905b8154815290600101906020018083116109e957829003601f168201915b5050505050806020019051810190610a1e9190611c25565b90507ff20290593304ed42a8cfd640a8b5a4de47cb46cc99ca45389a41253cfaad98d03383604051610a51929190611c81565b60405180910390a1610a6534156015611524565b8051610a7d906001600160a01b031633146016611524565b610a8f61020083016101e08401611cb5565b610aaf5760608101516101c00151610aa8576001610ab2565b6000610ab2565b60015b610ac0578060200151610ac3565b80515b6001600160a01b03166108fc82604001519081150290604051600060405180830381858888f19350505050158015610aff573d6000803e3d6000fd5b5060008080556001819055610b1690600290611897565b5050565b610b2a600f600054146033611524565b610b4481351580610b3d57506001548235145b6034611524565b600080805560028054610b56906119f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610b82906119f7565b8015610bcf5780601f10610ba457610100808354040283529160200191610bcf565b820191906000526020600020905b815481529060010190602001808311610bb257829003601f168201915b5050505050806020019051810190610be79190611a87565b90507f1277d66a40a0791a8cc627b13bac6fd1d14dc2baae2cee5ba26357b4a02940183383604051610c1a929190611e62565b60405180910390a1610c2e34156031611524565b8051610c46906001600160a01b031633146032611524565b610c4e611819565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351820152610c8a91908501908501611cb5565b610c95576000610cb3565b610ca56060840160408501611cb5565b610cb0576001610cb3565b60005b6020808301805192151590925290514391015261056481611627565b610cdf600160005414600e611524565b610cf981351580610cf257506001548235145b600f611524565b600080805560028054610d0b906119f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610d37906119f7565b8015610d845780601f10610d5957610100808354040283529160200191610d84565b820191906000526020600020905b815481529060010190602001808311610d6757829003601f168201915b5050505050806020019051810190610d9c9190611cd2565b9050610db081606001514310156010611524565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610de1929190611d27565b60405180910390a1610df53415600d611524565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610aff573d6000803e3d6000fd5b610e42600760005414601b611524565b610e5c81351580610e5557506001548235145b601c611524565b600080805560028054610e6e906119f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610e9a906119f7565b8015610ee75780601f10610ebc57610100808354040283529160200191610ee7565b820191906000526020600020905b815481529060010190602001808311610eca57829003601f168201915b5050505050806020019051810190610eff9190611a87565b90507fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c3383604051610f32929190611aef565b60405180910390a1610f4634156019611524565b8051610f5e906001600160a01b03163314601a611524565b610f66611819565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151835190910152808201805160019052514391015261056481611627565b610fbb600e60005414602f611524565b610fd581351580610fce57506001548235145b6030611524565b600080805560028054610fe7906119f7565b80601f0160208091040260200160405190810160405280929190818152602001828054611013906119f7565b80156110605780601f1061103557610100808354040283529160200191611060565b820191906000526020600020905b81548152906001019060200180831161104357829003601f168201915b50505050508060200190518101906110789190611a87565b90507fa1a29d25206bc54ec2286c26a34a4fce9eb152cc3e251c38b4877f8853310cd133836040516110ab929190611aef565b60405180910390a16110bf3415602d611524565b60208101516110da906001600160a01b03163314602e611524565b604080516060810182526000808252602080830182815283850183815286516001600160a01b0390811686528784015116909152858501519052600f909155436001559151909161038a91839101611b16565b600060606000546002808054611142906119f7565b80601f016020809104026020016040519081016040528092919081815260200182805461116e906119f7565b80156111bb5780601f10611190576101008083540402835291602001916111bb565b820191906000526020600020905b81548152906001019060200180831161119e57829003601f168201915b50505050509050915091509091565b6111da600d60005414602b611524565b6111f4813515806111ed57506001548235145b602c611524565b600080805560028054611206906119f7565b80601f0160208091040260200160405190810160405280929190818152602001828054611232906119f7565b801561127f5780601f106112545761010080835404028352916020019161127f565b820191906000526020600020905b81548152906001019060200180831161126257829003601f168201915b50505050508060200190518101906112979190611a87565b90507fe6f7a067e57076265726a4e6d52c4c77789a780dc7a56ff30850f5840463bc0133836040516112ca929190611e62565b60405180910390a16112de34156029611524565b60208101516112f9906001600160a01b03163314602a611524565b611301611819565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151835182015261133d91908501908501611cb5565b611348576000611366565b6113586060840160408501611cb5565b611363576001611366565b60005b60208083018051921515909252905143910152610564816116de565b611392600a60005414601f611524565b6113ac813515806113a557506001548235145b6020611524565b6000808055600280546113be906119f7565b80601f01602080910402602001604051908101604052809291908181526020018280546113ea906119f7565b80156114375780601f1061140c57610100808354040283529160200191611437565b820191906000526020600020905b81548152906001019060200180831161141a57829003601f168201915b505050505080602001905181019061144f9190611a87565b90507f7ba5bed78c13cb01253d6da65c0111a9c757498d0b0f5f5a0b7d44a8c1a676973383604051611482929190611c81565b60405180910390a16114963415601d611524565b60208101516114b1906001600160a01b03163314601e611524565b6114b961185d565b81516001600160a01b039081168252602080840151909116818301526040808401518184015280516101e081810190925291850190600f908390839080828437600092018290525060608501939093525050600b90554360015560405161038a908290602001611e19565b81610b165760405163100960cb60e01b81526004810182905260240160405180910390fd5b602081015151156115ce5760408051606081018252600080825260208083018281528385018381528651516001600160a01b03908116865287518401511690915285518501519052600790915543600155915190916115aa91839101611b16565b60405160208183030381529060405260029080519060200190610564929190611795565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b03908116865287518401511690915285518501519052600490915543600155915190916115aa91839101611b16565b50565b602081015151156116885760408051606081018252600080825260208083018281528385018381528651516001600160a01b03908116865287518401511690915285518501519052600e90915543600155915190916115aa91839101611b16565b611690611819565b81515181516001600160a01b03918216905282516020908101518351921691810191909152825160409081015183519091015280820180516001905281840151820151905190910152610b16815b6020810151511561173f5760408051606081018252600080825260208083018281528385018381528651516001600160a01b03908116865287518401511690915285518501519052600c90915543600155915190916115aa91839101611b16565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b03908116865287518401511690915285518501519052600a90915543600155915190916115aa91839101611b16565b8280546117a1906119f7565b90600052602060002090601f0160209004810192826117c35760008555611809565b82601f106117dc57805160ff1916838001178555611809565b82800160010185558215611809579182015b828111156118095782518255916020019190600101906117ee565b506118159291506118cd565b5090565b6040805160a081018252600081830181815260608301829052608083018290528252825180840190935280835260208381019190915290919082015290565b905290565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016118586118e2565b5080546118a3906119f7565b6000825580601f106118b3575050565b601f01602090049060005260206000209081019061162491905b5b8082111561181557600081556001016118ce565b604051806101e00160405280600f906020820280368337509192915050565b60006040828403121561191357600080fd5b50919050565b60006040828403121561192b57600080fd5b6119358383611901565b9392505050565b6000610200828403121561191357600080fd5b6000610200828403121561196257600080fd5b611935838361193c565b60006060828403121561191357600080fd5b60006060828403121561199057600080fd5b611935838361196c565b82815260006020604081840152835180604085015260005b818110156119ce578581018301518582016060015282016119b2565b818111156119e0576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680611a0b57607f821691505b6020821081141561191357634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715611a6557611a65611a2c565b60405290565b80516001600160a01b0381168114611a8257600080fd5b919050565b600060608284031215611a9957600080fd5b6040516060810181811067ffffffffffffffff82111715611abc57611abc611a2c565b604052611ac883611a6b565b8152611ad660208401611a6b565b6020820152604083015160408201528091505092915050565b6001600160a01b038316815260608101611935602083018480358252602090810135910152565b81516001600160a01b039081168252602080840151909116908201526040918201519181019190915260600190565b801515811461162457600080fd5b600082601f830112611b6457600080fd5b6040516101e080820182811067ffffffffffffffff82111715611b8957611b89611a2c565b60405283018185821115611b9c57600080fd5b845b82811015611bbf578051611bb181611b45565b825260209182019101611b9e565b509195945050505050565b60006102408284031215611bdd57600080fd5b611be5611a42565b9050611bf082611a6b565b8152611bfe60208301611a6b565b602082015260408201516040820152611c1a8360608401611b53565b606082015292915050565b60006102408284031215611c3857600080fd5b6119358383611bca565b80358252602080830181830160005b600f811015611c79578135611c6581611b45565b151583529183019190830190600101611c51565b505050505050565b6001600160a01b038316815261022081016119356020830184611c42565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611cc757600080fd5b813561193581611b45565b60006102408284031215611ce557600080fd5b611ced611a42565b611cf683611a6b565b815260208301516020820152611d0f8460408501611b53565b60408201526102209290920151606083015250919050565b6001600160a01b038316815281356020808301919091526060820190830135611d4f81611b45565b8015156040840152509392505050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611d8f57611d8f611d5f565b500290565b60008219821115611da757611da7611d5f565b500190565b6000600019821415611dc057611dc0611d5f565b5060010190565b80516001600160a01b03908116835260208083015190911681840152604080830151908401526060808301519190840160005b600f811015611c79578351151582529282019290820190600101611dfa565b6102408101611e288284611dc7565b92915050565b803582526020810135611e4081611b45565b151560208301526040810135611e5581611b45565b8015156040840152505050565b6001600160a01b0383168152608081016119356020830184611e2e56fea2646970667358221220e9010668fe1e287516a2e01f9872514798a05f70b9e81010088f7a6ac2cc68e664736f6c634300080c0033`,
  BytecodeLen: 9066,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:61:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:70:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:151:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:157:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:167:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:77:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:135:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:141:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:113:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:119:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:88:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:94:15:after expr stmt semicolon',
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
