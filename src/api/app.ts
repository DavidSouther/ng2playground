import {normalize, join} from 'path';
import {
  Inject,
  Config,
  Request,
  Response,
  Route,
  Rupert,
  RupertPlugin,
  Plugins
} from 'rupert';

const defaults = {
  log: {level: 'info'},
  uploads: {size: '15Mb'},
  static: {
    routes: {
      '/': normalize(join(__dirname, '../client')),
      '/shared': normalize(join(__dirname, '../shared')),
      '/client': normalize(join(__dirname, '../client')),
      '/node_modules': normalize(join(__dirname, '../../node_modules'))
    }
  },
} as any;

/**
 * Load this as the _last_ route.
 */
class Html5Root extends RupertPlugin {
  private staticRoutes: string[];
  constructor(@Inject(Config) private config: Config) {
    super();
    this.staticRoutes = Object.keys(this.config.find<any>('static.routes', {}));
  }

  @Route.GET('/*')
  get(q: Request, s: Response): void {
    s.sendFile(join(this.config.find<any>('static.routes')['/client'], '/index.html'));
  }
}

export const server =
    Rupert.createApp(defaults, [Plugins.Healthz, Plugins.Static, Html5Root]);
if (require.main === module) {
  server.start();
}
