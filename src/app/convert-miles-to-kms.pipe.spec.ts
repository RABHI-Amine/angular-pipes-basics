import { ConvertMilesToKmsPipe } from './convert-miles-to-kms.pipe';

describe('ConvertMilesToKmsPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertMilesToKmsPipe();
    expect(pipe).toBeTruthy();
  });
});
