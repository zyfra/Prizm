import { IconsToLazyExecutorSchema } from './schema';
import executor from './executor';

const options: IconsToLazyExecutorSchema = {};

describe('IconsToLazy Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
