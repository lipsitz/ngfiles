import { UserRoutesModule } from './user-routes.module';

describe('UserRoutesModule', () => {
  let userRoutesModule: UserRoutesModule;

  beforeEach(() => {
    userRoutesModule = new UserRoutesModule();
  });

  it('should create an instance', () => {
    expect(userRoutesModule).toBeTruthy();
  });
});
