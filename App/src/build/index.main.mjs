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
  
  
  const v321 = stdlib.protect(ctc1, interact.Ship, 'for Alice\'s interact field Ship');
  const v322 = stdlib.protect(ctc2, interact.deadline, 'for Alice\'s interact field deadline');
  const v323 = stdlib.protect(ctc2, interact.wager, 'for Alice\'s interact field wager');
  
  const v327 = stdlib.protect(ctc4, await interact.getBoard(), {
    at: './index.rsh:54:47:application',
    fs: ['at ./index.rsh:53:13:application call to [unknown function] (defined at: ./index.rsh:53:17:function exp)'],
    msg: 'getBoard',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v323, v322, v321],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:60:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc1],
    pay: [v323, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v329, v330, v331], secs: v333, time: v332, didSend: v57, from: v328 } = txn1;
      
      sim_r.txns.push({
        amt: v329,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v342 = stdlib.add(v332, v330);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v329, v330, v331], secs: v333, time: v332, didSend: v57, from: v328 } = txn1;
  ;
  const v342 = stdlib.add(v332, v330);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v342],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v328, v329, v331, v342],
      evt_cnt: 0,
      funcNum: 2,
      lct: v332,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v522, time: v521, didSend: v256, from: v520 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v329,
          kind: 'from',
          to: v328,
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
    const {data: [], secs: v522, time: v521, didSend: v256, from: v520 } = txn3;
    ;
    ;
    stdlib.protect(ctc6, await interact.informTimeout(), {
      at: './index.rsh:49:29:application',
      fs: ['at ./index.rsh:48:9:application call to [unknown function] (defined at: ./index.rsh:48:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:47:28:function exp)', 'at ./index.rsh:70:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v349, time: v348, didSend: v67, from: v347 } = txn2;
    const v351 = stdlib.add(v329, v329);
    ;
    const v353 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:72:24:decimal', stdlib.UInt_max, 2), v329);
    const v354 = stdlib.eq(v351, v353);
    stdlib.assert(v354, {
      at: './index.rsh:72:10:application',
      fs: [],
      msg: null,
      who: 'Alice'
      });
    const v355 = await stdlib.Array_asyncReduce([v331], false, async([v357], v356, v358) => {
      const v359 = v357 ? false : true;
      const v361 = v356 ? v356 : v359;
      
      return v361;})
    let v362 = v355;
    let v363 = v348;
    
    while (await (async () => {
      
      return v362;})()) {
      const v376 = stdlib.protect(ctc5, await interact.getHand(), {
        at: './index.rsh:80:52:application',
        fs: ['at ./index.rsh:79:15:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v328, v347, v353, v376],
        evt_cnt: 1,
        funcNum: 6,
        lct: v363,
        onlyIf: true,
        out_tys: [ctc5],
        pay: [stdlib.checkedBigNumberify('./index.rsh:82:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v378], secs: v380, time: v379, didSend: v95, from: v377 } = txn3;
          
          ;
          const v381 = stdlib.addressEq(v328, v377);
          ;
          const v382 = true;
          const v383 = v379;
          
          if (await (async () => {
            
            return v382;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v425 = true;
            const v426 = v383;
            
            if (await (async () => {
              
              return v425;})()) {
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
      const {data: [v378], secs: v380, time: v379, didSend: v95, from: v377 } = txn3;
      ;
      const v381 = stdlib.addressEq(v328, v377);
      stdlib.assert(v381, {
        at: './index.rsh:82:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      let v382 = true;
      let v383 = v379;
      
      while (await (async () => {
        
        return v382;})()) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 13,
          out_tys: [ctc2, ctc2],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v400, v401], secs: v403, time: v402, didSend: v114, from: v399 } = txn4;
        ;
        const v404 = stdlib.addressEq(v347, v399);
        stdlib.assert(v404, {
          at: './index.rsh:93:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v407 = stdlib.mod(v400, stdlib.checkedBigNumberify('./index.rsh:97:37:decimal', stdlib.UInt_max, 10));
        const v409 = v327[v407];
        const v410 = stdlib.mod(v401, stdlib.checkedBigNumberify('./index.rsh:97:52:decimal', stdlib.UInt_max, 10));
        const v412 = v409[v410];
        const v413 = stdlib.eq(v412, stdlib.checkedBigNumberify('./index.rsh:97:59:decimal', stdlib.UInt_max, 1));
        if (v413) {
          stdlib.protect(ctc6, await interact.updateShip(), {
            at: './index.rsh:99:30:application',
            fs: ['at ./index.rsh:96:17:application call to [unknown function] (defined at: ./index.rsh:96:21:function exp)'],
            msg: 'updateShip',
            who: 'Alice'
            });
          }
        else {
          }
        const v414 = stdlib.protect(ctc1, await interact.getShip(), {
          at: './index.rsh:101:56:application',
          fs: ['at ./index.rsh:96:17:application call to [unknown function] (defined at: ./index.rsh:96:21:function exp)'],
          msg: 'getShip',
          who: 'Alice'
          });
        const v415 = v414[stdlib.checkedBigNumberify('./index.rsh:102:36:array ref', stdlib.UInt_max, 14)];
        stdlib.protect(ctc6, await interact.print(v415), {
          at: './index.rsh:103:23:application',
          fs: ['at ./index.rsh:96:17:application call to [unknown function] (defined at: ./index.rsh:96:21:function exp)'],
          msg: 'print',
          who: 'Alice'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v328, v347, v353, v413, v415],
          evt_cnt: 2,
          funcNum: 14,
          lct: v402,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:105:13:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v418, v419], secs: v421, time: v420, didSend: v134, from: v417 } = txn5;
            
            ;
            const v422 = stdlib.addressEq(v328, v417);
            ;
            const v423 = v419 ? false : true;
            const v424 = v418 ? v423 : false;
            const cv382 = v424;
            const cv383 = v420;
            
            await (async () => {
              const v382 = cv382;
              const v383 = cv383;
              
              if (await (async () => {
                
                return v382;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v425 = true;
                const v426 = v383;
                
                if (await (async () => {
                  
                  return v425;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.isHalt = false;
                  }}})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc7, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [v418, v419], secs: v421, time: v420, didSend: v134, from: v417 } = txn5;
        ;
        const v422 = stdlib.addressEq(v328, v417);
        stdlib.assert(v422, {
          at: './index.rsh:105:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v423 = v419 ? false : true;
        const v424 = v418 ? v423 : false;
        const cv382 = v424;
        const cv383 = v420;
        
        v382 = cv382;
        v383 = cv383;
        
        continue;
        
        
        
        }
      let v425 = true;
      let v426 = v383;
      
      while (await (async () => {
        
        return v425;})()) {
        const v439 = stdlib.protect(ctc5, await interact.getHand(), {
          at: './index.rsh:115:54:application',
          fs: ['at ./index.rsh:114:17:application call to [unknown function] (defined at: ./index.rsh:114:21:function exp)'],
          msg: 'getHand',
          who: 'Alice'
          });
        const v440 = v439[stdlib.checkedBigNumberify('./index.rsh:116:15:array', stdlib.UInt_max, 0)];
        const v441 = v439[stdlib.checkedBigNumberify('./index.rsh:116:15:array', stdlib.UInt_max, 1)];
        
        const txn4 = await (ctc.sendrecv({
          args: [v328, v347, v353, v440, v441],
          evt_cnt: 2,
          funcNum: 11,
          lct: v426,
          onlyIf: true,
          out_tys: [ctc2, ctc2],
          pay: [stdlib.checkedBigNumberify('./index.rsh:118:13:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v443, v444], secs: v446, time: v445, didSend: v156, from: v442 } = txn4;
            
            ;
            const v447 = stdlib.addressEq(v328, v442);
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc7, ctc2, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [v443, v444], secs: v446, time: v445, didSend: v156, from: v442 } = txn4;
        ;
        const v447 = stdlib.addressEq(v328, v442);
        stdlib.assert(v447, {
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
        const {data: [v461, v462], secs: v464, time: v463, didSend: v176, from: v460 } = txn5;
        ;
        const v465 = stdlib.addressEq(v347, v460);
        stdlib.assert(v465, {
          at: './index.rsh:131:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v466 = v462 ? false : true;
        const v467 = v461 ? v466 : false;
        const cv425 = v467;
        const cv426 = v463;
        
        v425 = cv425;
        v426 = cv426;
        
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
      const {data: [v472], secs: v474, time: v473, didSend: v189, from: v471 } = txn4;
      ;
      const v475 = stdlib.addressEq(v347, v471);
      stdlib.assert(v475, {
        at: './index.rsh:140:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v478 = stdlib.protect(ctc1, await interact.getShip(), {
        at: './index.rsh:144:53:application',
        fs: ['at ./index.rsh:143:15:application call to [unknown function] (defined at: ./index.rsh:143:19:function exp)'],
        msg: 'getShip',
        who: 'Alice'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v328, v347, v353, v472, v478],
        evt_cnt: 1,
        funcNum: 10,
        lct: v473,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:146:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v480], secs: v482, time: v481, didSend: v199, from: v479 } = txn5;
          
          ;
          const v483 = stdlib.addressEq(v328, v479);
          ;
          const v484 = v480[stdlib.checkedBigNumberify('./index.rsh:148:27:array ref', stdlib.UInt_max, 14)];
          const v485 = v472[stdlib.checkedBigNumberify('./index.rsh:148:43:array ref', stdlib.UInt_max, 14)];
          const v486 = v484 ? true : v485;
          const v487 = v486 ? false : true;
          const cv362 = v487;
          const cv363 = v481;
          
          await (async () => {
            const v362 = cv362;
            const v363 = cv363;
            
            if (await (async () => {
              
              return v362;})()) {
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
      const {data: [v480], secs: v482, time: v481, didSend: v199, from: v479 } = txn5;
      ;
      const v483 = stdlib.addressEq(v328, v479);
      stdlib.assert(v483, {
        at: './index.rsh:146:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v484 = v480[stdlib.checkedBigNumberify('./index.rsh:148:27:array ref', stdlib.UInt_max, 14)];
      const v485 = v472[stdlib.checkedBigNumberify('./index.rsh:148:43:array ref', stdlib.UInt_max, 14)];
      const v486 = v484 ? true : v485;
      const v487 = v486 ? false : true;
      const cv362 = v487;
      const cv363 = v481;
      
      v362 = cv362;
      v363 = cv363;
      
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
    const {data: [v492], secs: v494, time: v493, didSend: v213, from: v491 } = txn3;
    ;
    const v495 = stdlib.addressEq(v347, v491);
    stdlib.assert(v495, {
      at: './index.rsh:156:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v498 = stdlib.protect(ctc1, await interact.getShip(), {
      at: './index.rsh:160:51:application',
      fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:17:function exp)'],
      msg: 'getShip',
      who: 'Alice'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v328, v347, v353, v492, v498],
      evt_cnt: 1,
      funcNum: 5,
      lct: v493,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:162:9:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v500], secs: v502, time: v501, didSend: v223, from: v499 } = txn4;
        
        ;
        const v503 = stdlib.addressEq(v328, v499);
        ;
        const v504 = v500[stdlib.checkedBigNumberify('./index.rsh:164:29:array ref', stdlib.UInt_max, 14)];
        const v505 = v492[stdlib.checkedBigNumberify('./index.rsh:164:51:array ref', stdlib.UInt_max, 14)];
        const v506 = v505 ? false : true;
        const v507 = v504 ? true : v506;
        const v509 = v507 ? v328 : v347;
        sim_r.txns.push({
          amt: v353,
          kind: 'from',
          to: v509,
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
    const {data: [v500], secs: v502, time: v501, didSend: v223, from: v499 } = txn4;
    ;
    const v503 = stdlib.addressEq(v328, v499);
    stdlib.assert(v503, {
      at: './index.rsh:162:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v504 = v500[stdlib.checkedBigNumberify('./index.rsh:164:29:array ref', stdlib.UInt_max, 14)];
    const v505 = v492[stdlib.checkedBigNumberify('./index.rsh:164:51:array ref', stdlib.UInt_max, 14)];
    const v506 = v505 ? false : true;
    const v507 = v504 ? true : v506;
    const v509 = v507 ? v328 : v347;
    ;
    stdlib.protect(ctc6, await interact.seeOutcome(v507), {
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
  const {data: [v329, v330, v331], secs: v333, time: v332, didSend: v57, from: v328 } = txn1;
  ;
  const v342 = stdlib.add(v332, v330);
  stdlib.protect(ctc3, await interact.updateShip(), {
    at: './index.rsh:65:24:application',
    fs: ['at ./index.rsh:64:11:application call to [unknown function] (defined at: ./index.rsh:64:15:function exp)'],
    msg: 'updateShip',
    who: 'Bob'
    });
  stdlib.protect(ctc5, await interact.getBoard(), {
    at: './index.rsh:66:37:application',
    fs: ['at ./index.rsh:64:11:application call to [unknown function] (defined at: ./index.rsh:64:15:function exp)'],
    msg: 'getBoard',
    who: 'Bob'
    });
  stdlib.protect(ctc3, await interact.acceptWager(v329), {
    at: './index.rsh:67:25:application',
    fs: ['at ./index.rsh:64:11:application call to [unknown function] (defined at: ./index.rsh:64:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v328, v329, v331, v342],
    evt_cnt: 0,
    funcNum: 1,
    lct: v332,
    onlyIf: true,
    out_tys: [],
    pay: [v329, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v349, time: v348, didSend: v67, from: v347 } = txn2;
      
      const v351 = stdlib.add(v329, v329);
      sim_r.txns.push({
        amt: v329,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v353 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:72:24:decimal', stdlib.UInt_max, 2), v329);
      const v354 = stdlib.eq(v351, v353);
      ;
      const v355 = await stdlib.Array_asyncReduce([v331], false, async([v357], v356, v358) => {
        const v359 = v357 ? false : true;
        const v361 = v356 ? v356 : v359;
        
        return v361;})
      const v362 = v355;
      const v363 = v348;
      
      if (await (async () => {
        
        return v362;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v342],
    tys: [ctc7, ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v328, v329, v331, v342],
      evt_cnt: 0,
      funcNum: 2,
      lct: v332,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v522, time: v521, didSend: v256, from: v520 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v329,
          kind: 'from',
          to: v328,
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
    const {data: [], secs: v522, time: v521, didSend: v256, from: v520 } = txn3;
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
    const {data: [], secs: v349, time: v348, didSend: v67, from: v347 } = txn2;
    const v351 = stdlib.add(v329, v329);
    ;
    const v353 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:72:24:decimal', stdlib.UInt_max, 2), v329);
    const v354 = stdlib.eq(v351, v353);
    stdlib.assert(v354, {
      at: './index.rsh:72:10:application',
      fs: [],
      msg: null,
      who: 'Bob'
      });
    const v355 = await stdlib.Array_asyncReduce([v331], false, async([v357], v356, v358) => {
      const v359 = v357 ? false : true;
      const v361 = v356 ? v356 : v359;
      
      return v361;})
    let v362 = v355;
    let v363 = v348;
    
    while (await (async () => {
      
      return v362;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v378], secs: v380, time: v379, didSend: v95, from: v377 } = txn3;
      ;
      const v381 = stdlib.addressEq(v328, v377);
      stdlib.assert(v381, {
        at: './index.rsh:82:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      let v382 = true;
      let v383 = v379;
      
      while (await (async () => {
        
        return v382;})()) {
        const v396 = stdlib.protect(ctc6, await interact.getHand(), {
          at: './index.rsh:90:52:application',
          fs: ['at ./index.rsh:89:15:application call to [unknown function] (defined at: ./index.rsh:89:19:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        const v397 = v396[stdlib.checkedBigNumberify('./index.rsh:91:15:array', stdlib.UInt_max, 0)];
        const v398 = v396[stdlib.checkedBigNumberify('./index.rsh:91:15:array', stdlib.UInt_max, 1)];
        
        const txn4 = await (ctc.sendrecv({
          args: [v328, v347, v353, v397, v398],
          evt_cnt: 2,
          funcNum: 13,
          lct: v383,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:93:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v400, v401], secs: v403, time: v402, didSend: v114, from: v399 } = txn4;
            
            ;
            const v404 = stdlib.addressEq(v347, v399);
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc7, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [v400, v401], secs: v403, time: v402, didSend: v114, from: v399 } = txn4;
        ;
        const v404 = stdlib.addressEq(v347, v399);
        stdlib.assert(v404, {
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
        const {data: [v418, v419], secs: v421, time: v420, didSend: v134, from: v417 } = txn5;
        ;
        const v422 = stdlib.addressEq(v328, v417);
        stdlib.assert(v422, {
          at: './index.rsh:105:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v423 = v419 ? false : true;
        const v424 = v418 ? v423 : false;
        const cv382 = v424;
        const cv383 = v420;
        
        v382 = cv382;
        v383 = cv383;
        
        continue;
        
        
        
        }
      let v425 = true;
      let v426 = v383;
      
      while (await (async () => {
        
        return v425;})()) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 11,
          out_tys: [ctc0, ctc0],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v443, v444], secs: v446, time: v445, didSend: v156, from: v442 } = txn4;
        ;
        const v447 = stdlib.addressEq(v328, v442);
        stdlib.assert(v447, {
          at: './index.rsh:118:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v450 = stdlib.protect(ctc5, await interact.getBoard(), {
          at: './index.rsh:122:51:application',
          fs: ['at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:19:function exp)'],
          msg: 'getBoard',
          who: 'Bob'
          });
        const v451 = stdlib.mod(v443, stdlib.checkedBigNumberify('./index.rsh:123:39:decimal', stdlib.UInt_max, 10));
        const v453 = v450[v451];
        const v454 = stdlib.mod(v444, stdlib.checkedBigNumberify('./index.rsh:123:56:decimal', stdlib.UInt_max, 10));
        const v456 = v453[v454];
        const v457 = stdlib.eq(v456, stdlib.checkedBigNumberify('./index.rsh:123:63:decimal', stdlib.UInt_max, 1));
        if (v457) {
          stdlib.protect(ctc3, await interact.updateShip(), {
            at: './index.rsh:125:30:application',
            fs: ['at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:19:function exp)'],
            msg: 'updateShip',
            who: 'Bob'
            });
          }
        else {
          }
        const v458 = stdlib.protect(ctc2, await interact.getShip(), {
          at: './index.rsh:127:56:application',
          fs: ['at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:19:function exp)'],
          msg: 'getShip',
          who: 'Bob'
          });
        const v459 = v458[stdlib.checkedBigNumberify('./index.rsh:128:36:array ref', stdlib.UInt_max, 14)];
        stdlib.protect(ctc3, await interact.print(v459), {
          at: './index.rsh:129:23:application',
          fs: ['at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:19:function exp)'],
          msg: 'print',
          who: 'Bob'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v328, v347, v353, v457, v459],
          evt_cnt: 2,
          funcNum: 12,
          lct: v445,
          onlyIf: true,
          out_tys: [ctc1, ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:131:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v461, v462], secs: v464, time: v463, didSend: v176, from: v460 } = txn5;
            
            ;
            const v465 = stdlib.addressEq(v347, v460);
            ;
            const v466 = v462 ? false : true;
            const v467 = v461 ? v466 : false;
            const cv425 = v467;
            const cv426 = v463;
            
            await (async () => {
              const v425 = cv425;
              const v426 = cv426;
              
              if (await (async () => {
                
                return v425;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc7, ctc0, ctc1, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [v461, v462], secs: v464, time: v463, didSend: v176, from: v460 } = txn5;
        ;
        const v465 = stdlib.addressEq(v347, v460);
        stdlib.assert(v465, {
          at: './index.rsh:131:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v466 = v462 ? false : true;
        const v467 = v461 ? v466 : false;
        const cv425 = v467;
        const cv426 = v463;
        
        v425 = cv425;
        v426 = cv426;
        
        continue;
        
        
        
        }
      const v470 = stdlib.protect(ctc2, await interact.getShip(), {
        at: './index.rsh:138:51:application',
        fs: ['at ./index.rsh:137:13:application call to [unknown function] (defined at: ./index.rsh:137:17:function exp)'],
        msg: 'getShip',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v328, v347, v353, v470],
        evt_cnt: 1,
        funcNum: 9,
        lct: v426,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:140:9:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v472], secs: v474, time: v473, didSend: v189, from: v471 } = txn4;
          
          ;
          const v475 = stdlib.addressEq(v347, v471);
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc7, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v472], secs: v474, time: v473, didSend: v189, from: v471 } = txn4;
      ;
      const v475 = stdlib.addressEq(v347, v471);
      stdlib.assert(v475, {
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
      const {data: [v480], secs: v482, time: v481, didSend: v199, from: v479 } = txn5;
      ;
      const v483 = stdlib.addressEq(v328, v479);
      stdlib.assert(v483, {
        at: './index.rsh:146:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v484 = v480[stdlib.checkedBigNumberify('./index.rsh:148:27:array ref', stdlib.UInt_max, 14)];
      const v485 = v472[stdlib.checkedBigNumberify('./index.rsh:148:43:array ref', stdlib.UInt_max, 14)];
      const v486 = v484 ? true : v485;
      const v487 = v486 ? false : true;
      const cv362 = v487;
      const cv363 = v481;
      
      v362 = cv362;
      v363 = cv363;
      
      continue;
      
      
      
      
      
      }
    const v490 = stdlib.protect(ctc2, await interact.getShip(), {
      at: './index.rsh:154:49:application',
      fs: ['at ./index.rsh:153:11:application call to [unknown function] (defined at: ./index.rsh:153:15:function exp)'],
      msg: 'getShip',
      who: 'Bob'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v328, v347, v353, v490],
      evt_cnt: 1,
      funcNum: 4,
      lct: v363,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:156:7:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v492], secs: v494, time: v493, didSend: v213, from: v491 } = txn3;
        
        ;
        const v495 = stdlib.addressEq(v347, v491);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc7, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v492], secs: v494, time: v493, didSend: v213, from: v491 } = txn3;
    ;
    const v495 = stdlib.addressEq(v347, v491);
    stdlib.assert(v495, {
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
    const {data: [v500], secs: v502, time: v501, didSend: v223, from: v499 } = txn4;
    ;
    const v503 = stdlib.addressEq(v328, v499);
    stdlib.assert(v503, {
      at: './index.rsh:162:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v504 = v500[stdlib.checkedBigNumberify('./index.rsh:164:29:array ref', stdlib.UInt_max, 14)];
    const v505 = v492[stdlib.checkedBigNumberify('./index.rsh:164:51:array ref', stdlib.UInt_max, 14)];
    const v506 = v505 ? false : true;
    const v507 = v504 ? true : v506;
    const v509 = v507 ? v328 : v347;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v507), {
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
  appApproval: `BiARAAFADggFDA0PCgsEAgYHNyAmAgEAACI1ADEYQQXLKWRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBCQxAAlBJIQYMQAEtSSEHDEAAyUklDEAAXyUSRCEINAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BUlXAAEXNf5XAQEXNf2ABPZdK+Y0/hZRBwhQNP0WUQcIULA0/zEAEkQ0/zQDVyAgNAMkWzT+NP0UEDIGQgRcSCU0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf9XICA1/iRbNf1JNQVJIls1/CEEWzX7gAQGk2ejNPwWUDT7FlCwNP4xABJENP80/lA0/RZQKEsBVwBIZ0ghCDUBMgY1AkIEkUghBzQBEkQ0BEkiEkw0AhIRRChkSTUDVyAgNf9JNQVJVwABFzX+VwEBFzX9gAQz0z8RNP4WUQcIUDT9FlEHCFCwNP8xABJENANXACA0/zQDJFs0/jT9FBAyBkID0UkhCQxAALpJIQoMQABlSCEGNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/VyAgNf4kWzX9STUFSSJbNfwhBFs1+4AEJmR71jT8FlA0+xZQsDT/MQASRDT/NP5QNP0WUChLAVcASGdIIQc1ATIGNQJCA8FIIQo0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFNf6ABCMThmw0/lCwNP8xABJENP80A1cgIDQDJFs0/iVVNANXSA8lVREUMgZCApNIIQk0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf9XICA1/iRbNf1JNQU1/IAEAOrhtDT8ULA0/jEAEkQ0/zT+UDT9FlA0/FAoSwFXAFdnSCEKNQEyBjUCQgMYSSELDEABB0khBQxAAKVJIQ0MQABFIQ0SRCEONAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BTX+gAQsKUQVNP5QsDT/MQASRDT/NANXICA0AyRbIzIGQgIlSCEFNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BTX+gATi/9RoNP5QsDT/MQASRLEisgE0AyRbsggjshA0A1cgIDT/NP4lVTQDV0gPJVUUEU2yB7NCAklIIQs0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf9XICA1/iRbNf1JNQU1/IAEapsmnTT8ULA0/jEAEkQ0/zT+UDT9FlA0/FAoSwFXAFdnSCEFNQEyBjUCQgIKSSMMQAC8SSEMDEAAQSEMEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ9bD0SxIrIBNAMhEFuyCCOyEDQDVwAgsgezQgGgSCM0ARJENARJIhJMNAISEUQoZEk1AyEQWzX/gASai5F0sDIGNAMhD1sMRDT/iAHJIQw0/ws1/jT/SQg0/hJEIjX9IjX8NANXKA80/FVJNfsUNP1JTTX9NPwjCEk1/CEIDED/4TQDVwAgMQA0/jT9MgZCAGhIIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEEWzX+VxAPNf2ABC2Z+mE0/xZQNP4WUDT9ULCBoI0GiAFINP+IAUMyBjT+CDX8MQA0/xZQNP1QNPwWUChLAVcAP2dIIzUBMgY1AkIA4DX/Nf41/TX8Nfs0/kEAHDT7NPxQNP0WUChLAVcASGdIIQ41ATIGNQJCALU0+zT8UDT9FlAoSwFXAEhnSCELNQEyBjUCQgCZNf81/jX9Nfw1+zT+QQAbNPs0/FA0/RZQKEsBVwBIZ0glNQEyBjUCQgBvNPs0/DT9IzT/QgAANf81/jX9Nfw1+zT+QQAcNPs0/FA0/RZQKEsBVwBIZ0ghBjUBMgY1AkIAODT7NPxQNP0WUChLAVcASGdIIQk1ATIGNQJCABwxGSEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "name": "v329",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v330",
                "type": "uint256"
              },
              {
                "internalType": "bool[15]",
                "name": "v331",
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
                "name": "v329",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v330",
                "type": "uint256"
              },
              {
                "internalType": "bool[15]",
                "name": "v331",
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
                "name": "v480",
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
                "name": "v443",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v444",
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
                "name": "v461",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v462",
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
                "name": "v400",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v401",
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
                "name": "v418",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v419",
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
                "name": "v492",
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
                "name": "v500",
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
                "name": "v378",
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
                "name": "v472",
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
                "name": "v480",
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
                "name": "v443",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v444",
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
                "name": "v461",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v462",
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
                "name": "v400",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v401",
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
                "name": "v418",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v419",
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
                "name": "v492",
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
                "name": "v500",
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
                "name": "v378",
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
                "name": "v472",
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
  Bytecode: `0x608060405260405162002309380380620023098339810160408190526200002691620002bc565b60008080554360035560408051602081018252918252517fe39fd5bce56af4b9fed73a3718e5e690af7ab93bd39f31ab3abe10a15674b084906200006c908490620003ae565b60405180910390a160208201515162000089903414600762000113565b60208083015101516200009d9043620003e9565b8152620000a96200013d565b3381526020808401805151828401525160409081015181840152835160608401526001600081905543905551620000e39183910162000410565b60405160208183030381529060405260029080519060200190620001099291906200016b565b5050505062000490565b81620001395760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051608081018252600080825260208201529081016200015e620001fa565b8152602001600081525090565b828054620001799062000453565b90600052602060002090601f0160209004810192826200019d5760008555620001e8565b82601f10620001b857805160ff1916838001178555620001e8565b82800160010185558215620001e8579182015b82811115620001e8578251825591602001919060010190620001cb565b50620001f692915062000219565b5090565b604051806101e00160405280600f906020820280368337509192915050565b5b80821115620001f657600081556001016200021a565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200026b576200026b62000230565b60405290565b604051606081016001600160401b03811182821017156200026b576200026b62000230565b6040516101e081016001600160401b03811182821017156200026b576200026b62000230565b600081830361024080821215620002d257600080fd5b620002dc62000246565b845181526020610220601f1985011215620002f657600080fd5b6200030062000271565b935080860151845260408601518185015286607f8701126200032157600080fd5b6200032b62000296565b9286019280888511156200033e57600080fd5b606088015b858110156200036c57805180151581146200035e5760008081fd5b835291830191830162000343565b50604086015250810192909252509392505050565b8060005b600f811015620003a8578151151584526020938401939091019060010162000385565b50505050565b81518152602080830151805182840152908101516040808401919091520151610240820190620003e2606084018262000381565b5092915050565b600082198211156200040b57634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b0316815260208083015190820152604080830151610240830191620004419084018262000381565b50606083015161022083015292915050565b600181811c908216806200046857607f821691505b602082108114156200048a57634e487b7160e01b600052602260045260246000fd5b50919050565b611e6980620004a06000396000f3fe6080604052600436106100d55760003560e01c80637cb13a2011610079578063aa1fc98d11610056578063aa1fc98d146101af578063ab53f2c6146101c2578063e5f2ae31146101e5578063f13f60f7146101f857005b80637cb13a20146101745780637eea518c14610187578063832307571461019a57005b80633b002849116100b25780633b002849146101285780633eb5063e1461013b57806351136f891461014e57806366ad16d01461016157005b80631e93b0f1146100de57806320632522146101025780632c10a1591461011557005b366100dc57005b005b3480156100ea57600080fd5b506003545b6040519081526020015b60405180910390f35b6100dc610110366004611904565b61020b565b6100dc610123366004611928565b6103be565b6100dc61013636600461194c565b610608565b6100dc610149366004611904565b6107ac565b6100dc61015c366004611904565b61094c565b6100dc61016f36600461194c565b610b13565b6100dc61018236600461194c565b610c90565b6100dc610195366004611928565b610e43565b3480156101a657600080fd5b506001546100ef565b6100dc6101bd36600461194c565b610fa4565b3480156101ce57600080fd5b506101d761111b565b6040516100f9929190611968565b6100dc6101f336600461194c565b6111b8565b6100dc610206366004611904565b61136e565b61021b600b60005414602361150e565b6102358135158061022e57506001548235145b602461150e565b600080805560028054610247906119c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610273906119c5565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b50505050508060200190518101906102d89190611b35565b90507febc86c4bdf0c1456030bcbce08739f8d01c3e9f1629b77621e1e5292fb648d7f826040516103099190611b91565b60405180910390a161031d3415602161150e565b8051610335906001600160a01b03163314602261150e565b61033d61177f565b815181516001600160a01b0391821690526020808401518351921691015260408083015182519091015261037961020084016101e08501611bbc565b61038c5760608201516101c0015161038f565b60015b61039a57600161039d565b60005b602080830180519215159092529051439101526103b981611533565b505050565b6103ce600160005414600a61150e565b6103e8813515806103e157506001548235145b600b61150e565b6000808055600280546103fa906119c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610426906119c5565b80156104735780601f1061044857610100808354040283529160200191610473565b820191906000526020600020905b81548152906001019060200180831161045657829003601f168201915b505050505080602001905181019061048b9190611bd9565b6040805160808101825260008082526020820181905291810182905260608101919091529091506104c382606001514310600c61150e565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1836040516104f29190611c2e565b60405180910390a161050b82602001513414600861150e565b602082015161051b906002611c69565b808252602083015161053a91906105329080611c88565b14600961150e565b6000604082018190525b600f8110156105ae57826040015181600f811061056357610563611ba6565b602002015115156060830152604082015161058f578160600151610588576001610595565b6000610595565b81604001515b15156040830152806105a681611ca0565b915050610544565b506040810151151560208201526105c361177f565b825181516001600160a01b0390911690528051336020918201528251825160400152828101518183018051911515909152514391015261060281611533565b50505050565b610618600e60005414602f61150e565b6106328135158061062b57506001548235145b603061150e565b600080805560028054610644906119c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610670906119c5565b80156106bd5780601f10610692576101008083540402835291602001916106bd565b820191906000526020600020905b8154815290600101906020018083116106a057829003601f168201915b50505050508060200190518101906106d59190611cbb565b90507f417121541bae1c6fd7927af019fc556de3d5a959b8be0d9927963bc7c47d6839826040516107069190611d23565b60405180910390a161071a3415602d61150e565b6020810151610735906001600160a01b03163314602e61150e565b604080516060810182526000808252602080830182815283850183815286516001600160a01b0390811686528784015116909152858501519052600f909155436001559151909161078891839101611d44565b604051602081830303815290604052600290805190602001906106029291906117c3565b6107bc600460005414601361150e565b6107d6813515806107cf57506001548235145b601461150e565b6000808055600280546107e8906119c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610814906119c5565b80156108615780601f1061083657610100808354040283529160200191610861565b820191906000526020600020905b81548152906001019060200180831161084457829003601f168201915b50505050508060200190518101906108799190611cbb565b90507f74e345cd28963c8245b2b07cdabc178bf0995dbe010b9cdd9fa2d77a1b377e40826040516108aa9190611b91565b60405180910390a16108be3415601161150e565b60208101516108d9906001600160a01b03163314601261150e565b6108e1611847565b81516001600160a01b039081168252602080840151909116818301526040808401518184015280516101e081810190925291850190600f9083908390808284376000920182905250606085019390935250506005905543600155604051610788908290602001611dc5565b61095c600560005414601761150e565b6109768135158061096f57506001548235145b601861150e565b600080805560028054610988906119c5565b80601f01602080910402602001604051908101604052809291908181526020018280546109b4906119c5565b8015610a015780601f106109d657610100808354040283529160200191610a01565b820191906000526020600020905b8154815290600101906020018083116109e457829003601f168201915b5050505050806020019051810190610a199190611b35565b90507fa30e86a7639bf2bf0d688d4feb18547d3f10cdabfde0afde32f4df32576f290f82604051610a4a9190611b91565b60405180910390a1610a5e3415601561150e565b8051610a76906001600160a01b03163314601661150e565b610a8861020083016101e08401611bbc565b610aa85760608101516101c00151610aa1576001610aab565b6000610aab565b60015b610ab9578060200151610abc565b80515b6001600160a01b03166108fc82604001519081150290604051600060405180830381858888f19350505050158015610af8573d6000803e3d6000fd5b5060008080556001819055610b0f90600290611881565b5050565b610b23600c60005414602761150e565b610b3d81351580610b3657506001548235145b602861150e565b600080805560028054610b4f906119c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7b906119c5565b8015610bc85780601f10610b9d57610100808354040283529160200191610bc8565b820191906000526020600020905b815481529060010190602001808311610bab57829003601f168201915b5050505050806020019051810190610be09190611cbb565b90507fb564c4b7bb6e2b66d55bd574aee790ea59b56f34ad479a740dab7309005fb8f182604051610c119190611d23565b60405180910390a1610c253415602561150e565b8051610c3d906001600160a01b03163314602661150e565b604080516060810182526000808252602080830182815283850183815286516001600160a01b0390811686528784015116909152858501519052600d909155436001559151909161078891839101611d44565b610ca0600f60005414603361150e565b610cba81351580610cb357506001548235145b603461150e565b600080805560028054610ccc906119c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610cf8906119c5565b8015610d455780601f10610d1a57610100808354040283529160200191610d45565b820191906000526020600020905b815481529060010190602001808311610d2857829003601f168201915b5050505050806020019051810190610d5d9190611cbb565b90507ff5e13556221b73426ecea31ba2bc2d469ab5a39595fdbe44f6d41e179b77756282604051610d8e9190611e08565b60405180910390a1610da23415603161150e565b8051610dba906001600160a01b03163314603261150e565b610dc261177f565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351820152610dfe91908501908501611bbc565b610e09576000610e27565b610e196060840160408501611bbc565b610e24576001610e27565b60005b602080830180519215159092529051439101526103b981611611565b610e53600160005414600e61150e565b610e6d81351580610e6657506001548235145b600f61150e565b600080805560028054610e7f906119c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610eab906119c5565b8015610ef85780601f10610ecd57610100808354040283529160200191610ef8565b820191906000526020600020905b815481529060010190602001808311610edb57829003601f168201915b5050505050806020019051810190610f109190611bd9565b9050610f248160600151431015601061150e565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e182604051610f539190611c2e565b60405180910390a1610f673415600d61150e565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610af8573d6000803e3d6000fd5b610fb4600760005414601b61150e565b610fce81351580610fc757506001548235145b601c61150e565b600080805560028054610fe0906119c5565b80601f016020809104026020016040519081016040528092919081815260200182805461100c906119c5565b80156110595780601f1061102e57610100808354040283529160200191611059565b820191906000526020600020905b81548152906001019060200180831161103c57829003601f168201915b50505050508060200190518101906110719190611cbb565b90507f036a2b663b8cd21f0afaa2a395ef9aa2e1f6b8d9d84e0e83c07370a912c9f9a1826040516110a29190611e16565b60405180910390a16110b63415601961150e565b80516110ce906001600160a01b03163314601a61150e565b6110d661177f565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183519091015280820180516001905251439101526103b981611611565b600060606000546002808054611130906119c5565b80601f016020809104026020016040519081016040528092919081815260200182805461115c906119c5565b80156111a95780601f1061117e576101008083540402835291602001916111a9565b820191906000526020600020905b81548152906001019060200180831161118c57829003601f168201915b50505050509050915091509091565b6111c8600d60005414602b61150e565b6111e2813515806111db57506001548235145b602c61150e565b6000808055600280546111f4906119c5565b80601f0160208091040260200160405190810160405280929190818152602001828054611220906119c5565b801561126d5780601f106112425761010080835404028352916020019161126d565b820191906000526020600020905b81548152906001019060200180831161125057829003601f168201915b50505050508060200190518101906112859190611cbb565b90507f287020d8569f4949a3272179dd41ad62d8db508740d14098181a93f31cc8582a826040516112b69190611e08565b60405180910390a16112ca3415602961150e565b60208101516112e5906001600160a01b03163314602a61150e565b6112ed61177f565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151835182015261132991908501908501611bbc565b611334576000611352565b6113446060840160408501611bbc565b61134f576001611352565b60005b602080830180519215159092529051439101526103b9816116c8565b61137e600a60005414601f61150e565b6113988135158061139157506001548235145b602061150e565b6000808055600280546113aa906119c5565b80601f01602080910402602001604051908101604052809291908181526020018280546113d6906119c5565b80156114235780601f106113f857610100808354040283529160200191611423565b820191906000526020600020905b81548152906001019060200180831161140657829003601f168201915b505050505080602001905181019061143b9190611cbb565b90507fd9d658c421199b4fbe593c092a7885be8530dd6dc17f03167ac9586bb45909518260405161146c9190611b91565b60405180910390a16114803415601d61150e565b602081015161149b906001600160a01b03163314601e61150e565b6114a3611847565b81516001600160a01b039081168252602080840151909116818301526040808401518184015280516101e081810190925291850190600f908390839080828437600092018290525060608501939093525050600b905543600155604051610788908290602001611dc5565b81610b0f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b602081015151156115b85760408051606081018252600080825260208083018281528385018381528651516001600160a01b039081168652875184015116909152855185015190526007909155436001559151909161159491839101611d44565b604051602081830303815290604052600290805190602001906103b99291906117c3565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b039081168652875184015116909152855185015190526004909155436001559151909161159491839101611d44565b50565b602081015151156116725760408051606081018252600080825260208083018281528385018381528651516001600160a01b03908116865287518401511690915285518501519052600e909155436001559151909161159491839101611d44565b61167a61177f565b81515181516001600160a01b03918216905282516020908101518351921691810191909152825160409081015183519091015280820180516001905281840151820151905190910152610b0f815b602081015151156117295760408051606081018252600080825260208083018281528385018381528651516001600160a01b03908116865287518401511690915285518501519052600c909155436001559151909161159491839101611d44565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b03908116865287518401511690915285518501519052600a909155436001559151909161159491839101611d44565b6040805160a081018252600081830181815260608301829052608083018290528252825180840190935280835260208381019190915290919082015290565b905290565b8280546117cf906119c5565b90600052602060002090601f0160209004810192826117f15760008555611837565b82601f1061180a57805160ff1916838001178555611837565b82800160010185558215611837579182015b8281111561183757825182559160200191906001019061181c565b506118439291506118b7565b5090565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016117be6118cc565b50805461188d906119c5565b6000825580601f1061189d575050565b601f01602090049060005260206000209081019061160e91905b5b8082111561184357600081556001016118b8565b604051806101e00160405280600f906020820280368337509192915050565b600061020082840312156118fe57600080fd5b50919050565b6000610200828403121561191757600080fd5b61192183836118eb565b9392505050565b6000604082840312156118fe57600080fd5b6000606082840312156118fe57600080fd5b60006060828403121561195e57600080fd5b611921838361193a565b82815260006020604081840152835180604085015260005b8181101561199c57858101830151858201606001528201611980565b818111156119ae576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806119d957607f821691505b602082108114156118fe57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715611a3357611a336119fa565b60405290565b80516001600160a01b0381168114611a5057600080fd5b919050565b801515811461160e57600080fd5b600082601f830112611a7457600080fd5b6040516101e080820182811067ffffffffffffffff82111715611a9957611a996119fa565b60405283018185821115611aac57600080fd5b845b82811015611acf578051611ac181611a55565b825260209182019101611aae565b509195945050505050565b60006102408284031215611aed57600080fd5b611af5611a10565b9050611b0082611a39565b8152611b0e60208301611a39565b602082015260408201516040820152611b2a8360608401611a63565b606082015292915050565b60006102408284031215611b4857600080fd5b6119218383611ada565b80358252602080830181830160005b600f811015611b89578135611b7581611a55565b151583529183019190830190600101611b61565b505050505050565b6102008101611ba08284611b52565b92915050565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611bce57600080fd5b813561192181611a55565b60006102408284031215611bec57600080fd5b611bf4611a10565b611bfd83611a39565b815260208301516020820152611c168460408501611a63565b60408201526102209290920151606083015250919050565b81358152604081016020830135611c4481611a55565b80151560208401525092915050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611c8357611c83611c53565b500290565b60008219821115611c9b57611c9b611c53565b500190565b6000600019821415611cb457611cb4611c53565b5060010190565b600060608284031215611ccd57600080fd5b6040516060810181811067ffffffffffffffff82111715611cf057611cf06119fa565b604052611cfc83611a39565b8152611d0a60208401611a39565b6020820152604083015160408201528091505092915050565b81358152602080830135908201526040808301359082015260608101611ba0565b81516001600160a01b039081168252602080840151909116908201526040918201519181019190915260600190565b80516001600160a01b03908116835260208083015190911681840152604080830151908401526060808301519190840160005b600f811015611b89578351151582529282019290820190600101611da6565b6102408101611ba08284611d73565b803582526020810135611de681611a55565b151560208301526040810135611dfb81611a55565b8015156040840152505050565b60608101611ba08284611dd4565b81358152606081016040602080850190840137600081529291505056fea26469706673582212209703f33c788ee544a4da98ca3e800ccfaf6891fa7510a4bbab92b2d6806697a764736f6c634300080c0033`,
  BytecodeLen: 8969,
  Which: `oD`,
  version: 6,
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
