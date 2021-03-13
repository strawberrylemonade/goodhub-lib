import * as Sentry from '@sentry/react';

export class CustomError extends Error {
  type: string
  code: number

  constructor(message: string) {
    super(message)
    this.type = 'CustomError'
    this.code = 400
  }

  toJSON() {
    return {
      message: this.message,
      type: this.type
    }
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}

export class MissingParameterError extends CustomError {
  params: string[]

  constructor(...missingParams: string[]) {

    super(`Required parameters not supplied: ${missingParams.join(', ')}`)
    this.params = missingParams
    this.type = 'MissingParameterError';
    this.code = 400;
  }

  toJSON() {
    return {
      message: this.message,
      type: this.type,
      params: this.params
    }
  }
}

export class BadRequestError extends CustomError {
  constructor(message: string) {
    super(message)
    this.type = 'BadRequestError';
    this.code = 400;
  }
}

export class NotAuthorisedError extends CustomError {
  constructor(message: string) {
    super(message)
    this.type = 'NotAuthorisedError';
    this.code = 401;
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string) {
    super(message)
    this.type = 'NotFoundError';
    this.code = 404;
  }
}

export class DatabaseError extends CustomError {
  constructor(message: string) {
    super(message)
    this.type = 'DatabaseError';
    this.code = 500;
  }
}

export const withTransaction = (func: (...args: any[]) => any, name: string) => {
  return async (...args: any[]) => {
    const transaction = Sentry.startTransaction({ name });
    Sentry.configureScope(scope => scope.setSpan(transaction));
    try {
      const response = await func(...args, transaction)
      transaction.finish();
      return response;
    } catch (e) {
      console.error(e);
      Sentry.captureException(e);
      throw e;
    }
  }
}