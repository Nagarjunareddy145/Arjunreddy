 
import Language from './models/arjun';
import categories from './models/categories';
import Driver from './models/driver';
import Restaurant from './models/restaurant';
import service from './models/service';
import Login from './models/ttt';
import User from './models/user';
 


async function init(){
    const isDev = true;

  
    await Language.sync({alter:isDev})
    await Login.sync({alter:isDev})
    await service.sync({alter:isDev})
    await categories.sync({alter:isDev})
    await User.sync({alter:isDev})
    await Driver.sync({alter:isDev})
    await Restaurant.sync({alter:isDev})
}

const dbInit =() => {
    init();
}

export default dbInit;