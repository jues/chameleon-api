import cmlBridge from 'chameleon-bridge';
import consoleLog from '../consoleLog/index.js';

const moduleName = 'record';

export const createWeexRecord = function (param = {}) {
  // cb({name:'jim'})
  return new Promise((resolve, reject) => {
    consoleLog("before callNative create")
    cmlBridge.callNative(
      moduleName, // 模块名
      'create', // 方法名
      param, // 参数
      res => {
        let { errno, msg } = res;//data:{id:1}
        if (errno == 0) {
          console.log('create-success');
          res.msg = res.msg + 'create-success'
          resolve(res)
        } else {
          reject({ errno: -1, msg: 'failed create weex record' })
        }
      });
  })

}
export const startWeexRecord = function (param, cb = () => { }) {
  /**
 * @param:{id:1}
 */
  cmlBridge.callNative(
    moduleName, // 模块名
    'start', // 方法名
    param, // 参数
    res => {
      consoleLog('started before cb')
      let { errno, msg } = res;//data:{id:1}
      cb(res)
    });
}
export const stopWeexRecord = function (cb = () => { }) {
  /**
 * @param:{id:1}
 */
  cmlBridge.callNative(
    moduleName, // 模块名
    'stop', // 方法名
    null, // 参数
    res => {
      let { errno, msg } = res;//data:{id:1}
      consoleLog('stopped before cb')
      cb(res)
    });
}
// export const seekToWeexAudio = function(param,cb = () => {}) {
//   /**
//  * @param:{id:1,msec:10} msec单位：ms
//  */
//   cmlBridge.seekToWeexAudio(param,function(res){
//     let {errno,msg} = res;//data:{id:1}
//     if(errno == 0){
//       cb(res)
//     }
//   });
// }
// export const getWeexAudioCurrentPos = function(param,cb = () => {}) {
//   /**
//  * @param:{id:1}
//  */
//   cmlBridge.getWeexAudioCurrentPos(param,function(res){
//     let {errno,msg,data} = res;//data:{msec:10}
//     if(errno == 0){
//       cb(res)
//     }
//   });
// }
// export const destroyAudio = function(param,cb = () => {}){
//   cmlBridge.destroyAudio(param,function(res){
//     let {errno,msg} = res; 
//     if(errno == 0){
//       cb(res);
//     }
//   })
// }
// export const audioBufferChange = function(cb = () => {}) {
//   /**
//  * @param:{id:1}
//  */
//   cmlBridge.audioBufferChange(function(res){
//     cb(res) //res{"id":0,"percent":10}
//   });
// }
// export const audioStatusChange = function(cb = () => {}) {
//   /**
//  * @param:{id:1}
//  */
//   cmlBridge.audioStatusChange(function(res){
//     cb(res) //{"id":0,"status":1} 准备:1 ,播放：2，暂停：3，结束：4
//   });
// }