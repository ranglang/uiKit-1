import { MockRequest } from 'xhr-mock';
import { RequestData } from '.';
import * as _ from 'lodash';

export const matchMethod = (req: MockRequest, data: RequestData) => {
  return data.method ? data.method === req.method() : true;
};

export const exactMatchUrl = (req: MockRequest, data: RequestData) => {
  return data.url ? _.matches(data.url)(req.url()) : true;
};

export const exactMatchHeaders = (req: MockRequest, data: RequestData) => {
  return data.headers ? _.matches(data.headers)(req.headers()) : true;
};

export const exactMatchBody = (req: MockRequest, data: RequestData) => {
  try {
    return data.body
      ? _.matches(JSON.parse(data.body))(JSON.parse(req.body() || '{}'))
      : true;
  } catch (e) {
    return false;
  }
};

export const exactMatch = (req: MockRequest, data: RequestData) => {
  return [matchMethod, exactMatchUrl, exactMatchHeaders, exactMatchBody].reduce(
    (coll, fn) => coll && fn(req, data),
    true,
  );
};
