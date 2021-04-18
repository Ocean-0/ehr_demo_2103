
import dateCalculat from './CheckDate'

const CachedData = function(){
    var cData = [];
    var other = {
        saveTime: null,
        maxAge: null,
        maxlength: null,
    }
    return {
        setCachedData: function(data,timer,maxlength){
            cData = null;
            cData = [...data];
            other.saveTime = new Date();
            other.maxAge = timer || 3600;
            other.maxlength = maxlength || 100;
        },
        getCachedData: function(workPlace,station){
            console.log(cData)
            return cData;
        },
        clearCachedData: function(){
            if (!cData || cData.length == 0)return;
            var temp = [];
            temp.push(other.saveTime);
            temp.push(other.maxlength);
            temp.push(new Date());
            return new Promise(function(resolve ,reject){
                if(dateCalculat(temp) == 1 || cData.length > 100){
                    resolve();
                }
                else{
                    reject();
                }
            })
            .then(function(){
                setTimeout(() => cData = null,0)
            },function(){
                console.error('nothing to clear')
            })
            .catch(function(e){
                console.error('clearCachedData error: ',e)
            })
        },
        length: 3,
    }
}
export default CachedData;