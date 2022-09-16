import BaseError from './BaseError';

export default class AuthError extends BaseError {
  constructor(message?: string) {
    super(message || 'User already exists', 409);
  }
}
