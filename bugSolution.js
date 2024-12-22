```javascript
const query = { name: 'John Doe' };

// Correct use of $in operator with a single value (enclosed in an array)
db.collection('users').find({ name: { $in: ['John Doe'] } }).toArray((err, docs) => {
  console.log(docs);
});

// Alternatively, use an equality operator for a single value comparison
db.collection('users').find({ name: 'John Doe' }).toArray((err, docs) => {
  console.log(docs);
});
```