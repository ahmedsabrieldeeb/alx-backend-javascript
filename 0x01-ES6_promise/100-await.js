import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const value = {
    photo: undefined,
    user: undefined,
  };

  try {
    value.photo = await uploadPhoto();
    value.user = await createUser();
  } catch (error) {
    value.photo = null;
    value.user = null;
  }

  return value;
}
