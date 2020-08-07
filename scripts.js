function timer(ms) {
    return new Promise(
        ( resolve, reject ) => { setTimeout( () => { resolve(); }, ms ); }
    );
}

timer(1000).then(
    () => {
        console.log('hi');
    },
)