
const dateCalculat = function(obj){
    var [saveTime,maxlength,currentTime] = obj;
    return saveTime.valueOf() + maxlength > currentTime.valueOf()?0:1;
}
export default dateCalculat;