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
      5: [ctc0, ctc0, ctc1],
      6: [ctc0, ctc0, ctc1],
      7: [ctc0, ctc0, ctc1, ctc3]
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
  
  
  const v487 = stdlib.protect(ctc1, interact.Ship, 'for Alice\'s interact field Ship');
  const v503 = stdlib.protect(ctc2, interact.deadline, 'for Alice\'s interact field deadline');
  const v504 = stdlib.protect(ctc2, interact.wager, 'for Alice\'s interact field wager');
  
  const v523 = stdlib.protect(ctc3, await interact.getBoard(), {
    at: './index.rsh:44:47:application',
    fs: ['at ./index.rsh:43:13:application call to [unknown function] (defined at: ./index.rsh:43:17:function exp)'],
    msg: 'getBoard',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v504, v503, v487],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:50:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc1],
    pay: [v504, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v625, v626, v627], secs: v629, time: v628, didSend: v165, from: v624 } = txn1;
      
      sim_r.txns.push({
        amt: v625,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v638 = stdlib.add(v628, v626);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v625, v626, v627], secs: v629, time: v628, didSend: v165, from: v624 } = txn1;
  ;
  const v638 = stdlib.add(v628, v626);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v638],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v624, v625, v627, v638],
      evt_cnt: 0,
      funcNum: 2,
      lct: v628,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v894, time: v893, didSend: v453, from: v892 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v624,
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
    const {data: [], secs: v894, time: v893, didSend: v453, from: v892 } = txn3;
    ;
    ;
    stdlib.protect(ctc4, await interact.informTimeout(), {
      at: './index.rsh:34:29:application',
      fs: ['at ./index.rsh:33:9:application call to [unknown function] (defined at: ./index.rsh:33:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:32:28:function exp)', 'at ./index.rsh:66:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v745, time: v744, didSend: v275, from: v743 } = txn2;
    const v747 = stdlib.add(v625, v625);
    ;
    const v749 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:68:24:decimal', stdlib.UInt_max, '2'), v625);
    const v750 = stdlib.eq(v747, v749);
    stdlib.assert(v750, {
      at: './index.rsh:68:10:application',
      fs: [],
      msg: null,
      who: 'Alice'
      });
    const v751 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v627, v627];
    let v752 = v751;
    let v753 = v744;
    
    while (await (async () => {
      const v764 = v752[stdlib.checkedBigNumberify('./index.rsh:72:19:array ref', stdlib.UInt_max, '0')];
      
      return v764;})()) {
      const v766 = v752[stdlib.checkedBigNumberify('./index.rsh:73:11:array', stdlib.UInt_max, '1')];
      const v772 = stdlib.protect(ctc2, await interact.getHand(), {
        at: './index.rsh:78:52:application',
        fs: ['at ./index.rsh:77:15:application call to [unknown function] (defined at: ./index.rsh:77:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v624, v743, v749, v772],
        evt_cnt: 1,
        funcNum: 4,
        lct: v753,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:80:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v774], secs: v776, time: v775, didSend: v301, from: v773 } = txn3;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc5, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v774], secs: v776, time: v775, didSend: v301, from: v773 } = txn3;
      ;
      const v777 = stdlib.addressEq(v624, v773);
      stdlib.assert(v777, {
        at: './index.rsh:80:11:dot',
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
      const {data: [v811, v812], secs: v814, time: v813, didSend: v345, from: v810 } = txn4;
      ;
      const v815 = stdlib.addressEq(v743, v810);
      stdlib.assert(v815, {
        at: './index.rsh:95:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v818 = stdlib.mod(v811, stdlib.checkedBigNumberify('./index.rsh:100:35:decimal', stdlib.UInt_max, '100'));
      const v820 = v523[v818];
      const v821 = stdlib.eq(v820, stdlib.checkedBigNumberify('./index.rsh:100:43:decimal', stdlib.UInt_max, '1'));
      if (v821) {
        stdlib.protect(ctc4, await interact.updateShip(), {
          at: './index.rsh:102:28:application',
          fs: ['at ./index.rsh:99:15:application call to [unknown function] (defined at: ./index.rsh:99:19:function exp)'],
          msg: 'updateShip',
          who: 'Alice'
          });
        }
      else {
        }
      const v822 = stdlib.protect(ctc1, await interact.getShip(), {
        at: './index.rsh:104:53:application',
        fs: ['at ./index.rsh:99:15:application call to [unknown function] (defined at: ./index.rsh:99:19:function exp)'],
        msg: 'getShip',
        who: 'Alice'
        });
      const v838 = await stdlib.Array_asyncReduce([v822], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v840], v839, v841) => {
        const v843 = stdlib.add(v839, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
        const v844 = v840 ? v843 : v839;
        
        return v844;})
      const v845 = stdlib.add(v766, stdlib.checkedBigNumberify('./index.rsh:105:56:decimal', stdlib.UInt_max, '1'));
      const v846 = stdlib.le(v838, v845);
      stdlib.assert(v846, {
        at: './index.rsh:105:12:application',
        fs: ['at ./index.rsh:99:15:application call to [unknown function] (defined at: ./index.rsh:99:19:function exp)'],
        msg: 'Dishonest front',
        who: 'Alice'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v624, v743, v749, v812, v822],
        evt_cnt: 1,
        funcNum: 6,
        lct: v813,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:108:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v848], secs: v850, time: v849, didSend: v387, from: v847 } = txn5;
          
          ;
          const v852 = await stdlib.Array_asyncReduce([v812], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v854], v853, v855) => {
            const v857 = stdlib.add(v853, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
            const v858 = v854 ? v857 : v853;
            
            return v858;})
          const v859 = await stdlib.Array_asyncReduce([v848], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v861], v860, v862) => {
            const v864 = stdlib.add(v860, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
            const v865 = v861 ? v864 : v860;
            
            return v865;})
          const v866 = v848[stdlib.checkedBigNumberify('./index.rsh:114:17:array ref', stdlib.UInt_max, '14')];
          const v867 = v812[stdlib.checkedBigNumberify('./index.rsh:114:33:array ref', stdlib.UInt_max, '14')];
          const v868 = v866 ? true : v867;
          const v869 = v868 ? false : true;
          const v870 = [v869, v859, v852, v848, v812];
          const cv752 = v870;
          const cv753 = v849;
          
          await (async () => {
            const v752 = cv752;
            const v753 = cv753;
            
            if (await (async () => {
              const v764 = v752[stdlib.checkedBigNumberify('./index.rsh:72:19:array ref', stdlib.UInt_max, '0')];
              
              return v764;})()) {
              const v766 = v752[stdlib.checkedBigNumberify('./index.rsh:73:11:array', stdlib.UInt_max, '1')];
              sim_r.isHalt = false;
              }
            else {
              const v874 = v752[stdlib.checkedBigNumberify('./index.rsh:122:9:array', stdlib.UInt_max, '3')];
              const v875 = v752[stdlib.checkedBigNumberify('./index.rsh:122:9:array', stdlib.UInt_max, '4')];
              const v876 = v874[stdlib.checkedBigNumberify('./index.rsh:40:54:array ref', stdlib.UInt_max, '14')];
              const v877 = v875[stdlib.checkedBigNumberify('./index.rsh:40:76:array ref', stdlib.UInt_max, '14')];
              const v878 = v877 ? false : true;
              const v879 = v876 ? true : v878;
              const v881 = v879 ? v624 : v743;
              sim_r.txns.push({
                kind: 'from',
                to: v881,
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
        tys: [ctc5, ctc5, ctc2, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v848], secs: v850, time: v849, didSend: v387, from: v847 } = txn5;
      ;
      const v851 = stdlib.addressEq(v624, v847);
      stdlib.assert(v851, {
        at: './index.rsh:108:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v852 = await stdlib.Array_asyncReduce([v812], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v854], v853, v855) => {
        const v857 = stdlib.add(v853, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
        const v858 = v854 ? v857 : v853;
        
        return v858;})
      const v859 = await stdlib.Array_asyncReduce([v848], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v861], v860, v862) => {
        const v864 = stdlib.add(v860, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
        const v865 = v861 ? v864 : v860;
        
        return v865;})
      const v866 = v848[stdlib.checkedBigNumberify('./index.rsh:114:17:array ref', stdlib.UInt_max, '14')];
      const v867 = v812[stdlib.checkedBigNumberify('./index.rsh:114:33:array ref', stdlib.UInt_max, '14')];
      const v868 = v866 ? true : v867;
      const v869 = v868 ? false : true;
      const v870 = [v869, v859, v852, v848, v812];
      const cv752 = v870;
      const cv753 = v849;
      
      v752 = cv752;
      v753 = cv753;
      
      continue;
      
      
      
      
      
      }
    const v874 = v752[stdlib.checkedBigNumberify('./index.rsh:122:9:array', stdlib.UInt_max, '3')];
    const v875 = v752[stdlib.checkedBigNumberify('./index.rsh:122:9:array', stdlib.UInt_max, '4')];
    const v876 = v874[stdlib.checkedBigNumberify('./index.rsh:40:54:array ref', stdlib.UInt_max, '14')];
    const v877 = v875[stdlib.checkedBigNumberify('./index.rsh:40:76:array ref', stdlib.UInt_max, '14')];
    const v878 = v877 ? false : true;
    const v879 = v876 ? true : v878;
    const v881 = v879 ? v624 : v743;
    ;
    stdlib.protect(ctc4, await interact.seeOutcome(v879), {
      at: './index.rsh:129:24:application',
      fs: ['at ./index.rsh:128:7:application call to [unknown function] (defined at: ./index.rsh:128:25:function exp)'],
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
  const {data: [v625, v626, v627], secs: v629, time: v628, didSend: v165, from: v624 } = txn1;
  ;
  const v638 = stdlib.add(v628, v626);
  const v642 = stdlib.protect(ctc3, await interact.getBoard(), {
    at: './index.rsh:54:47:application',
    fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:15:function exp)'],
    msg: 'getBoard',
    who: 'Bob'
    });
  stdlib.protect(ctc4, await interact.acceptWager(v625), {
    at: './index.rsh:55:25:application',
    fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v624, v625, v627, v638],
    evt_cnt: 0,
    funcNum: 1,
    lct: v628,
    onlyIf: true,
    out_tys: [],
    pay: [v625, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v745, time: v744, didSend: v275, from: v743 } = txn2;
      
      sim_r.txns.push({
        amt: v625,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v749 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:68:24:decimal', stdlib.UInt_max, '2'), v625);
      const v751 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v627, v627];
      const v752 = v751;
      const v753 = v744;
      
      if (await (async () => {
        const v764 = v752[stdlib.checkedBigNumberify('./index.rsh:72:19:array ref', stdlib.UInt_max, '0')];
        
        return v764;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v874 = v752[stdlib.checkedBigNumberify('./index.rsh:122:9:array', stdlib.UInt_max, '3')];
        const v875 = v752[stdlib.checkedBigNumberify('./index.rsh:122:9:array', stdlib.UInt_max, '4')];
        const v876 = v874[stdlib.checkedBigNumberify('./index.rsh:40:54:array ref', stdlib.UInt_max, '14')];
        const v877 = v875[stdlib.checkedBigNumberify('./index.rsh:40:76:array ref', stdlib.UInt_max, '14')];
        const v878 = v877 ? false : true;
        const v879 = v876 ? true : v878;
        const v881 = v879 ? v624 : v743;
        sim_r.txns.push({
          kind: 'from',
          to: v881,
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
    timeoutAt: ['time', v638],
    tys: [ctc5, ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v624, v625, v627, v638],
      evt_cnt: 0,
      funcNum: 2,
      lct: v628,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v894, time: v893, didSend: v453, from: v892 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v624,
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
    const {data: [], secs: v894, time: v893, didSend: v453, from: v892 } = txn3;
    ;
    ;
    stdlib.protect(ctc4, await interact.informTimeout(), {
      at: './index.rsh:34:29:application',
      fs: ['at ./index.rsh:33:9:application call to [unknown function] (defined at: ./index.rsh:33:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:32:28:function exp)', 'at ./index.rsh:66:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v745, time: v744, didSend: v275, from: v743 } = txn2;
    const v747 = stdlib.add(v625, v625);
    ;
    const v749 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:68:24:decimal', stdlib.UInt_max, '2'), v625);
    const v750 = stdlib.eq(v747, v749);
    stdlib.assert(v750, {
      at: './index.rsh:68:10:application',
      fs: [],
      msg: null,
      who: 'Bob'
      });
    const v751 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v627, v627];
    let v752 = v751;
    let v753 = v744;
    
    while (await (async () => {
      const v764 = v752[stdlib.checkedBigNumberify('./index.rsh:72:19:array ref', stdlib.UInt_max, '0')];
      
      return v764;})()) {
      const v767 = v752[stdlib.checkedBigNumberify('./index.rsh:73:11:array', stdlib.UInt_max, '2')];
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v774], secs: v776, time: v775, didSend: v301, from: v773 } = txn3;
      ;
      const v777 = stdlib.addressEq(v624, v773);
      stdlib.assert(v777, {
        at: './index.rsh:80:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v780 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:87:50:application',
        fs: ['at ./index.rsh:86:13:application call to [unknown function] (defined at: ./index.rsh:86:17:function exp)'],
        msg: 'getHand',
        who: 'Bob'
        });
      const v781 = stdlib.mod(v774, stdlib.checkedBigNumberify('./index.rsh:88:40:decimal', stdlib.UInt_max, '100'));
      const v783 = v642[v781];
      const v784 = stdlib.eq(v783, stdlib.checkedBigNumberify('./index.rsh:88:48:decimal', stdlib.UInt_max, '1'));
      if (v784) {
        stdlib.protect(ctc4, await interact.updateShip(), {
          at: './index.rsh:90:28:application',
          fs: ['at ./index.rsh:86:13:application call to [unknown function] (defined at: ./index.rsh:86:17:function exp)'],
          msg: 'updateShip',
          who: 'Bob'
          });
        }
      else {
        }
      const v785 = stdlib.protect(ctc2, await interact.getShip(), {
        at: './index.rsh:92:51:application',
        fs: ['at ./index.rsh:86:13:application call to [unknown function] (defined at: ./index.rsh:86:17:function exp)'],
        msg: 'getShip',
        who: 'Bob'
        });
      const v801 = await stdlib.Array_asyncReduce([v785], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v803], v802, v804) => {
        const v806 = stdlib.add(v802, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
        const v807 = v803 ? v806 : v802;
        
        return v807;})
      const v808 = stdlib.add(v767, stdlib.checkedBigNumberify('./index.rsh:93:53:decimal', stdlib.UInt_max, '1'));
      const v809 = stdlib.le(v801, v808);
      stdlib.assert(v809, {
        at: './index.rsh:93:12:application',
        fs: ['at ./index.rsh:86:13:application call to [unknown function] (defined at: ./index.rsh:86:17:function exp)'],
        msg: 'Dishonest front',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v624, v743, v749, v780, v785],
        evt_cnt: 2,
        funcNum: 5,
        lct: v775,
        onlyIf: true,
        out_tys: [ctc0, ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:95:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v811, v812], secs: v814, time: v813, didSend: v345, from: v810 } = txn4;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc5, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v811, v812], secs: v814, time: v813, didSend: v345, from: v810 } = txn4;
      ;
      const v815 = stdlib.addressEq(v743, v810);
      stdlib.assert(v815, {
        at: './index.rsh:95:9:dot',
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
      const {data: [v848], secs: v850, time: v849, didSend: v387, from: v847 } = txn5;
      ;
      const v851 = stdlib.addressEq(v624, v847);
      stdlib.assert(v851, {
        at: './index.rsh:108:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v852 = await stdlib.Array_asyncReduce([v812], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v854], v853, v855) => {
        const v857 = stdlib.add(v853, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
        const v858 = v854 ? v857 : v853;
        
        return v858;})
      const v859 = await stdlib.Array_asyncReduce([v848], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v861], v860, v862) => {
        const v864 = stdlib.add(v860, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
        const v865 = v861 ? v864 : v860;
        
        return v865;})
      const v866 = v848[stdlib.checkedBigNumberify('./index.rsh:114:17:array ref', stdlib.UInt_max, '14')];
      const v867 = v812[stdlib.checkedBigNumberify('./index.rsh:114:33:array ref', stdlib.UInt_max, '14')];
      const v868 = v866 ? true : v867;
      const v869 = v868 ? false : true;
      const v870 = [v869, v859, v852, v848, v812];
      const cv752 = v870;
      const cv753 = v849;
      
      v752 = cv752;
      v753 = cv753;
      
      continue;
      
      
      
      
      
      }
    const v874 = v752[stdlib.checkedBigNumberify('./index.rsh:122:9:array', stdlib.UInt_max, '3')];
    const v875 = v752[stdlib.checkedBigNumberify('./index.rsh:122:9:array', stdlib.UInt_max, '4')];
    const v876 = v874[stdlib.checkedBigNumberify('./index.rsh:40:54:array ref', stdlib.UInt_max, '14')];
    const v877 = v875[stdlib.checkedBigNumberify('./index.rsh:40:76:array ref', stdlib.UInt_max, '14')];
    const v878 = v877 ? false : true;
    const v879 = v876 ? true : v878;
    const v881 = v879 ? v624 : v743;
    ;
    stdlib.protect(ctc4, await interact.seeOutcome(v879), {
      at: './index.rsh:129:24:application',
      fs: ['at ./index.rsh:128:7:application call to [unknown function] (defined at: ./index.rsh:128:25:function exp)'],
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
  appApproval: `BiAMAAEGBQ5AAggHDzcgJgIBAAAiNQAxGEEDtSlkSSJbNQFJIQdbNQKBEFs1CDYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQQMQAGISSUMQAEpSSQMQAC8JBJEsSKyASSyEDQIshizIQg0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/1dIDzX+STUFNf2ABEsGppc0/VCwNP8xABJEIjX8IjX7NP40+1U1+jT8SSMINPpNNfw0+yMISTX7IQkMQP/iIjX7IjX6NP00+lU1+TT7SSMINPlNNfs0+iMISTX6IQkMQP/iNP80A1cgIDQDIQVbNP0hBFU0/iEEVREUFlEHCDT7FlA0/BZQNP1QNP5QMgZCAgBIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/1cgIDX+IQVbNf1JNQVJIls1/FcIDzX7gAReUIMfNPwWUDT7ULA0/jEAEkQ0/zT+UDT9FlA0+1AoSwFXAFdnSCEINQEyBjUCQgIZSCU0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf9XICA1/iEFWzX9STUFFzX8gAT5i694NPwWULA0/zEAEkQ0/zT+UDT9FlAoSwFXAEhnSCQ1ATIGNQJCAcBJIwxAALRJIQYMQABBIQYSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhClsPRLEisgE0AyELW7III7IQNANXACCyB7NCAUhIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSSELWzX/VygPNf6ABJqLkXSwMgY0AyEKWwxENP+IAYAhBjT/CzX9NP9JCDT9EkQ0A1cAIDEANP2AEQEAAAAAAAAAAAAAAAAAAAAANP5QNP5QMgZCAIZIgcCaDIgBQrEisgEkshAishiABgYxADIJErIegAEGsh+ztD01CCI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hB1s1/lcQDzX9gAQtmfphNP8WUDT+FlA0/VCwNP+IAOoyBjT+CDX8MQA0/xZQNP1QNPwWUChLAVcAP2dIIzUBMgY1AkIAgDX/Nf41/TX8Nfs0/lcAARdBABs0+zT8UDT9FlAoSwFXAEhnSCU1ATIGNQJCAFKxIrIBNP2yCCOyEDT8NPs0/lcRDyEEVTT+VyAPIQRVFBFNsgezQgAAMRklEkSxIrIBJLIQNAiyGCWyGbOxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQIiNQhC/7w0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                "name": "v625",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v626",
                "type": "uint256"
              },
              {
                "internalType": "bool[15]",
                "name": "v627",
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
                "name": "v625",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v626",
                "type": "uint256"
              },
              {
                "internalType": "bool[15]",
                "name": "v627",
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
                "name": "v774",
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
                "name": "v811",
                "type": "uint256"
              },
              {
                "internalType": "bool[15]",
                "name": "v812",
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
                "name": "v848",
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
                "name": "v774",
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
                "name": "v811",
                "type": "uint256"
              },
              {
                "internalType": "bool[15]",
                "name": "v812",
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
                "name": "v848",
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
  Bytecode: `0x6080604052604051620018c0380380620018c08339810160408190526200002691620002be565b60008080554360035560408051602081018252918252517f2edb4cb1a68a508b300bbe382e71d681db6fc54cd68b1672ef4edca2513b8e74906200006e9033908590620003b0565b60405180910390a16020820151516200008b903414600762000115565b60208083015101516200009f9043620003fe565b8152620000ab6200013f565b3381526020808401805151828401525160409081015181840152835160608401526001600081905543905551620000e59183910162000425565b604051602081830303815290604052600290805190602001906200010b9291906200016d565b50505050620004a5565b816200013b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080516080810182526000808252602082015290810162000160620001fc565b8152602001600081525090565b8280546200017b9062000468565b90600052602060002090601f0160209004810192826200019f5760008555620001ea565b82601f10620001ba57805160ff1916838001178555620001ea565b82800160010185558215620001ea579182015b82811115620001ea578251825591602001919060010190620001cd565b50620001f89291506200021b565b5090565b604051806101e00160405280600f906020820280368337509192915050565b5b80821115620001f857600081556001016200021c565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200026d576200026d62000232565b60405290565b604051606081016001600160401b03811182821017156200026d576200026d62000232565b6040516101e081016001600160401b03811182821017156200026d576200026d62000232565b600081830361024080821215620002d457600080fd5b620002de62000248565b845181526020610220601f1985011215620002f857600080fd5b6200030262000273565b935080860151845260408601518185015286607f8701126200032357600080fd5b6200032d62000298565b9286019280888511156200034057600080fd5b606088015b858110156200036e5780518015158114620003605760008081fd5b835291830191830162000345565b50604086015250810192909252509392505050565b8060005b600f811015620003aa578151151584526020938401939091019060010162000387565b50505050565b6001600160a01b038316815281516020808301919091528083015180516040808501919091529181015160608401520151610260820190620003f6608084018262000383565b509392505050565b600082198211156200042057634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b0316815260208083015190820152604080830151610240830191620004569084018262000383565b50606083015161022083015292915050565b600181811c908216806200047d57607f821691505b602082108114156200049f57634e487b7160e01b600052602260045260246000fd5b50919050565b61140b80620004b56000396000f3fe6080604052600436106100795760003560e01c8063a209ad4e1161004b578063a209ad4e146100e1578063ab53f2c6146100f4578063c638d2f614610117578063f0da69461461012a57005b80631e93b0f1146100825780632c10a159146100a65780637eea518c146100b957806383230757146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610f3d565b61013d565b6100806100c7366004610f3d565b61031a565b3480156100d857600080fd5b50600154610093565b6100806100ef366004610f3d565b610498565b34801561010057600080fd5b5061010961065a565b60405161009d929190610f60565b610080610125366004610fbd565b6106f7565b610080610138366004610fd0565b610899565b61014d600160005414600a610bb7565b6101678135158061016057506001548235145b600b610bb7565b60008080556002805461017990610fe3565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610fe3565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a91906110f8565b9050610214610d16565b61022582606001514310600c610bb7565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338460405161025692919061114d565b60405180910390a161026f826020015134146008610bb7565b602082015161027f90600261119b565b808252602083015161029e919061029690806111ba565b146009610bb7565b602080820180516001905280516000920182905280516040908101929092529083018051825160600152519051608001526102d7610d35565b825181516001600160a01b039091169052805133602091820152825182516040015282810151818301805191909152514391015261031481610bdc565b50505050565b61032a600160005414600e610bb7565b6103448135158061033d57506001548235145b600f610bb7565b60008080556002805461035690610fe3565b80601f016020809104026020016040519081016040528092919081815260200182805461038290610fe3565b80156103cf5780601f106103a4576101008083540402835291602001916103cf565b820191906000526020600020905b8154815290600101906020018083116103b257829003601f168201915b50505050508060200190518101906103e791906110f8565b90506103fb81606001514310156010610bb7565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161042c92919061114d565b60405180910390a16104403415600d610bb7565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561047d573d6000803e3d6000fd5b506000808055600181905561049490600290610d65565b5050565b6104a86005600054146013610bb7565b6104c2813515806104bb57506001548235145b6014610bb7565b6000808055600280546104d490610fe3565b80601f016020809104026020016040519081016040528092919081815260200182805461050090610fe3565b801561054d5780601f106105225761010080835404028352916020019161054d565b820191906000526020600020905b81548152906001019060200180831161053057829003601f168201915b505050505080602001905181019061056591906111d2565b6040805133815284356020808301919091528501358183015290519192507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc0919081900360600190a16105ba34156011610bb7565b80516105d2906001600160a01b031633146012610bb7565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015183526006909555436001558751938401949094529051909216948101949094525190830152906080015b60405160208183030381529060405260029080519060200190610314929190610d9f565b60006060600054600280805461066f90610fe3565b80601f016020809104026020016040519081016040528092919081815260200182805461069b90610fe3565b80156106e85780601f106106bd576101008083540402835291602001916106e8565b820191906000526020600020905b8154815290600101906020018083116106cb57829003601f168201915b50505050509050915091509091565b6107076006600054146017610bb7565b6107218135158061071a57506001548235145b6018610bb7565b60008080556002805461073390610fe3565b80601f016020809104026020016040519081016040528092919081815260200182805461075f90610fe3565b80156107ac5780601f10610781576101008083540402835291602001916107ac565b820191906000526020600020905b81548152906001019060200180831161078f57829003601f168201915b50505050508060200190518101906107c491906111d2565b90507f43b239477be401ba593596e5ff54c41e6599db81cbb29caafecf1b59f66f523d33836040516107f7929190611269565b60405180910390a161080b34156015610bb7565b6020810151610826906001600160a01b031633146016610bb7565b61082e610e23565b81516001600160a01b039081168252602080840151909116908201526040808301518183015280516101e081810183529091850190600f908390839080828437600092018290525060608501939093525050600790554360015560405161063690829060200161129e565b6108a9600760005414601b610bb7565b6108c3813515806108bc57506001548235145b601c610bb7565b6000808055600280546108d590610fe3565b80601f016020809104026020016040519081016040528092919081815260200182805461090190610fe3565b801561094e5780601f106109235761010080835404028352916020019161094e565b820191906000526020600020905b81548152906001019060200180831161093157829003601f168201915b50505050508060200190518101906109669190611300565b9050610970610e5d565b7f062f3d4964039ab26eda89e34f94f56da4c9a6e68a1d2e0d07a043f1a062f80433846040516109a192919061135a565b60405180910390a16109b534156019610bb7565b81516109cd906001600160a01b03163314601a610bb7565b6000602082018190525b600f811015610a3a57826060015181600f81106109f6576109f6611387565b6020020151151560408301819052610a12578160200151610a23565b60018260200151610a2391906111ba565b602083015280610a328161139d565b9150506109d7565b50602081015181526000608082018190525b600f811015610abc576020840181600f8110610a6a57610a6a611387565b602002016020810190610a7d91906113b8565b151560a08301819052610a94578160800151610aa5565b60018260800151610aa591906111ba565b608083015280610ab48161139d565b915050610a4c565b5060808101516060820152610ad961020084016101e085016113b8565b610aec5760608201516101c00151610aef565b60015b610afa576001610afd565b60005b60c082018051911515909152606082015181516020908101919091528251915160409081019290925281516101e08181019093529190850190600f908390839080828437600092019190915250505060c08201805160609081019290925290830151905160800152610b6d610d35565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260c0830151818301805191909152514391015261031481610bdc565b816104945760405163100960cb60e01b81526004810182905260240160405180910390fd5b6020810151515115610c72576040805160608082018352600080835260208084018281528486018381528751516001600160a01b0390811680885289518501518216845289518901518352600590955543600155875180850195909552915190911683870152518284015284518083039093018352608090910190935280519192610c6d9260029290910190610d9f565b505050565b602081015151606001516101c00151610ca657602081015151608001516101c00151610c9f576001610ca9565b6000610ca9565b60015b610cb857805160200151610cbc565b8051515b6001600160a01b03166108fc8260000151604001519081150290604051600060405180830381858888f19350505050158015610cfc573d6000803e3d6000fd5b5060008080556001819055610d1390600290610d65565b50565b604051806040016040528060008152602001610d30610e9a565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101610d30610ed1565b508054610d7190610fe3565b6000825580601f10610d81575050565b601f016020900490600052602060002090810190610d139190610ef1565b828054610dab90610fe3565b90600052602060002090601f016020900481019282610dcd5760008555610e13565b82601f10610de657805160ff1916838001178555610e13565b82800160010185558215610e13579182015b82811115610e13578251825591602001919060010190610df8565b50610e1f929150610ef1565b5090565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001610d30610f06565b6040518060e0016040528060008152602001600081526020016000151581526020016000815260200160008152602001600015158152602001610d305b6040518060a001604052806000151581526020016000815260200160008152602001610ec4610f06565b8152602001610d30610f06565b6040518060400160405280610ee4610e9a565b8152602001600081525090565b5b80821115610e1f5760008155600101610ef2565b604051806101e00160405280600f906020820280368337509192915050565b600060408284031215610f3757600080fd5b50919050565b600060408284031215610f4f57600080fd5b610f598383610f25565b9392505050565b82815260006020604081840152835180604085015260005b81811015610f9457858101830151858201606001528201610f78565b81811115610fa6576000606083870101525b50601f01601f191692909201606001949350505050565b60006102208284031215610f3757600080fd5b60006102008284031215610f3757600080fd5b600181811c90821680610ff757607f821691505b60208210811415610f3757634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561105157611051611018565b60405290565b80516001600160a01b038116811461106e57600080fd5b919050565b8015158114610d1357600080fd5b600082601f83011261109257600080fd5b6040516101e080820182811067ffffffffffffffff821117156110b7576110b7611018565b604052830181858211156110ca57600080fd5b845b828110156110ed5780516110df81611073565b8252602091820191016110cc565b509195945050505050565b6000610240828403121561110b57600080fd5b61111361102e565b61111c83611057565b8152602083015160208201526111358460408501611081565b60408201526102209290920151606083015250919050565b6001600160a01b03831681528135602080830191909152606082019083013561117581611073565b8015156040840152509392505050565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156111b5576111b5611185565b500290565b600082198211156111cd576111cd611185565b500190565b6000606082840312156111e457600080fd5b6040516060810181811067ffffffffffffffff8211171561120757611207611018565b60405261121383611057565b815261122160208401611057565b6020820152604083015160408201528091505092915050565b8060005b600f81101561031457813561125281611073565b15158452602093840193919091019060010161123e565b60006102408201905060018060a01b03841682528235602083015260208301356040830152610f59606083016040850161123a565b81516001600160a01b03908116825260208084015190911681830152604080840151908301526060808401516102408401929091840160005b600f8110156112f65783511515825292820192908201906001016112d7565b5050505092915050565b6000610240828403121561131357600080fd5b61131b61102e565b61132483611057565b815261133260208401611057565b60208201526040830151604082015261134e8460608501611081565b60608201529392505050565b6001600160a01b03831681528135602080830191909152610220820190610f59906040840190850161123a565b634e487b7160e01b600052603260045260246000fd5b60006000198214156113b1576113b1611185565b5060010190565b6000602082840312156113ca57600080fd5b8135610f598161107356fea2646970667358221220f8fa844da55445f67415acd45b1d695e9bf814ba2cc5fdb2cd68fc9a6d52b49a64736f6c634300080c0033`,
  BytecodeLen: 6336,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:51:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:66:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:126:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:74:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:81:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:96:13:after expr stmt semicolon',
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
