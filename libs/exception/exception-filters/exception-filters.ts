import { Catch, Logger } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';

import { BaseException } from '../base-exception';

@Catch(BaseException)
export class ExceptionFilter implements GqlExceptionFilter {
  private readonly logger = new Logger('ExceptionFilter');

  public catch(exception: BaseException) {
    const serializedName = exception.getSerializedName();
    const description = exception.getDescription();

    this.logger.error({ date: new Date(), description, stack: exception.stack, status: exception.getStatus() });

    return {
      error: {
        [serializedName]: description || serializedName,
      },
    };
  }
}
