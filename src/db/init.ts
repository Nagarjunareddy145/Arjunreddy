 
import Language from './models/arjun';
import categories from './models/categories';
import service from './models/service';
import Login from './models/ttt';
 


async function init(){
    const isDev = true;

  
    await Language.sync({alter:isDev})
    await Login.sync({alter:isDev})
    await service.sync({alter:isDev})
    await categories.sync({alter:isDev})
}

const dbInit =() => {
    init();
}

export default dbInit;