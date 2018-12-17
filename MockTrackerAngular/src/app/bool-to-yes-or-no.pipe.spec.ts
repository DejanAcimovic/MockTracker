import { BoolToYesOrNoPipe } from './bool-to-yes-or-no.pipe';

describe('BoolToYesOrNoPipe', () => {
  it('create an instance', () => {
    const pipe = new BoolToYesOrNoPipe();
    expect(pipe).toBeTruthy();
  });
});
