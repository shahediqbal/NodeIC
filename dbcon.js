const mysql = require('mysql2');
const { Client } = require('ssh2');
const sshClient = new Client();

const dbServer = {
    host: '127.0.0.1',
    port: 3306,
    user: 'dcarkeji_shahed',
    password: 'bismillah786',
    database: 'dcarkeji_pos'
}
const tunnelConfig = {
    host: 'business81.web-hosting.com',
    port: 21098,
    username: 'dcarkeji',
    password: '4*85DB1SS83i@2pE',
    readyTimeout: 5000
}
const forwardConfig = {
    srcHost: '127.0.0.1',
    srcPort: 3306,
    dstHost: dbServer.host,
    dstPort: dbServer.port
};
const SSHConnection = new Promise((resolve, reject) => {
    sshClient.on('ready', () => {
        sshClient.forwardOut(
        forwardConfig.srcHost,
        forwardConfig.srcPort,
        forwardConfig.dstHost,
        forwardConfig.dstPort,
        (err, stream) => {
             if (err) reject(err);
             const updatedDbServer = {
                 ...dbServer,
                 stream
            };
            const connection =  mysql.createConnection(updatedDbServer);
           connection.connect((error) => {
            if (error) {
                reject(error);
            }
            resolve(connection);
            });
        });
    }).connect(tunnelConfig);
});

