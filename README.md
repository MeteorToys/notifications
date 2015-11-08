Meteor Toys - Notifications Package
===================================

Meteor Toys provide in-app notifications to save you time from having to go into the console every time an error occurs. It works pretty simple:

```javascript
Note("text");                       // logs string "text"
Note("Tracker Re-runs", "counter"); // logs string and keeps counter
Note("Result", object);             // logs string and object
```

When you run Meteor Toys, this package will use them to display the notifications. If they are not available, it will default to `console.log`.

