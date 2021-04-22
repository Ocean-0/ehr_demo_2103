import send from './Send'

const URL_JOBLIST = 'http://localhost:8081/';

const PATH_JOBLIST_01 = 'getJobListPart';

export const reqJobList = (data, method) => send(URL_JOBLIST, PATH_JOBLIST_01, data, method)
