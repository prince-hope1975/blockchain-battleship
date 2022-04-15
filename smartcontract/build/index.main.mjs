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
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15));
  
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
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  const ctc5 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Address;
  
  
  const v308 = stdlib.protect(ctc1, interact.Ship, 'for Alice\'s interact field Ship');
  const v309 = stdlib.protect(ctc2, interact.deadline, 'for Alice\'s interact field deadline');
  const v310 = stdlib.protect(ctc2, interact.wager, 'for Alice\'s interact field wager');
  
  const v314 = stdlib.protect(ctc4, await interact.getBoard(), {
    at: './index.rsh:60:47:application',
    fs: ['at ./index.rsh:59:13:application call to [unknown function] (defined at: ./index.rsh:59:17:function exp)'],
    msg: 'getBoard',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v310, v309, v308],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc1],
    pay: [v310, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v316, v317, v318], secs: v320, time: v319, didSend: v57, from: v315 } = txn1;
      
      sim_r.txns.push({
        amt: v316,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v329 = stdlib.add(v319, v317);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v316, v317, v318], secs: v320, time: v319, didSend: v57, from: v315 } = txn1;
  ;
  const v329 = stdlib.add(v319, v317);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v329],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v315, v316, v318, v329],
      evt_cnt: 0,
      funcNum: 2,
      lct: v319,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v498, time: v497, didSend: v243, from: v496 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v316,
          kind: 'from',
          to: v315,
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
      tys: [ctc7, ctc2, ctc1, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v498, time: v497, didSend: v243, from: v496 } = txn3;
    ;
    ;
    stdlib.protect(ctc6, await interact.informTimeout(), {
      at: './index.rsh:55:29:application',
      fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:53:28:function exp)', 'at ./index.rsh:76:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v336, time: v335, didSend: v67, from: v334 } = txn2;
    const v338 = stdlib.add(v316, v316);
    ;
    const v340 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:78:24:decimal', stdlib.UInt_max, 2), v316);
    const v341 = stdlib.eq(v338, v340);
    stdlib.assert(v341, {
      at: './index.rsh:78:10:application',
      fs: [],
      msg: null,
      who: 'Alice'
      });
    const v342 = await stdlib.Array_asyncReduce([v318], false, async([v344], v343, v345) => {
      const v346 = v344 ? false : true;
      const v348 = v343 ? v343 : v346;
      
      return v348;})
    let v349 = v342;
    let v350 = v335;
    
    while (await (async () => {
      
      return v349;})()) {
      const v363 = stdlib.protect(ctc5, await interact.getHand(), {
        at: './index.rsh:86:52:application',
        fs: ['at ./index.rsh:85:15:application call to [unknown function] (defined at: ./index.rsh:85:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v315, v334, v340, v363],
        evt_cnt: 1,
        funcNum: 6,
        lct: v350,
        onlyIf: true,
        out_tys: [ctc5],
        pay: [stdlib.checkedBigNumberify('./index.rsh:88:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v365], secs: v367, time: v366, didSend: v95, from: v364 } = txn3;
          
          ;
          const v368 = stdlib.addressEq(v315, v364);
          ;
          const v369 = true;
          const v370 = v366;
          
          if (await (async () => {
            
            return v369;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v406 = true;
            const v407 = v370;
            
            if (await (async () => {
              
              return v406;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }}
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc7, ctc2, ctc5],
        waitIfNotPresent: false
        }));
      const {data: [v365], secs: v367, time: v366, didSend: v95, from: v364 } = txn3;
      ;
      const v368 = stdlib.addressEq(v315, v364);
      stdlib.assert(v368, {
        at: './index.rsh:88:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      let v369 = true;
      let v370 = v366;
      
      while (await (async () => {
        
        return v369;})()) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 13,
          out_tys: [ctc2, ctc2],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v387, v388], secs: v390, time: v389, didSend: v114, from: v386 } = txn4;
        ;
        const v391 = stdlib.addressEq(v334, v386);
        stdlib.assert(v391, {
          at: './index.rsh:99:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v394 = stdlib.mod(v387, stdlib.checkedBigNumberify('./index.rsh:103:37:decimal', stdlib.UInt_max, 10));
        const v396 = v314[v394];
        const v397 = stdlib.mod(v388, stdlib.checkedBigNumberify('./index.rsh:103:52:decimal', stdlib.UInt_max, 10));
        const v399 = v396[v397];
        const v400 = stdlib.eq(v399, stdlib.checkedBigNumberify('./index.rsh:103:59:decimal', stdlib.UInt_max, 1));
        stdlib.protect(ctc6, await interact.print(v400), {
          at: './index.rsh:104:23:application',
          fs: ['at ./index.rsh:102:17:application call to [unknown function] (defined at: ./index.rsh:102:21:function exp)'],
          msg: 'print',
          who: 'Alice'
          });
        if (v400) {
          stdlib.protect(ctc6, await interact.updateShip(), {
            at: './index.rsh:106:30:application',
            fs: ['at ./index.rsh:102:17:application call to [unknown function] (defined at: ./index.rsh:102:21:function exp)'],
            msg: 'updateShip',
            who: 'Alice'
            });
          }
        else {
          }
        
        const txn5 = await (ctc.sendrecv({
          args: [v315, v334, v340, v400],
          evt_cnt: 1,
          funcNum: 14,
          lct: v389,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:109:13:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v402], secs: v404, time: v403, didSend: v130, from: v401 } = txn5;
            
            ;
            const v405 = stdlib.addressEq(v315, v401);
            ;
            const cv369 = v402;
            const cv370 = v403;
            
            await (async () => {
              const v369 = cv369;
              const v370 = cv370;
              
              if (await (async () => {
                
                return v369;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v406 = true;
                const v407 = v370;
                
                if (await (async () => {
                  
                  return v406;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.isHalt = false;
                  }}})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc7, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [v402], secs: v404, time: v403, didSend: v130, from: v401 } = txn5;
        ;
        const v405 = stdlib.addressEq(v315, v401);
        stdlib.assert(v405, {
          at: './index.rsh:109:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const cv369 = v402;
        const cv370 = v403;
        
        v369 = cv369;
        v370 = cv370;
        
        continue;
        
        
        
        }
      let v406 = true;
      let v407 = v370;
      
      while (await (async () => {
        
        return v406;})()) {
        const v420 = stdlib.protect(ctc5, await interact.getHand(), {
          at: './index.rsh:119:54:application',
          fs: ['at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:21:function exp)'],
          msg: 'getHand',
          who: 'Alice'
          });
        const v421 = v420[stdlib.checkedBigNumberify('./index.rsh:120:15:array', stdlib.UInt_max, 0)];
        const v422 = v420[stdlib.checkedBigNumberify('./index.rsh:120:15:array', stdlib.UInt_max, 1)];
        
        const txn4 = await (ctc.sendrecv({
          args: [v315, v334, v340, v421, v422],
          evt_cnt: 2,
          funcNum: 11,
          lct: v407,
          onlyIf: true,
          out_tys: [ctc2, ctc2],
          pay: [stdlib.checkedBigNumberify('./index.rsh:122:13:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v424, v425], secs: v427, time: v426, didSend: v149, from: v423 } = txn4;
            
            ;
            const v428 = stdlib.addressEq(v315, v423);
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc7, ctc2, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [v424, v425], secs: v427, time: v426, didSend: v149, from: v423 } = txn4;
        ;
        const v428 = stdlib.addressEq(v315, v423);
        stdlib.assert(v428, {
          at: './index.rsh:122:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 12,
          out_tys: [ctc0],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v440], secs: v442, time: v441, didSend: v166, from: v439 } = txn5;
        ;
        const v443 = stdlib.addressEq(v334, v439);
        stdlib.assert(v443, {
          at: './index.rsh:133:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const cv406 = v440;
        const cv407 = v441;
        
        v406 = cv406;
        v407 = cv407;
        
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
      const {data: [v448], secs: v450, time: v449, didSend: v176, from: v447 } = txn4;
      ;
      const v451 = stdlib.addressEq(v334, v447);
      stdlib.assert(v451, {
        at: './index.rsh:142:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v454 = stdlib.protect(ctc1, await interact.getShip(), {
        at: './index.rsh:146:53:application',
        fs: ['at ./index.rsh:145:15:application call to [unknown function] (defined at: ./index.rsh:145:19:function exp)'],
        msg: 'getShip',
        who: 'Alice'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v315, v334, v340, v448, v454],
        evt_cnt: 1,
        funcNum: 10,
        lct: v449,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:148:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v456], secs: v458, time: v457, didSend: v186, from: v455 } = txn5;
          
          ;
          const v459 = stdlib.addressEq(v315, v455);
          ;
          const v460 = v456[stdlib.checkedBigNumberify('./index.rsh:150:27:array ref', stdlib.UInt_max, 14)];
          const v461 = v448[stdlib.checkedBigNumberify('./index.rsh:150:43:array ref', stdlib.UInt_max, 14)];
          const v462 = v460 ? true : v461;
          const v463 = v462 ? false : true;
          const cv349 = v463;
          const cv350 = v457;
          
          await (async () => {
            const v349 = cv349;
            const v350 = cv350;
            
            if (await (async () => {
              
              return v349;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc7, ctc2, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v456], secs: v458, time: v457, didSend: v186, from: v455 } = txn5;
      ;
      const v459 = stdlib.addressEq(v315, v455);
      stdlib.assert(v459, {
        at: './index.rsh:148:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v460 = v456[stdlib.checkedBigNumberify('./index.rsh:150:27:array ref', stdlib.UInt_max, 14)];
      const v461 = v448[stdlib.checkedBigNumberify('./index.rsh:150:43:array ref', stdlib.UInt_max, 14)];
      const v462 = v460 ? true : v461;
      const v463 = v462 ? false : true;
      const cv349 = v463;
      const cv350 = v457;
      
      v349 = cv349;
      v350 = cv350;
      
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
    const {data: [v468], secs: v470, time: v469, didSend: v200, from: v467 } = txn3;
    ;
    const v471 = stdlib.addressEq(v334, v467);
    stdlib.assert(v471, {
      at: './index.rsh:158:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v474 = stdlib.protect(ctc1, await interact.getShip(), {
      at: './index.rsh:162:51:application',
      fs: ['at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:17:function exp)'],
      msg: 'getShip',
      who: 'Alice'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v315, v334, v340, v468, v474],
      evt_cnt: 1,
      funcNum: 5,
      lct: v469,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v476], secs: v478, time: v477, didSend: v210, from: v475 } = txn4;
        
        ;
        const v479 = stdlib.addressEq(v315, v475);
        ;
        const v480 = v476[stdlib.checkedBigNumberify('./index.rsh:166:29:array ref', stdlib.UInt_max, 14)];
        const v481 = v468[stdlib.checkedBigNumberify('./index.rsh:166:51:array ref', stdlib.UInt_max, 14)];
        const v482 = v481 ? false : true;
        const v483 = v480 ? true : v482;
        const v485 = v483 ? v315 : v334;
        sim_r.txns.push({
          amt: v340,
          kind: 'from',
          to: v485,
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
      tys: [ctc7, ctc7, ctc2, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v476], secs: v478, time: v477, didSend: v210, from: v475 } = txn4;
    ;
    const v479 = stdlib.addressEq(v315, v475);
    stdlib.assert(v479, {
      at: './index.rsh:164:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v480 = v476[stdlib.checkedBigNumberify('./index.rsh:166:29:array ref', stdlib.UInt_max, 14)];
    const v481 = v468[stdlib.checkedBigNumberify('./index.rsh:166:51:array ref', stdlib.UInt_max, 14)];
    const v482 = v481 ? false : true;
    const v483 = v480 ? true : v482;
    const v485 = v483 ? v315 : v334;
    ;
    stdlib.protect(ctc6, await interact.seeOutcome(v483), {
      at: './index.rsh:172:24:application',
      fs: ['at ./index.rsh:171:7:application call to [unknown function] (defined at: ./index.rsh:171:25:function exp)'],
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
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15));
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  const ctc6 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc7 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v316, v317, v318], secs: v320, time: v319, didSend: v57, from: v315 } = txn1;
  ;
  const v329 = stdlib.add(v319, v317);
  stdlib.protect(ctc3, await interact.updateShip(), {
    at: './index.rsh:71:24:application',
    fs: ['at ./index.rsh:70:11:application call to [unknown function] (defined at: ./index.rsh:70:15:function exp)'],
    msg: 'updateShip',
    who: 'Bob'
    });
  stdlib.protect(ctc5, await interact.getBoard(), {
    at: './index.rsh:72:37:application',
    fs: ['at ./index.rsh:70:11:application call to [unknown function] (defined at: ./index.rsh:70:15:function exp)'],
    msg: 'getBoard',
    who: 'Bob'
    });
  stdlib.protect(ctc3, await interact.acceptWager(v316), {
    at: './index.rsh:73:25:application',
    fs: ['at ./index.rsh:70:11:application call to [unknown function] (defined at: ./index.rsh:70:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v315, v316, v318, v329],
    evt_cnt: 0,
    funcNum: 1,
    lct: v319,
    onlyIf: true,
    out_tys: [],
    pay: [v316, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v336, time: v335, didSend: v67, from: v334 } = txn2;
      
      const v338 = stdlib.add(v316, v316);
      sim_r.txns.push({
        amt: v316,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v340 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:78:24:decimal', stdlib.UInt_max, 2), v316);
      const v341 = stdlib.eq(v338, v340);
      ;
      const v342 = await stdlib.Array_asyncReduce([v318], false, async([v344], v343, v345) => {
        const v346 = v344 ? false : true;
        const v348 = v343 ? v343 : v346;
        
        return v348;})
      const v349 = v342;
      const v350 = v335;
      
      if (await (async () => {
        
        return v349;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v329],
    tys: [ctc7, ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v315, v316, v318, v329],
      evt_cnt: 0,
      funcNum: 2,
      lct: v319,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v498, time: v497, didSend: v243, from: v496 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v316,
          kind: 'from',
          to: v315,
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
      tys: [ctc7, ctc0, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v498, time: v497, didSend: v243, from: v496 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:55:29:application',
      fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:53:28:function exp)', 'at ./index.rsh:76:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v336, time: v335, didSend: v67, from: v334 } = txn2;
    const v338 = stdlib.add(v316, v316);
    ;
    const v340 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:78:24:decimal', stdlib.UInt_max, 2), v316);
    const v341 = stdlib.eq(v338, v340);
    stdlib.assert(v341, {
      at: './index.rsh:78:10:application',
      fs: [],
      msg: null,
      who: 'Bob'
      });
    const v342 = await stdlib.Array_asyncReduce([v318], false, async([v344], v343, v345) => {
      const v346 = v344 ? false : true;
      const v348 = v343 ? v343 : v346;
      
      return v348;})
    let v349 = v342;
    let v350 = v335;
    
    while (await (async () => {
      
      return v349;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v365], secs: v367, time: v366, didSend: v95, from: v364 } = txn3;
      ;
      const v368 = stdlib.addressEq(v315, v364);
      stdlib.assert(v368, {
        at: './index.rsh:88:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      let v369 = true;
      let v370 = v366;
      
      while (await (async () => {
        
        return v369;})()) {
        const v383 = stdlib.protect(ctc6, await interact.getHand(), {
          at: './index.rsh:96:52:application',
          fs: ['at ./index.rsh:95:15:application call to [unknown function] (defined at: ./index.rsh:95:19:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        const v384 = v383[stdlib.checkedBigNumberify('./index.rsh:97:15:array', stdlib.UInt_max, 0)];
        const v385 = v383[stdlib.checkedBigNumberify('./index.rsh:97:15:array', stdlib.UInt_max, 1)];
        
        const txn4 = await (ctc.sendrecv({
          args: [v315, v334, v340, v384, v385],
          evt_cnt: 2,
          funcNum: 13,
          lct: v370,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:99:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v387, v388], secs: v390, time: v389, didSend: v114, from: v386 } = txn4;
            
            ;
            const v391 = stdlib.addressEq(v334, v386);
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc7, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [v387, v388], secs: v390, time: v389, didSend: v114, from: v386 } = txn4;
        ;
        const v391 = stdlib.addressEq(v334, v386);
        stdlib.assert(v391, {
          at: './index.rsh:99:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 14,
          out_tys: [ctc1],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v402], secs: v404, time: v403, didSend: v130, from: v401 } = txn5;
        ;
        const v405 = stdlib.addressEq(v315, v401);
        stdlib.assert(v405, {
          at: './index.rsh:109:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const cv369 = v402;
        const cv370 = v403;
        
        v369 = cv369;
        v370 = cv370;
        
        continue;
        
        
        
        }
      let v406 = true;
      let v407 = v370;
      
      while (await (async () => {
        
        return v406;})()) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 11,
          out_tys: [ctc0, ctc0],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v424, v425], secs: v427, time: v426, didSend: v149, from: v423 } = txn4;
        ;
        const v428 = stdlib.addressEq(v315, v423);
        stdlib.assert(v428, {
          at: './index.rsh:122:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v431 = stdlib.protect(ctc5, await interact.getBoard(), {
          at: './index.rsh:126:51:application',
          fs: ['at ./index.rsh:125:15:application call to [unknown function] (defined at: ./index.rsh:125:19:function exp)'],
          msg: 'getBoard',
          who: 'Bob'
          });
        const v432 = stdlib.mod(v424, stdlib.checkedBigNumberify('./index.rsh:127:39:decimal', stdlib.UInt_max, 10));
        const v434 = v431[v432];
        const v435 = stdlib.mod(v425, stdlib.checkedBigNumberify('./index.rsh:127:56:decimal', stdlib.UInt_max, 10));
        const v437 = v434[v435];
        const v438 = stdlib.eq(v437, stdlib.checkedBigNumberify('./index.rsh:127:63:decimal', stdlib.UInt_max, 1));
        stdlib.protect(ctc3, await interact.print(v438), {
          at: './index.rsh:128:23:application',
          fs: ['at ./index.rsh:125:15:application call to [unknown function] (defined at: ./index.rsh:125:19:function exp)'],
          msg: 'print',
          who: 'Bob'
          });
        if (v438) {
          stdlib.protect(ctc3, await interact.updateShip(), {
            at: './index.rsh:130:30:application',
            fs: ['at ./index.rsh:125:15:application call to [unknown function] (defined at: ./index.rsh:125:19:function exp)'],
            msg: 'updateShip',
            who: 'Bob'
            });
          }
        else {
          }
        
        const txn5 = await (ctc.sendrecv({
          args: [v315, v334, v340, v438],
          evt_cnt: 1,
          funcNum: 12,
          lct: v426,
          onlyIf: true,
          out_tys: [ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:133:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v440], secs: v442, time: v441, didSend: v166, from: v439 } = txn5;
            
            ;
            const v443 = stdlib.addressEq(v334, v439);
            ;
            const cv406 = v440;
            const cv407 = v441;
            
            await (async () => {
              const v406 = cv406;
              const v407 = cv407;
              
              if (await (async () => {
                
                return v406;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc7, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [v440], secs: v442, time: v441, didSend: v166, from: v439 } = txn5;
        ;
        const v443 = stdlib.addressEq(v334, v439);
        stdlib.assert(v443, {
          at: './index.rsh:133:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const cv406 = v440;
        const cv407 = v441;
        
        v406 = cv406;
        v407 = cv407;
        
        continue;
        
        
        
        }
      const v446 = stdlib.protect(ctc2, await interact.getShip(), {
        at: './index.rsh:140:51:application',
        fs: ['at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)'],
        msg: 'getShip',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v315, v334, v340, v446],
        evt_cnt: 1,
        funcNum: 9,
        lct: v407,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:142:9:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v448], secs: v450, time: v449, didSend: v176, from: v447 } = txn4;
          
          ;
          const v451 = stdlib.addressEq(v334, v447);
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc7, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v448], secs: v450, time: v449, didSend: v176, from: v447 } = txn4;
      ;
      const v451 = stdlib.addressEq(v334, v447);
      stdlib.assert(v451, {
        at: './index.rsh:142:9:dot',
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
      const {data: [v456], secs: v458, time: v457, didSend: v186, from: v455 } = txn5;
      ;
      const v459 = stdlib.addressEq(v315, v455);
      stdlib.assert(v459, {
        at: './index.rsh:148:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v460 = v456[stdlib.checkedBigNumberify('./index.rsh:150:27:array ref', stdlib.UInt_max, 14)];
      const v461 = v448[stdlib.checkedBigNumberify('./index.rsh:150:43:array ref', stdlib.UInt_max, 14)];
      const v462 = v460 ? true : v461;
      const v463 = v462 ? false : true;
      const cv349 = v463;
      const cv350 = v457;
      
      v349 = cv349;
      v350 = cv350;
      
      continue;
      
      
      
      
      
      }
    const v466 = stdlib.protect(ctc2, await interact.getShip(), {
      at: './index.rsh:156:49:application',
      fs: ['at ./index.rsh:155:11:application call to [unknown function] (defined at: ./index.rsh:155:15:function exp)'],
      msg: 'getShip',
      who: 'Bob'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v315, v334, v340, v466],
      evt_cnt: 1,
      funcNum: 4,
      lct: v350,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:158:7:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v468], secs: v470, time: v469, didSend: v200, from: v467 } = txn3;
        
        ;
        const v471 = stdlib.addressEq(v334, v467);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc7, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v468], secs: v470, time: v469, didSend: v200, from: v467 } = txn3;
    ;
    const v471 = stdlib.addressEq(v334, v467);
    stdlib.assert(v471, {
      at: './index.rsh:158:7:dot',
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
    const {data: [v476], secs: v478, time: v477, didSend: v210, from: v475 } = txn4;
    ;
    const v479 = stdlib.addressEq(v315, v475);
    stdlib.assert(v479, {
      at: './index.rsh:164:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v480 = v476[stdlib.checkedBigNumberify('./index.rsh:166:29:array ref', stdlib.UInt_max, 14)];
    const v481 = v468[stdlib.checkedBigNumberify('./index.rsh:166:51:array ref', stdlib.UInt_max, 14)];
    const v482 = v481 ? false : true;
    const v483 = v480 ? true : v482;
    const v485 = v483 ? v315 : v334;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v483), {
      at: './index.rsh:172:24:application',
      fs: ['at ./index.rsh:171:7:application call to [unknown function] (defined at: ./index.rsh:171:25:function exp)'],
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
  appApproval: `BiARAAFADggFDA0PCgsEAgYHNyAmAgEAACI1ADEYQQWhKWRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBCQxAAiZJIQYMQAEDSSEHDEAAtEklDEAASiUSRCEINAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BRc1/oAEoyEiOzT+FlEHCFCwNP8xABJENP80A1cgIDQDJFs0/jIGQgRHSCU0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf9XICA1/iRbNf1JNQVJIls1/CEEWzX7gAQGk2ejNPwWUDT7FlCwNP4xABJENP80/lA0/RZQKEsBVwBIZ0ghCDUBMgY1AkIEfEghBzQBEkQ0BEkiEkw0AhIRRChkSTUDVyAgNf9JNQUXNf6ABGL8Zsw0/hZRBwhQsDT/MQASRDQDVwAgNP80AyRbNP4yBkID0UkhCQxAALpJIQoMQABlSCEGNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/VyAgNf4kWzX9STUFSSJbNfwhBFs1+4AEJmR71jT8FlA0+xZQsDT/MQASRDT/NP5QNP0WUChLAVcASGdIIQc1ATIGNQJCA8FIIQo0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFNf6ABCMThmw0/lCwNP8xABJENP80A1cgIDQDJFs0/iVVNANXSA8lVREUMgZCApNIIQk0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf9XICA1/iRbNf1JNQU1/IAEAOrhtDT8ULA0/jEAEkQ0/zT+UDT9FlA0/FAoSwFXAFdnSCEKNQEyBjUCQgMYSSELDEABB0khBQxAAKVJIQ0MQABFIQ0SRCEONAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BTX+gAQsKUQVNP5QsDT/MQASRDT/NANXICA0AyRbIzIGQgIlSCEFNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BTX+gATi/9RoNP5QsDT/MQASRLEisgE0AyRbsggjshA0A1cgIDT/NP4lVTQDV0gPJVUUEU2yB7NCAklIIQs0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf9XICA1/iRbNf1JNQU1/IAEapsmnTT8ULA0/jEAEkQ0/zT+UDT9FlA0/FAoSwFXAFdnSCEFNQEyBjUCQgIKSSMMQAC8SSEMDEAAQSEMEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ9bD0SxIrIBNAMhEFuyCCOyEDQDVwAgsgezQgGgSCM0ARJENARJIhJMNAISEUQoZEk1AyEQWzX/gASai5F0sDIGNAMhD1sMRDT/iAHJIQw0/ws1/jT/SQg0/hJEIjX9IjX8NANXKA80/FVJNfsUNP1JTTX9NPwjCEk1/CEIDED/4TQDVwAgMQA0/jT9MgZCAGhIIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEEWzX+VxAPNf2ABC2Z+mE0/xZQNP4WUDT9ULCBoI0GiAFINP+IAUMyBjT+CDX8MQA0/xZQNP1QNPwWUChLAVcAP2dIIzUBMgY1AkIA4DX/Nf41/TX8Nfs0/kEAHDT7NPxQNP0WUChLAVcASGdIIQ41ATIGNQJCALU0+zT8UDT9FlAoSwFXAEhnSCELNQEyBjUCQgCZNf81/jX9Nfw1+zT+QQAbNPs0/FA0/RZQKEsBVwBIZ0glNQEyBjUCQgBvNPs0/DT9IzT/QgAANf81/jX9Nfw1+zT+QQAcNPs0/FA0/RZQKEsBVwBIZ0ghBjUBMgY1AkIAODT7NPxQNP0WUChLAVcASGdIIQk1ATIGNQJCABwxGSEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "name": "v316",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v317",
                "type": "uint256"
              },
              {
                "internalType": "bool[15]",
                "name": "v318",
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
                "name": "v316",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v317",
                "type": "uint256"
              },
              {
                "internalType": "bool[15]",
                "name": "v318",
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
                "name": "v456",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
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
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v425",
                "type": "uint256"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
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
                "name": "v440",
                "type": "bool"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
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
                "name": "v387",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v388",
                "type": "uint256"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T31",
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
                "name": "v402",
                "type": "bool"
              }
            ],
            "internalType": "struct T32",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T33",
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
                "name": "v468",
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
                "name": "v476",
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
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256[2]",
                "name": "v365",
                "type": "uint256[2]"
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
    "name": "_reach_e6",
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
            "components": [
              {
                "internalType": "bool[15]",
                "name": "v448",
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
                "name": "v456",
                "type": "bool[15]"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
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
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v425",
                "type": "uint256"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
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
                "name": "v440",
                "type": "bool"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T29",
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
                "name": "v387",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v388",
                "type": "uint256"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T31",
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
                "name": "v402",
                "type": "bool"
              }
            ],
            "internalType": "struct T32",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T33",
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
                "name": "v468",
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
                "name": "v476",
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
                "internalType": "uint256[2]",
                "name": "v365",
                "type": "uint256[2]"
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
                "name": "v448",
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
  Bytecode: `0x6080604052604051620022be380380620022be8339810160408190526200002691620002bc565b60008080554360035560408051602081018252918252517fe39fd5bce56af4b9fed73a3718e5e690af7ab93bd39f31ab3abe10a15674b084906200006c908490620003ae565b60405180910390a160208201515162000089903414600762000113565b60208083015101516200009d9043620003e9565b8152620000a96200013d565b3381526020808401805151828401525160409081015181840152835160608401526001600081905543905551620000e39183910162000410565b60405160208183030381529060405260029080519060200190620001099291906200016b565b5050505062000490565b81620001395760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051608081018252600080825260208201529081016200015e620001fa565b8152602001600081525090565b828054620001799062000453565b90600052602060002090601f0160209004810192826200019d5760008555620001e8565b82601f10620001b857805160ff1916838001178555620001e8565b82800160010185558215620001e8579182015b82811115620001e8578251825591602001919060010190620001cb565b50620001f692915062000219565b5090565b604051806101e00160405280600f906020820280368337509192915050565b5b80821115620001f657600081556001016200021a565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200026b576200026b62000230565b60405290565b604051606081016001600160401b03811182821017156200026b576200026b62000230565b6040516101e081016001600160401b03811182821017156200026b576200026b62000230565b600081830361024080821215620002d257600080fd5b620002dc62000246565b845181526020610220601f1985011215620002f657600080fd5b6200030062000271565b935080860151845260408601518185015286607f8701126200032157600080fd5b6200032b62000296565b9286019280888511156200033e57600080fd5b606088015b858110156200036c57805180151581146200035e5760008081fd5b835291830191830162000343565b50604086015250810192909252509392505050565b8060005b600f811015620003a8578151151584526020938401939091019060010162000385565b50505050565b81518152602080830151805182840152908101516040808401919091520151610240820190620003e2606084018262000381565b5092915050565b600082198211156200040b57634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b0316815260208083015190820152604080830151610240830191620004419084018262000381565b50606083015161022083015292915050565b600181811c908216806200046857607f821691505b602082108114156200048a57634e487b7160e01b600052602260045260246000fd5b50919050565b611e1e80620004a06000396000f3fe6080604052600436106100d55760003560e01c80637eea518c11610079578063a93a2bdd11610056578063a93a2bdd146101af578063aa1fc98d146101c2578063ab53f2c6146101d5578063f13f60f7146101f857005b80637eea518c146101745780638323075714610187578063891a587f1461019c57005b80633b002849116100b25780633b002849146101285780633eb5063e1461013b57806351136f891461014e57806366ad16d01461016157005b80631e93b0f1146100de57806320632522146101025780632c10a1591461011557005b366100dc57005b005b3480156100ea57600080fd5b506003545b6040519081526020015b60405180910390f35b6100dc6101103660046118b2565b61020b565b6100dc6101233660046118e8565b6103be565b6100dc610136366004611916565b610608565b6100dc6101493660046118b2565b6107ac565b6100dc61015c3660046118b2565b61094c565b6100dc61016f366004611916565b610b13565b6100dc6101823660046118e8565b610c90565b34801561019357600080fd5b506001546100ef565b6100dc6101aa3660046118e8565b610df1565b6100dc6101bd3660046118e8565b610f7b565b6100dc6101d0366004611916565b611108565b3480156101e157600080fd5b506101ea61127f565b6040516100f9929190611932565b6100dc6102063660046118b2565b61131c565b61021b600b6000541460236114bc565b6102358135158061022e57506001548235145b60246114bc565b6000808055600280546102479061198f565b80601f01602080910402602001604051908101604052809291908181526020018280546102739061198f565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b50505050508060200190518101906102d89190611aff565b90507febc86c4bdf0c1456030bcbce08739f8d01c3e9f1629b77621e1e5292fb648d7f826040516103099190611b5b565b60405180910390a161031d341560216114bc565b8051610335906001600160a01b0316331460226114bc565b61033d61172d565b815181516001600160a01b0391821690526020808401518351921691015260408083015182519091015261037961020084016101e08501611b86565b61038c5760608201516101c0015161038f565b60015b61039a57600161039d565b60005b602080830180519215159092529051439101526103b9816114e1565b505050565b6103ce600160005414600a6114bc565b6103e8813515806103e157506001548235145b600b6114bc565b6000808055600280546103fa9061198f565b80601f01602080910402602001604051908101604052809291908181526020018280546104269061198f565b80156104735780601f1061044857610100808354040283529160200191610473565b820191906000526020600020905b81548152906001019060200180831161045657829003601f168201915b505050505080602001905181019061048b9190611ba3565b6040805160808101825260008082526020820181905291810182905260608101919091529091506104c382606001514310600c6114bc565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1836040516104f29190611bf8565b60405180910390a161050b8260200151341460086114bc565b602082015161051b906002611c33565b808252602083015161053a91906105329080611c52565b1460096114bc565b6000604082018190525b600f8110156105ae57826040015181600f811061056357610563611b70565b602002015115156060830152604082015161058f578160600151610588576001610595565b6000610595565b81604001515b15156040830152806105a681611c6a565b915050610544565b506040810151151560208201526105c361172d565b825181516001600160a01b03909116905280513360209182015282518251604001528281015181830180519115159091525143910152610602816114e1565b50505050565b610618600e60005414602f6114bc565b6106328135158061062b57506001548235145b60306114bc565b6000808055600280546106449061198f565b80601f01602080910402602001604051908101604052809291908181526020018280546106709061198f565b80156106bd5780601f10610692576101008083540402835291602001916106bd565b820191906000526020600020905b8154815290600101906020018083116106a057829003601f168201915b50505050508060200190518101906106d59190611c85565b90507f417121541bae1c6fd7927af019fc556de3d5a959b8be0d9927963bc7c47d6839826040516107069190611ced565b60405180910390a161071a3415602d6114bc565b6020810151610735906001600160a01b03163314602e6114bc565b604080516060810182526000808252602080830182815283850183815286516001600160a01b0390811686528784015116909152858501519052600f909155436001559151909161078891839101611d0e565b60405160208183030381529060405260029080519060200190610602929190611771565b6107bc60046000541460136114bc565b6107d6813515806107cf57506001548235145b60146114bc565b6000808055600280546107e89061198f565b80601f01602080910402602001604051908101604052809291908181526020018280546108149061198f565b80156108615780601f1061083657610100808354040283529160200191610861565b820191906000526020600020905b81548152906001019060200180831161084457829003601f168201915b50505050508060200190518101906108799190611c85565b90507f74e345cd28963c8245b2b07cdabc178bf0995dbe010b9cdd9fa2d77a1b377e40826040516108aa9190611b5b565b60405180910390a16108be341560116114bc565b60208101516108d9906001600160a01b0316331460126114bc565b6108e16117f5565b81516001600160a01b039081168252602080840151909116818301526040808401518184015280516101e081810190925291850190600f9083908390808284376000920182905250606085019390935250506005905543600155604051610788908290602001611d8f565b61095c60056000541460176114bc565b6109768135158061096f57506001548235145b60186114bc565b6000808055600280546109889061198f565b80601f01602080910402602001604051908101604052809291908181526020018280546109b49061198f565b8015610a015780601f106109d657610100808354040283529160200191610a01565b820191906000526020600020905b8154815290600101906020018083116109e457829003601f168201915b5050505050806020019051810190610a199190611aff565b90507fa30e86a7639bf2bf0d688d4feb18547d3f10cdabfde0afde32f4df32576f290f82604051610a4a9190611b5b565b60405180910390a1610a5e341560156114bc565b8051610a76906001600160a01b0316331460166114bc565b610a8861020083016101e08401611b86565b610aa85760608101516101c00151610aa1576001610aab565b6000610aab565b60015b610ab9578060200151610abc565b80515b6001600160a01b03166108fc82604001519081150290604051600060405180830381858888f19350505050158015610af8573d6000803e3d6000fd5b5060008080556001819055610b0f9060029061182f565b5050565b610b23600c6000541460276114bc565b610b3d81351580610b3657506001548235145b60286114bc565b600080805560028054610b4f9061198f565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7b9061198f565b8015610bc85780601f10610b9d57610100808354040283529160200191610bc8565b820191906000526020600020905b815481529060010190602001808311610bab57829003601f168201915b5050505050806020019051810190610be09190611c85565b90507fb564c4b7bb6e2b66d55bd574aee790ea59b56f34ad479a740dab7309005fb8f182604051610c119190611ced565b60405180910390a1610c25341560256114bc565b8051610c3d906001600160a01b0316331460266114bc565b604080516060810182526000808252602080830182815283850183815286516001600160a01b0390811686528784015116909152858501519052600d909155436001559151909161078891839101611d0e565b610ca0600160005414600e6114bc565b610cba81351580610cb357506001548235145b600f6114bc565b600080805560028054610ccc9061198f565b80601f0160208091040260200160405190810160405280929190818152602001828054610cf89061198f565b8015610d455780601f10610d1a57610100808354040283529160200191610d45565b820191906000526020600020905b815481529060010190602001808311610d2857829003601f168201915b5050505050806020019051810190610d5d9190611ba3565b9050610d71816060015143101560106114bc565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e182604051610da09190611bf8565b60405180910390a1610db43415600d6114bc565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610af8573d6000803e3d6000fd5b610e01600f6000541460336114bc565b610e1b81351580610e1457506001548235145b60346114bc565b600080805560028054610e2d9061198f565b80601f0160208091040260200160405190810160405280929190818152602001828054610e599061198f565b8015610ea65780601f10610e7b57610100808354040283529160200191610ea6565b820191906000526020600020905b815481529060010190602001808311610e8957829003601f168201915b5050505050806020019051810190610ebe9190611c85565b90507f5d21de13fabc4e30591f443c954de2677780412cd10e22412d6c3adb8f10069982604051610eef9190611dbd565b60405180910390a1610f03341560316114bc565b8051610f1b906001600160a01b0316331460326114bc565b610f2361172d565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351820152610f5f91908501908501611b86565b602080830180519215159092529051439101526103b9816115bf565b610f8b600d60005414602b6114bc565b610fa581351580610f9e57506001548235145b602c6114bc565b600080805560028054610fb79061198f565b80601f0160208091040260200160405190810160405280929190818152602001828054610fe39061198f565b80156110305780601f1061100557610100808354040283529160200191611030565b820191906000526020600020905b81548152906001019060200180831161101357829003601f168201915b50505050508060200190518101906110489190611c85565b90507f188bb120ff0b75cdd3a52d7df347a591f3fd406f0a30024a513cd600c306a8b6826040516110799190611dbd565b60405180910390a161108d341560296114bc565b60208101516110a8906001600160a01b03163314602a6114bc565b6110b061172d565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201526110ec91908501908501611b86565b602080830180519215159092529051439101526103b981611676565b611118600760005414601b6114bc565b6111328135158061112b57506001548235145b601c6114bc565b6000808055600280546111449061198f565b80601f01602080910402602001604051908101604052809291908181526020018280546111709061198f565b80156111bd5780601f10611192576101008083540402835291602001916111bd565b820191906000526020600020905b8154815290600101906020018083116111a057829003601f168201915b50505050508060200190518101906111d59190611c85565b90507f036a2b663b8cd21f0afaa2a395ef9aa2e1f6b8d9d84e0e83c07370a912c9f9a1826040516112069190611dcb565b60405180910390a161121a341560196114bc565b8051611232906001600160a01b03163314601a6114bc565b61123a61172d565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183519091015280820180516001905251439101526103b9816115bf565b6000606060005460028080546112949061198f565b80601f01602080910402602001604051908101604052809291908181526020018280546112c09061198f565b801561130d5780601f106112e25761010080835404028352916020019161130d565b820191906000526020600020905b8154815290600101906020018083116112f057829003601f168201915b50505050509050915091509091565b61132c600a60005414601f6114bc565b6113468135158061133f57506001548235145b60206114bc565b6000808055600280546113589061198f565b80601f01602080910402602001604051908101604052809291908181526020018280546113849061198f565b80156113d15780601f106113a6576101008083540402835291602001916113d1565b820191906000526020600020905b8154815290600101906020018083116113b457829003601f168201915b50505050508060200190518101906113e99190611c85565b90507fd9d658c421199b4fbe593c092a7885be8530dd6dc17f03167ac9586bb45909518260405161141a9190611b5b565b60405180910390a161142e3415601d6114bc565b6020810151611449906001600160a01b03163314601e6114bc565b6114516117f5565b81516001600160a01b039081168252602080840151909116818301526040808401518184015280516101e081810190925291850190600f908390839080828437600092018290525060608501939093525050600b905543600155604051610788908290602001611d8f565b81610b0f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b602081015151156115665760408051606081018252600080825260208083018281528385018381528651516001600160a01b039081168652875184015116909152855185015190526007909155436001559151909161154291839101611d0e565b604051602081830303815290604052600290805190602001906103b9929190611771565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b039081168652875184015116909152855185015190526004909155436001559151909161154291839101611d0e565b50565b602081015151156116205760408051606081018252600080825260208083018281528385018381528651516001600160a01b03908116865287518401511690915285518501519052600e909155436001559151909161154291839101611d0e565b61162861172d565b81515181516001600160a01b03918216905282516020908101518351921691810191909152825160409081015183519091015280820180516001905281840151820151905190910152610b0f815b602081015151156116d75760408051606081018252600080825260208083018281528385018381528651516001600160a01b03908116865287518401511690915285518501519052600c909155436001559151909161154291839101611d0e565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b03908116865287518401511690915285518501519052600a909155436001559151909161154291839101611d0e565b6040805160a081018252600081830181815260608301829052608083018290528252825180840190935280835260208381019190915290919082015290565b905290565b82805461177d9061198f565b90600052602060002090601f01602090048101928261179f57600085556117e5565b82601f106117b857805160ff19168380011785556117e5565b828001600101855582156117e5579182015b828111156117e55782518255916020019190600101906117ca565b506117f1929150611865565b5090565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200161176c61187a565b50805461183b9061198f565b6000825580601f1061184b575050565b601f0160209004906000526020600020908101906115bc91905b5b808211156117f15760008155600101611866565b604051806101e00160405280600f906020820280368337509192915050565b600061020082840312156118ac57600080fd5b50919050565b600061020082840312156118c557600080fd5b6118cf8383611899565b9392505050565b6000604082840312156118ac57600080fd5b6000604082840312156118fa57600080fd5b6118cf83836118d6565b6000606082840312156118ac57600080fd5b60006060828403121561192857600080fd5b6118cf8383611904565b82815260006020604081840152835180604085015260005b818110156119665785810183015185820160600152820161194a565b81811115611978576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806119a357607f821691505b602082108114156118ac57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156119fd576119fd6119c4565b60405290565b80516001600160a01b0381168114611a1a57600080fd5b919050565b80151581146115bc57600080fd5b600082601f830112611a3e57600080fd5b6040516101e080820182811067ffffffffffffffff82111715611a6357611a636119c4565b60405283018185821115611a7657600080fd5b845b82811015611a99578051611a8b81611a1f565b825260209182019101611a78565b509195945050505050565b60006102408284031215611ab757600080fd5b611abf6119da565b9050611aca82611a03565b8152611ad860208301611a03565b602082015260408201516040820152611af48360608401611a2d565b606082015292915050565b60006102408284031215611b1257600080fd5b6118cf8383611aa4565b80358252602080830181830160005b600f811015611b53578135611b3f81611a1f565b151583529183019190830190600101611b2b565b505050505050565b6102008101611b6a8284611b1c565b92915050565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611b9857600080fd5b81356118cf81611a1f565b60006102408284031215611bb657600080fd5b611bbe6119da565b611bc783611a03565b815260208301516020820152611be08460408501611a2d565b60408201526102209290920151606083015250919050565b81358152604081016020830135611c0e81611a1f565b80151560208401525092915050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611c4d57611c4d611c1d565b500290565b60008219821115611c6557611c65611c1d565b500190565b6000600019821415611c7e57611c7e611c1d565b5060010190565b600060608284031215611c9757600080fd5b6040516060810181811067ffffffffffffffff82111715611cba57611cba6119c4565b604052611cc683611a03565b8152611cd460208401611a03565b6020820152604083015160408201528091505092915050565b81358152602080830135908201526040808301359082015260608101611b6a565b81516001600160a01b039081168252602080840151909116908201526040918201519181019190915260600190565b80516001600160a01b03908116835260208083015190911681840152604080830151908401526060808301519190840160005b600f811015611b53578351151582529282019290820190600101611d70565b6102408101611b6a8284611d3d565b803582526020810135611db081611a1f565b8015156020840152505050565b60408101611b6a8284611d9e565b81358152606081016040602080850190840137600081529291505056fea2646970667358221220f6cea97a9d6afbada83568c200b296638cb82c7da415209132fa9756a3c2d8e964736f6c634300080c0033`,
  BytecodeLen: 8894,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:67:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:76:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:153:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:159:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:169:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:83:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:137:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:143:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:117:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:123:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:94:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:100:15:after expr stmt semicolon',
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
