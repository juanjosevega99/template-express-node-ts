import { Application, Response } from 'express';
import httpStatus from 'http-status';
import os from 'os';

export const router = (server: Application): void => {
  server.get('/', (_req, res: Response) => {
    return res
      .status(httpStatus.OK)
      .send({ message: 'API Running', instance: os.hostname() });
  });
};
