/* Comprobaciones de lo que está sucediendo dentro del store- action */

const logger = (store) => (next) => (action)=>{
    console.group(action.type)
    console.log('this action: ', action)
    const returnValue = next(action)
    console.log('the new state: ', store.getState())
    console.groupEnd()
    return returnValue
}
export default logger;