#!/usr/bin/node
/* eslint-disable */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const result = [];
      for (const value of values) {
        if (value.status === 'fulfilled') {
          result.push({ status: value.status, value: value.value });
        } else {
          result.push({ status: value.status, value: `${value.reason}` });
        }
      }
      return result;
    });
}
