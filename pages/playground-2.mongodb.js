/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('Firedata');

// Search for documents in the current collection.
db.getCollection('logdatas')
  .find(
    {
      /*
      * Filter
      * fieldA: value or expression
      */
    },
    {
      /*
      * Projection
      * _id: 0, // exclude _id
      * fieldA: 1 // include field
      */
    }
  )
  .sort({ log:''
    /*
    * fieldA: 1 // ascending
    * fieldB: -1 // descending
    */
  });
