const mongoose = require("mongoose");
const { GridFSBucket } = require('mongodb');

let buckets = {};
const conn = mongoose.connection;

function ensureBucketReady(bucketName) {
  return new Promise((resolve, reject) => {
    if (buckets[bucketName]) {
      resolve(buckets[bucketName]);
    } else {
      if (conn.readyState === 1) {
        // If the connection is already open, initialize the bucket
        const gfsBucket = new GridFSBucket(conn.db, { bucketName });
        buckets[bucketName] = gfsBucket;
        resolve(gfsBucket);
      } else {
        // Wait for the connection to open
        conn.once('open', () => {
          const gfsBucket = new GridFSBucket(conn.db, { bucketName });
          buckets[bucketName] = gfsBucket;
          resolve(gfsBucket);
        });

        conn.on('error', (err) => {
          reject(err);
        });
      }
    }
  });
}

module.exports = {
  ensureBucketReady,
};
