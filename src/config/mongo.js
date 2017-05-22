const mongoLogs = (mongoose) => {
    mongoose
        .connection
        .on('open', (err) => {
            console.log('Mongoose is connected');
        });

    mongoose
        .connection
        .on('connected', () => {
            console.log('Mongoose default connection opened to ');
        });

    mongoose
        .connection
        .on('error', (err) => {
            console.log('Mongoose default connection error: '.concat(err));
        });
};

export {mongoLogs};
