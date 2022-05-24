import * as R from 'ramda';
import { toast } from 'react-toastify';
import React from 'react';
import { PopupMessage } from '../components/commons';
import specialCharacters from '../config/specialChars.config';

export const populateFields = (array, populatedObject, fieldsToPopulate) => {
  const arrayCopy = R.clone(array);

  arrayCopy.map((el) => {
    return Object.entries(populatedObject).forEach(([, value]) => {
      fieldsToPopulate.forEach((field) => {
        if (el[field] === R.pathOr(null, [field, 'id'], value)) {
          el[field] = value[field];
        }
      });
    });
  });

  return arrayCopy;
};

/**
 * Handle error from http request
 * @param error
 */
export const handleError = (error) => {
  let errorMsg = 'Unexpected error';
  if (error.response) {
    errorMsg = error.response.data.message;
  } else if (error.message) {
    errorMsg = error.message;
  }

  toast.error(<PopupMessage msg={errorMsg} error />);
};

/**
 * first letter to uppercase
 * @param displayName
 */
export const renderDisplayName = (displayName) => {
  if (!displayName) return displayName;
  const result = displayName.trim().split(' ');
  result.forEach((name, index) => {
    result[index] = name.charAt(0).toUpperCase() + name.slice(1);
  });
  return result.join(' ');
};

export const removeSpecialChars = (text) => {
  specialCharacters.forEach((char) => {
    const regex = new RegExp(`\\${char}`, 'g');
    text = text.replace(regex, ``);
  });
  return text;
};
