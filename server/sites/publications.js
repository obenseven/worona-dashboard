/* eslint-disable no-underscore-dangle */
import { Meteor } from 'meteor/meteor';
import sites from './collections';

Meteor.publish('sites', function sitesPublish() {
  if (process.env.NODE_ENV === 'development') Meteor._sleepForMs(2000);
  return sites.find(
    { userIds: { $in: [this.userId] }, deleted: { $exists: false } },
    { fields: { userIds: 0, createdAt: 0 } }
  );
});
