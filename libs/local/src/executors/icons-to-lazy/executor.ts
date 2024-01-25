import { IconsToLazyExecutorSchema } from './schema';

export default async function runExecutor(options: IconsToLazyExecutorSchema) {
  console.log('Executor ran for IconsToLazy', options);
  return {
    success: true,
  };
}
