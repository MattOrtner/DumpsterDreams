const Aws = require('aws-sdk')
const s3 = new Aws.S3({ region: 'us-east-2' })

// s3.putObject({  
//   Body: 'hey what up',
//   Bucket: "dumpsterdreams.inventory-image-uploads",
//   Key: 'firstAttempt',
// }, (error, data) => {
//     if (error) {
//       console.error(error)
//     } else {
//       console.log('success', data);
//     }
// })

// s3.getObject({  
//   Bucket: "dumpsterdreams.inventory-image-uploads",
//   Key: 'firstAttempt',
// }, (error, data) => {
//     if (error) {
//       console.error(error)
//     } else {
//       console.log('success', data, data.Body.toString());
//     }
// })

s3.deleteObject({
  Bucket: 'dumpsterdreams.inventory-image-uploads',
  Key: 'firstAttempt'
}, (error, data) => {
    if (error) {
      console.error(error)
    } else {
      console.log(data);
    }
})