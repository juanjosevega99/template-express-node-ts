import { format, transports, createLogger } from 'winston';

export const Logger = createLogger({
  format: format.json(),
  transports: [new transports.Console()]
});
