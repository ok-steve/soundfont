import {App} from '../../src/app';

class RouterStub {
  configure(handler) {
    handler(this);
  }

  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  var sut;
  var mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    sut = new App();
    sut.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('Synthia');
  });

  it('should have a settings route', () => {
    expect(sut.router.routes).toContain({ route: ['', 'settings'], name: 'settings',  moduleId: './settings/settings', nav: true, title: 'Settings' });
  });

  it('should have a synth route', () => {
    expect(sut.router.routes).toContain({ route: 'synth', name: 'synth', moduleId: './synth/synth', nav: true, title: 'Synth' });
  });
});
