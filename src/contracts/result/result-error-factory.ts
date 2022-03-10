/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ResultRequestTimeout } from './request-timeout';
import { ResultBadRequest } from './result-bad-request';
import { ResultError } from './result-error';
import { ResultNotFound } from './result-not-found';
import { ResultForbidden } from './result-forbidden';
import { HttpStatusCode } from './http-status-code';
import { Result } from './result';

const HttpStatusCodeToClass = {
  [HttpStatusCode.REQUEST_TIMEOUT]: ResultRequestTimeout,
  [HttpStatusCode.BAD_REQUEST]: ResultBadRequest,
  [HttpStatusCode.NOT_FOUND]: ResultNotFound,
  [HttpStatusCode.FORBIDDEN]: ResultForbidden,
};

export class ResultErrorFactory {
  // @ts-ignore
  static getClass(error) {
    if (error.response.status in HttpStatusCodeToClass) {
      // @ts-ignore
      return HttpStatusCodeToClass[error.response.status];
    }

    return ResultError;
  }

  static create(error: any): Result {
    const ErrorType = ResultErrorFactory.getClass(error);
    return new ErrorType(error?.response?.data?.message || error.message);
  }
}
