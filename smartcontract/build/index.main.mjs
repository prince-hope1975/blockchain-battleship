// Automatically generated with Reach 0.1.10 (2604daf0)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (2604daf0)';
export const _backendVersion = 16;

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
      5: [ctc0, ctc1, ctc0],
      6: [ctc0, ctc1, ctc0],
      7: [ctc0, ctc1, ctc0, ctc3]
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
  
  
  const v484 = stdlib.protect(ctc1, interact.Ship, 'for Alice\'s interact field Ship');
  const v500 = stdlib.protect(ctc2, interact.deadline, 'for Alice\'s interact field deadline');
  const v501 = stdlib.protect(ctc2, interact.wager, 'for Alice\'s interact field wager');
  
  const v520 = stdlib.protect(ctc3, await interact.getBoard(), {
    at: './index.rsh:37:47:application',
    fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:17:function exp)'],
    msg: 'getBoard',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v501, v500, v484],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc1],
    pay: [v501, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v622, v623, v624], secs: v626, time: v625, didSend: v165, from: v621 } = txn1;
      
      sim_r.txns.push({
        amt: v622,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v635 = stdlib.add(v625, v623);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v622, v623, v624], secs: v626, time: v625, didSend: v165, from: v621 } = txn1;
  ;
  const v635 = stdlib.add(v625, v623);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v635],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v621, v622, v624, v635],
      evt_cnt: 0,
      funcNum: 2,
      lct: v625,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v888, time: v887, didSend: v450, from: v886 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v621,
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
    const {data: [], secs: v888, time: v887, didSend: v450, from: v886 } = txn3;
    ;
    ;
    stdlib.protect(ctc4, await interact.informTimeout(), {
      at: './index.rsh:27:29:application',
      fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:25:28:function exp)', 'at ./index.rsh:59:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v742, time: v741, didSend: v275, from: v740 } = txn2;
    ;
    const v745 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v624, v624];
    let v746 = v745;
    let v747 = v741;
    
    while (await (async () => {
      const v758 = v746[stdlib.checkedBigNumberify('./index.rsh:64:19:array ref', stdlib.UInt_max, '0')];
      
      return v758;})()) {
      const v760 = v746[stdlib.checkedBigNumberify('./index.rsh:65:11:array', stdlib.UInt_max, '1')];
      const v766 = stdlib.protect(ctc2, await interact.getHand(), {
        at: './index.rsh:70:52:application',
        fs: ['at ./index.rsh:69:15:application call to [unknown function] (defined at: ./index.rsh:69:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v621, v622, v740, v766],
        evt_cnt: 1,
        funcNum: 4,
        lct: v747,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:72:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v768], secs: v770, time: v769, didSend: v298, from: v767 } = txn3;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc2, ctc5, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v768], secs: v770, time: v769, didSend: v298, from: v767 } = txn3;
      ;
      const v771 = stdlib.addressEq(v621, v767);
      stdlib.assert(v771, {
        at: './index.rsh:72:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 5,
        out_tys: [ctc2, ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v805, v806], secs: v808, time: v807, didSend: v342, from: v804 } = txn4;
      ;
      const v809 = stdlib.addressEq(v740, v804);
      stdlib.assert(v809, {
        at: './index.rsh:87:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v812 = stdlib.mod(v805, stdlib.checkedBigNumberify('./index.rsh:92:35:decimal', stdlib.UInt_max, '100'));
      const v814 = v520[v812];
      const v815 = stdlib.eq(v814, stdlib.checkedBigNumberify('./index.rsh:92:43:decimal', stdlib.UInt_max, '1'));
      if (v815) {
        stdlib.protect(ctc4, await interact.updateShip(), {
          at: './index.rsh:94:28:application',
          fs: ['at ./index.rsh:91:15:application call to [unknown function] (defined at: ./index.rsh:91:19:function exp)'],
          msg: 'updateShip',
          who: 'Alice'
          });
        }
      else {
        }
      const v816 = stdlib.protect(ctc1, await interact.getShip(), {
        at: './index.rsh:96:53:application',
        fs: ['at ./index.rsh:91:15:application call to [unknown function] (defined at: ./index.rsh:91:19:function exp)'],
        msg: 'getShip',
        who: 'Alice'
        });
      const v832 = await stdlib.Array_asyncReduce([v816], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v834], v833, v835) => {
        const v837 = stdlib.add(v833, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
        const v838 = v834 ? v837 : v833;
        
        return v838;})
      const v839 = stdlib.add(v760, stdlib.checkedBigNumberify('./index.rsh:97:56:decimal', stdlib.UInt_max, '1'));
      const v840 = stdlib.le(v832, v839);
      stdlib.assert(v840, {
        at: './index.rsh:97:12:application',
        fs: ['at ./index.rsh:91:15:application call to [unknown function] (defined at: ./index.rsh:91:19:function exp)'],
        msg: 'Dishonest front',
        who: 'Alice'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v621, v622, v740, v806, v816],
        evt_cnt: 1,
        funcNum: 6,
        lct: v807,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:100:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v842], secs: v844, time: v843, didSend: v384, from: v841 } = txn5;
          
          ;
          const v846 = await stdlib.Array_asyncReduce([v806], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v848], v847, v849) => {
            const v851 = stdlib.add(v847, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
            const v852 = v848 ? v851 : v847;
            
            return v852;})
          const v853 = await stdlib.Array_asyncReduce([v842], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v855], v854, v856) => {
            const v858 = stdlib.add(v854, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
            const v859 = v855 ? v858 : v854;
            
            return v859;})
          const v860 = v842[stdlib.checkedBigNumberify('./index.rsh:106:17:array ref', stdlib.UInt_max, '14')];
          const v861 = v806[stdlib.checkedBigNumberify('./index.rsh:106:33:array ref', stdlib.UInt_max, '14')];
          const v862 = v860 ? true : v861;
          const v863 = v862 ? false : true;
          const v864 = [v863, v853, v846, v842, v806];
          const cv746 = v864;
          const cv747 = v843;
          
          await (async () => {
            const v746 = cv746;
            const v747 = cv747;
            
            if (await (async () => {
              const v758 = v746[stdlib.checkedBigNumberify('./index.rsh:64:19:array ref', stdlib.UInt_max, '0')];
              
              return v758;})()) {
              const v760 = v746[stdlib.checkedBigNumberify('./index.rsh:65:11:array', stdlib.UInt_max, '1')];
              sim_r.isHalt = false;
              }
            else {
              const v868 = v746[stdlib.checkedBigNumberify('./index.rsh:114:9:array', stdlib.UInt_max, '3')];
              const v869 = v746[stdlib.checkedBigNumberify('./index.rsh:114:9:array', stdlib.UInt_max, '4')];
              const v870 = v868[stdlib.checkedBigNumberify('./index.rsh:33:54:array ref', stdlib.UInt_max, '14')];
              const v871 = v869[stdlib.checkedBigNumberify('./index.rsh:33:76:array ref', stdlib.UInt_max, '14')];
              const v872 = v871 ? false : true;
              const v873 = v870 ? true : v872;
              const v874 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:117:12:decimal', stdlib.UInt_max, '2'), v622);
              const v875 = v873 ? v621 : v740;
              sim_r.txns.push({
                kind: 'from',
                to: v875,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc2, ctc5, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v842], secs: v844, time: v843, didSend: v384, from: v841 } = txn5;
      ;
      const v845 = stdlib.addressEq(v621, v841);
      stdlib.assert(v845, {
        at: './index.rsh:100:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v846 = await stdlib.Array_asyncReduce([v806], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v848], v847, v849) => {
        const v851 = stdlib.add(v847, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
        const v852 = v848 ? v851 : v847;
        
        return v852;})
      const v853 = await stdlib.Array_asyncReduce([v842], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v855], v854, v856) => {
        const v858 = stdlib.add(v854, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
        const v859 = v855 ? v858 : v854;
        
        return v859;})
      const v860 = v842[stdlib.checkedBigNumberify('./index.rsh:106:17:array ref', stdlib.UInt_max, '14')];
      const v861 = v806[stdlib.checkedBigNumberify('./index.rsh:106:33:array ref', stdlib.UInt_max, '14')];
      const v862 = v860 ? true : v861;
      const v863 = v862 ? false : true;
      const v864 = [v863, v853, v846, v842, v806];
      const cv746 = v864;
      const cv747 = v843;
      
      v746 = cv746;
      v747 = cv747;
      
      continue;
      
      
      
      
      
      }
    const v868 = v746[stdlib.checkedBigNumberify('./index.rsh:114:9:array', stdlib.UInt_max, '3')];
    const v869 = v746[stdlib.checkedBigNumberify('./index.rsh:114:9:array', stdlib.UInt_max, '4')];
    const v870 = v868[stdlib.checkedBigNumberify('./index.rsh:33:54:array ref', stdlib.UInt_max, '14')];
    const v871 = v869[stdlib.checkedBigNumberify('./index.rsh:33:76:array ref', stdlib.UInt_max, '14')];
    const v872 = v871 ? false : true;
    const v873 = v870 ? true : v872;
    const v874 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:117:12:decimal', stdlib.UInt_max, '2'), v622);
    const v875 = v873 ? v621 : v740;
    ;
    stdlib.protect(ctc4, await interact.seeOutcome(v873), {
      at: './index.rsh:121:24:application',
      fs: ['at ./index.rsh:120:7:application call to [unknown function] (defined at: ./index.rsh:120:25:function exp)'],
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
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v622, v623, v624], secs: v626, time: v625, didSend: v165, from: v621 } = txn1;
  ;
  const v635 = stdlib.add(v625, v623);
  const v639 = stdlib.protect(ctc3, await interact.getBoard(), {
    at: './index.rsh:47:47:application',
    fs: ['at ./index.rsh:46:11:application call to [unknown function] (defined at: ./index.rsh:46:15:function exp)'],
    msg: 'getBoard',
    who: 'Bob'
    });
  stdlib.protect(ctc4, await interact.acceptWager(v622), {
    at: './index.rsh:48:25:application',
    fs: ['at ./index.rsh:46:11:application call to [unknown function] (defined at: ./index.rsh:46:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v621, v622, v624, v635],
    evt_cnt: 0,
    funcNum: 1,
    lct: v625,
    onlyIf: true,
    out_tys: [],
    pay: [v622, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v742, time: v741, didSend: v275, from: v740 } = txn2;
      
      sim_r.txns.push({
        amt: v622,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v745 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v624, v624];
      const v746 = v745;
      const v747 = v741;
      
      if (await (async () => {
        const v758 = v746[stdlib.checkedBigNumberify('./index.rsh:64:19:array ref', stdlib.UInt_max, '0')];
        
        return v758;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v868 = v746[stdlib.checkedBigNumberify('./index.rsh:114:9:array', stdlib.UInt_max, '3')];
        const v869 = v746[stdlib.checkedBigNumberify('./index.rsh:114:9:array', stdlib.UInt_max, '4')];
        const v870 = v868[stdlib.checkedBigNumberify('./index.rsh:33:54:array ref', stdlib.UInt_max, '14')];
        const v871 = v869[stdlib.checkedBigNumberify('./index.rsh:33:76:array ref', stdlib.UInt_max, '14')];
        const v872 = v871 ? false : true;
        const v873 = v870 ? true : v872;
        const v874 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:117:12:decimal', stdlib.UInt_max, '2'), v622);
        const v875 = v873 ? v621 : v740;
        sim_r.txns.push({
          kind: 'from',
          to: v875,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v635],
    tys: [ctc5, ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v621, v622, v624, v635],
      evt_cnt: 0,
      funcNum: 2,
      lct: v625,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v888, time: v887, didSend: v450, from: v886 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v621,
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
    const {data: [], secs: v888, time: v887, didSend: v450, from: v886 } = txn3;
    ;
    ;
    stdlib.protect(ctc4, await interact.informTimeout(), {
      at: './index.rsh:27:29:application',
      fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:25:28:function exp)', 'at ./index.rsh:59:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v742, time: v741, didSend: v275, from: v740 } = txn2;
    ;
    const v745 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v624, v624];
    let v746 = v745;
    let v747 = v741;
    
    while (await (async () => {
      const v758 = v746[stdlib.checkedBigNumberify('./index.rsh:64:19:array ref', stdlib.UInt_max, '0')];
      
      return v758;})()) {
      const v761 = v746[stdlib.checkedBigNumberify('./index.rsh:65:11:array', stdlib.UInt_max, '2')];
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v768], secs: v770, time: v769, didSend: v298, from: v767 } = txn3;
      ;
      const v771 = stdlib.addressEq(v621, v767);
      stdlib.assert(v771, {
        at: './index.rsh:72:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v774 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:79:50:application',
        fs: ['at ./index.rsh:78:13:application call to [unknown function] (defined at: ./index.rsh:78:17:function exp)'],
        msg: 'getHand',
        who: 'Bob'
        });
      const v775 = stdlib.mod(v768, stdlib.checkedBigNumberify('./index.rsh:80:40:decimal', stdlib.UInt_max, '100'));
      const v777 = v639[v775];
      const v778 = stdlib.eq(v777, stdlib.checkedBigNumberify('./index.rsh:80:48:decimal', stdlib.UInt_max, '1'));
      if (v778) {
        stdlib.protect(ctc4, await interact.updateShip(), {
          at: './index.rsh:82:28:application',
          fs: ['at ./index.rsh:78:13:application call to [unknown function] (defined at: ./index.rsh:78:17:function exp)'],
          msg: 'updateShip',
          who: 'Bob'
          });
        }
      else {
        }
      const v779 = stdlib.protect(ctc2, await interact.getShip(), {
        at: './index.rsh:84:51:application',
        fs: ['at ./index.rsh:78:13:application call to [unknown function] (defined at: ./index.rsh:78:17:function exp)'],
        msg: 'getShip',
        who: 'Bob'
        });
      const v795 = await stdlib.Array_asyncReduce([v779], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v797], v796, v798) => {
        const v800 = stdlib.add(v796, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
        const v801 = v797 ? v800 : v796;
        
        return v801;})
      const v802 = stdlib.add(v761, stdlib.checkedBigNumberify('./index.rsh:85:53:decimal', stdlib.UInt_max, '1'));
      const v803 = stdlib.le(v795, v802);
      stdlib.assert(v803, {
        at: './index.rsh:85:12:application',
        fs: ['at ./index.rsh:78:13:application call to [unknown function] (defined at: ./index.rsh:78:17:function exp)'],
        msg: 'Dishonest front',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v621, v622, v740, v774, v779],
        evt_cnt: 2,
        funcNum: 5,
        lct: v769,
        onlyIf: true,
        out_tys: [ctc0, ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:87:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v805, v806], secs: v808, time: v807, didSend: v342, from: v804 } = txn4;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc0, ctc5, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v805, v806], secs: v808, time: v807, didSend: v342, from: v804 } = txn4;
      ;
      const v809 = stdlib.addressEq(v740, v804);
      stdlib.assert(v809, {
        at: './index.rsh:87:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v842], secs: v844, time: v843, didSend: v384, from: v841 } = txn5;
      ;
      const v845 = stdlib.addressEq(v621, v841);
      stdlib.assert(v845, {
        at: './index.rsh:100:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v846 = await stdlib.Array_asyncReduce([v806], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v848], v847, v849) => {
        const v851 = stdlib.add(v847, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
        const v852 = v848 ? v851 : v847;
        
        return v852;})
      const v853 = await stdlib.Array_asyncReduce([v842], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v855], v854, v856) => {
        const v858 = stdlib.add(v854, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
        const v859 = v855 ? v858 : v854;
        
        return v859;})
      const v860 = v842[stdlib.checkedBigNumberify('./index.rsh:106:17:array ref', stdlib.UInt_max, '14')];
      const v861 = v806[stdlib.checkedBigNumberify('./index.rsh:106:33:array ref', stdlib.UInt_max, '14')];
      const v862 = v860 ? true : v861;
      const v863 = v862 ? false : true;
      const v864 = [v863, v853, v846, v842, v806];
      const cv746 = v864;
      const cv747 = v843;
      
      v746 = cv746;
      v747 = cv747;
      
      continue;
      
      
      
      
      
      }
    const v868 = v746[stdlib.checkedBigNumberify('./index.rsh:114:9:array', stdlib.UInt_max, '3')];
    const v869 = v746[stdlib.checkedBigNumberify('./index.rsh:114:9:array', stdlib.UInt_max, '4')];
    const v870 = v868[stdlib.checkedBigNumberify('./index.rsh:33:54:array ref', stdlib.UInt_max, '14')];
    const v871 = v869[stdlib.checkedBigNumberify('./index.rsh:33:76:array ref', stdlib.UInt_max, '14')];
    const v872 = v871 ? false : true;
    const v873 = v870 ? true : v872;
    const v874 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:117:12:decimal', stdlib.UInt_max, '2'), v622);
    const v875 = v873 ? v621 : v740;
    ;
    stdlib.protect(ctc4, await interact.seeOutcome(v873), {
      at: './index.rsh:121:24:application',
      fs: ['at ./index.rsh:120:7:application call to [unknown function] (defined at: ./index.rsh:120:25:function exp)'],
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
  appApproval: `BiALAAEGBSAOAggHDzcmAgEAACI1ADEYQQOpKWRJIls1AUkhB1s1AoEQWzUINhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBBAxAAYhJJQxAASlJJAxAALwkEkSxIrIBJLIQNAiyGLMhCDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/V0gPNf5JNQU1/YAESwamlzT9ULA0/zEAEkQiNfwiNfs0/jT7VTX6NPxJIwg0+k01/DT7IwhJNfshCQxA/+IiNfsiNfo0/TT6VTX5NPtJIwg0+U01+zT6IwhJNfohCQxA/+I0/zQDIQRbNANXKCA0/SEFVTT+IQVVERQWUQcINPsWUDT8FlA0/VA0/lAyBkIB8UgkNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQRbNf5XKCA1/Uk1BUkiWzX8VwgPNfuABF5Qgx80/BZQNPtQsDT9MQASRDT/NP4WUDT9UDT7UChLAVcAV2dIIQg1ATIGNQJCAg1IJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+VyggNf1JNQUXNfyABPmLr3g0/BZQsDT/MQASRDT/NP4WUDT9UChLAVcASGdIJDUBMgY1AkIBtEkjDEAApUkhBgxAAEEhBhJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEKWw9EsSKyATQDIQRbsggjshA0A1cAILIHs0IBPEgjNAESRDQESSISTDQCEhFEKGRJNQNJIQRbNf9XKA81/oAEmouRdLAyBjQDIQpbDEQ0/4gBdDQDVwAgNP8xAIARAQAAAAAAAAAAAAAAAAAAAAA0/lA0/lAyBkIAhkiBwJoMiAFFsSKyASSyECKyGIAGBjEAMgkSsh6AAQayH7O0PTUIIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEHWzX+VxAPNf2ABC2Z+mE0/xZQNP4WUDT9ULA0/4gA7TIGNP4INfwxADT/FlA0/VA0/BZQKEsBVwA/Z0gjNQEyBjUCQgCDNf81/jX9Nfw1+zT+VwABF0EAGzT7NPwWUDT9UChLAVcASGdIJTUBMgY1AkIAVbEisgEhBjT8C7III7IQNP00+zT+VxEPIQVVNP5XIA8hBVUUEU2yB7NCAAAxGSUSRLEisgEkshA0CLIYJbIZs7EisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AiI1CEL/vDQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: {
    publish6: 1
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
                "name": "v622",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v623",
                "type": "uint256"
              },
              {
                "internalType": "bool[15]",
                "name": "v624",
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
                "name": "v622",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v623",
                "type": "uint256"
              },
              {
                "internalType": "bool[15]",
                "name": "v624",
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
                "internalType": "uint256",
                "name": "v768",
                "type": "uint256"
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
                "internalType": "uint256",
                "name": "v805",
                "type": "uint256"
              },
              {
                "internalType": "bool[15]",
                "name": "v806",
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
                "internalType": "bool[15]",
                "name": "v842",
                "type": "bool[15]"
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
                "internalType": "uint256",
                "name": "v768",
                "type": "uint256"
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
                "internalType": "uint256",
                "name": "v805",
                "type": "uint256"
              },
              {
                "internalType": "bool[15]",
                "name": "v806",
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
                "internalType": "bool[15]",
                "name": "v842",
                "type": "bool[15]"
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200188a3803806200188a8339810160408190526200002691620002be565b60008080554360035560408051602081018252918252517f2edb4cb1a68a508b300bbe382e71d681db6fc54cd68b1672ef4edca2513b8e74906200006e9033908590620003b0565b60405180910390a16020820151516200008b903414600762000115565b60208083015101516200009f9043620003fe565b8152620000ab6200013f565b3381526020808401805151828401525160409081015181840152835160608401526001600081905543905551620000e59183910162000425565b604051602081830303815290604052600290805190602001906200010b9291906200016d565b50505050620004a5565b816200013b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080516080810182526000808252602082015290810162000160620001fc565b8152602001600081525090565b8280546200017b9062000468565b90600052602060002090601f0160209004810192826200019f5760008555620001ea565b82601f10620001ba57805160ff1916838001178555620001ea565b82800160010185558215620001ea579182015b82811115620001ea578251825591602001919060010190620001cd565b50620001f89291506200021b565b5090565b604051806101e00160405280600f906020820280368337509192915050565b5b80821115620001f857600081556001016200021c565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200026d576200026d62000232565b60405290565b604051606081016001600160401b03811182821017156200026d576200026d62000232565b6040516101e081016001600160401b03811182821017156200026d576200026d62000232565b600081830361024080821215620002d457600080fd5b620002de62000248565b845181526020610220601f1985011215620002f857600080fd5b6200030262000273565b935080860151845260408601518185015286607f8701126200032357600080fd5b6200032d62000298565b9286019280888511156200034057600080fd5b606088015b858110156200036e5780518015158114620003605760008081fd5b835291830191830162000345565b50604086015250810192909252509392505050565b8060005b600f811015620003aa578151151584526020938401939091019060010162000387565b50505050565b6001600160a01b038316815281516020808301919091528083015180516040808501919091529181015160608401520151610260820190620003f6608084018262000383565b509392505050565b600082198211156200042057634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b0316815260208083015190820152604080830151610240830191620004569084018262000383565b50606083015161022083015292915050565b600181811c908216806200047d57607f821691505b602082108114156200049f57634e487b7160e01b600052602260045260246000fd5b50919050565b6113d580620004b56000396000f3fe6080604052600436106100795760003560e01c8063a209ad4e1161004b578063a209ad4e146100e1578063ab53f2c6146100f4578063c638d2f614610117578063f0da69461461012a57005b80631e93b0f1146100825780632c10a159146100a65780637eea518c146100b957806383230757146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610f09565b61013d565b6100806100c7366004610f09565b6102e9565b3480156100d857600080fd5b50600154610093565b6100806100ef366004610f09565b610467565b34801561010057600080fd5b50610109610628565b60405161009d929190610f2c565b610080610125366004610f89565b6106c5565b610080610138366004610f9c565b610867565b61014d6001600054146009610b83565b6101678135158061016057506001548235145b600a610b83565b60008080556002805461017990610faf565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610faf565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a91906110c4565b9050610214610ce9565b61022582606001514310600b610b83565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051610256929190611119565b60405180910390a161026f826020015134146008610b83565b805160019052805160006020909101819052815160409081019190915282018051825160600152518151608001526102a5610d01565b825181516001600160a01b0390911690526020808401518251820152815133604090910152825181830180519190915251439101526102e381610ba8565b50505050565b6102f9600160005414600d610b83565b6103138135158061030c57506001548235145b600e610b83565b60008080556002805461032590610faf565b80601f016020809104026020016040519081016040528092919081815260200182805461035190610faf565b801561039e5780601f106103735761010080835404028352916020019161039e565b820191906000526020600020905b81548152906001019060200180831161038157829003601f168201915b50505050508060200190518101906103b691906110c4565b90506103ca8160600151431015600f610b83565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516103fb929190611119565b60405180910390a161040f3415600c610b83565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561044c573d6000803e3d6000fd5b506000808055600181905561046390600290610d31565b5050565b6104776005600054146012610b83565b6104918135158061048a57506001548235145b6013610b83565b6000808055600280546104a390610faf565b80601f01602080910402602001604051908101604052809291908181526020018280546104cf90610faf565b801561051c5780601f106104f15761010080835404028352916020019161051c565b820191906000526020600020905b8154815290600101906020018083116104ff57829003601f168201915b50505050508060200190518101906105349190611151565b6040805133815284356020808301919091528501358183015290519192507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc0919081900360600190a161058934156010610b83565b80516105a1906001600160a01b031633146011610b83565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b03908116808852898501518452898901518216835260069095554360015587519384019490945290519582019590955293511690830152906080015b604051602081830303815290604052600290805190602001906102e3929190610d6b565b60006060600054600280805461063d90610faf565b80601f016020809104026020016040519081016040528092919081815260200182805461066990610faf565b80156106b65780601f1061068b576101008083540402835291602001916106b6565b820191906000526020600020905b81548152906001019060200180831161069957829003601f168201915b50505050509050915091509091565b6106d56006600054146016610b83565b6106ef813515806106e857506001548235145b6017610b83565b60008080556002805461070190610faf565b80601f016020809104026020016040519081016040528092919081815260200182805461072d90610faf565b801561077a5780601f1061074f5761010080835404028352916020019161077a565b820191906000526020600020905b81548152906001019060200180831161075d57829003601f168201915b50505050508060200190518101906107929190611151565b90507f43b239477be401ba593596e5ff54c41e6599db81cbb29caafecf1b59f66f523d33836040516107c59291906111e5565b60405180910390a16107d934156014610b83565b60408101516107f4906001600160a01b031633146015610b83565b6107fc610def565b81516001600160a01b039081168252602080840151908301526040808401519091168183015280516101e081810183529091850190600f908390839080828437600092018290525060608501939093525050600790554360015560405161060490829060200161121a565b610877600760005414601a610b83565b6108918135158061088a57506001548235145b601b610b83565b6000808055600280546108a390610faf565b80601f01602080910402602001604051908101604052809291908181526020018280546108cf90610faf565b801561091c5780601f106108f15761010080835404028352916020019161091c565b820191906000526020600020905b8154815290600101906020018083116108ff57829003601f168201915b5050505050806020019051810190610934919061127d565b905061093e610e29565b7f062f3d4964039ab26eda89e34f94f56da4c9a6e68a1d2e0d07a043f1a062f804338460405161096f9291906112d7565b60405180910390a161098334156018610b83565b815161099b906001600160a01b031633146019610b83565b6000602082018190525b600f811015610a0857826060015181600f81106109c4576109c4611304565b60200201511515604083018190526109e05781602001516109f1565b600182602001516109f19190611330565b602083015280610a0081611348565b9150506109a5565b50602081015181526000608082018190525b600f811015610a8a576020840181600f8110610a3857610a38611304565b602002016020810190610a4b9190611363565b151560a08301819052610a62578160800151610a73565b60018260800151610a739190611330565b608083015280610a8281611348565b915050610a1a565b5060808101516060820152610aa761020084016101e08501611363565b610aba5760608201516101c00151610abd565b60015b610ac8576001610acb565b60005b60c082018051911515909152606082015181516020908101919091528251915160409081019290925281516101e08181019093529190850190600f908390839080828437600092019190915250505060c08201805160609081019290925290830151905160800152610b3b610d01565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692019190915260c083015181830180519190915251439101526102e381610ba8565b816104635760405163100960cb60e01b81526004810182905260240160405180910390fd5b6020810151515115610c3c576040805160608082018352600080835260208084018281528486018381528751516001600160a01b039081168088528951850151845289518901518216835260059095554360015587518085019590955291518488015251168284015284518083039093018352608090910190935280519192610c379260029290910190610d6b565b505050565b602081015151606001516101c00151610c7057602081015151608001516101c00151610c69576001610c73565b6000610c73565b60015b610c8257805160400151610c86565b8051515b6001600160a01b03166108fc8260000151602001516002610ca79190611380565b6040518115909202916000818181858888f19350505050158015610ccf573d6000803e3d6000fd5b5060008080556001819055610ce690600290610d31565b50565b6040518060200160405280610cfc610e66565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101610cfc610e9d565b508054610d3d90610faf565b6000825580601f10610d4d575050565b601f016020900490600052602060002090810190610ce69190610ebd565b828054610d7790610faf565b90600052602060002090601f016020900481019282610d995760008555610ddf565b82601f10610db257805160ff1916838001178555610ddf565b82800160010185558215610ddf579182015b82811115610ddf578251825591602001919060010190610dc4565b50610deb929150610ebd565b5090565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001610cfc610ed2565b6040518060e0016040528060008152602001600081526020016000151581526020016000815260200160008152602001600015158152602001610cfc5b6040518060a001604052806000151581526020016000815260200160008152602001610e90610ed2565b8152602001610cfc610ed2565b6040518060400160405280610eb0610e66565b8152602001600081525090565b5b80821115610deb5760008155600101610ebe565b604051806101e00160405280600f906020820280368337509192915050565b600060408284031215610f0357600080fd5b50919050565b600060408284031215610f1b57600080fd5b610f258383610ef1565b9392505050565b82815260006020604081840152835180604085015260005b81811015610f6057858101830151858201606001528201610f44565b81811115610f72576000606083870101525b50601f01601f191692909201606001949350505050565b60006102208284031215610f0357600080fd5b60006102008284031215610f0357600080fd5b600181811c90821680610fc357607f821691505b60208210811415610f0357634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561101d5761101d610fe4565b60405290565b80516001600160a01b038116811461103a57600080fd5b919050565b8015158114610ce657600080fd5b600082601f83011261105e57600080fd5b6040516101e080820182811067ffffffffffffffff8211171561108357611083610fe4565b6040528301818582111561109657600080fd5b845b828110156110b95780516110ab8161103f565b825260209182019101611098565b509195945050505050565b600061024082840312156110d757600080fd5b6110df610ffa565b6110e883611023565b815260208301516020820152611101846040850161104d565b60408201526102209290920151606083015250919050565b6001600160a01b0383168152813560208083019190915260608201908301356111418161103f565b8015156040840152509392505050565b60006060828403121561116357600080fd5b6040516060810181811067ffffffffffffffff8211171561118657611186610fe4565b60405261119283611023565b8152602083015160208201526111aa60408401611023565b60408201529392505050565b8060005b600f8110156102e35781356111ce8161103f565b1515845260209384019391909101906001016111ba565b60006102408201905060018060a01b03841682528235602083015260208301356040830152610f2560608301604085016111b6565b60006102408201905060018060a01b0380845116835260208085015181850152816040860151166040850152606085015191506060840160005b600f811015611273578351151582529282019290820190600101611254565b5050505092915050565b6000610240828403121561129057600080fd5b611298610ffa565b6112a183611023565b8152602083015160208201526112b960408401611023565b60408201526112cb846060850161104d565b60608201529392505050565b6001600160a01b03831681528135602080830191909152610220820190610f2590604084019085016111b6565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156113435761134361131a565b500190565b600060001982141561135c5761135c61131a565b5060010190565b60006020828403121561137557600080fd5b8135610f258161103f565b600081600019048311821515161561139a5761139a61131a565b50029056fea264697066735822122023eab0665fef011f3da935cd041227e5f825a9ebfb080c1bcd56be81e0c415ae64736f6c634300080c0033`,
  BytecodeLen: 6282,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:44:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:59:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:118:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:66:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:73:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:88:13:after expr stmt semicolon',
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
