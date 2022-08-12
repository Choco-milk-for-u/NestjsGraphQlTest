import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';

export const gameMiddleware: FieldMiddleware = async (
    ctx: MiddlewareContext,
    next: NextFn,
  ) => {
    const value = await next();
    console.log(value);
    return value;
  };