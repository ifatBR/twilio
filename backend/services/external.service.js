async function execute() {
    console.log('executing!');
    try{
        if (Math.random() > 0.5) {
            return parseInt(Math.random() * 100);
        }
        else throw new Error('failed');
        
    }catch(err){
        console.log(err);
        throw err;
    }    
}

// function execute() {
//     console.log('executing!');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.5) resolve(parseInt(Math.random() * 100));
//             else reject('Err');
//         }, 0);
//     });
// }

module.exports = {
    execute,
};
