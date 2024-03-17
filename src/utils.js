export function timechecker(startTime){
    return Math.floor((Date.now() - Date.parse(startTime) ) / 60000)
}
export function ISValidTime(userTime,DBTime){
    return userTime >= DBTime
}