import {
  Inject,
  Config,
  Request,
  Response,
  Route,
  RupertPlugin
} from 'rupert';

import {Runtime, IStore, ITransaction, StoreExecutionType, EntitySpec} from 'jefri';

class EasyStore implements IStore {
  store: {[k: string]: {[k: string]: EntitySpec}} = {};

  execute(type: StoreExecutionType, transaction: ITransaction<EntitySpec>): Promise<ITransaction<EntitySpec>> {
    switch(type) {
      case StoreExecutionType.get:
        return this.get(transaction);
      case StoreExecutionType.persist:
        return this.persist(transaction);
      default:
        throw new Error(`Unknown StoreExecutionType: ${type}`);
    }
  }

  get(t: ITransaction<EntitySpec>): Promise<ITransaction<EntitySpec>> {
    return Promise.resolve(
      t.entities
          .map(e => (this.store[e._type] || {})[e._id || ''])
          .filter(e => e != null)
    );
  }

  persist(t: ITransaction<EntitySpec>): Promise<ITransaction<EntitySpec>> {
    t.entities
    .filter(e => e._id != null)
    .forEach(e => {
      this.store[e._type] = this.store[e._type] || {};
      this.store[e._type][e._id!] = e;
    });
    return Promise.resolve(t.entities);
  }
}

export class JefriPlugin extends RupertPlugin {
  runtime: Runtime;
  store = new EasyStore();
  constructor(@Inject(Config) private config: Config) {
    super();
    const contextId = this.config.find('jefri.context', '../shared/heroes.json');
    const context = require(contextId);
    this.runtime = new Runtime('', {
      debug: {context}
    });
  }

  @Route.POST('/api/jefri/get')
  get(q: Request, s: Response): void {
    this.store.execute(StoreExecutionType.get, q.body as ITransaction<EntitySpec>)
  }

  @Route.POST('/api/jefri/persist')
  persist(q: Request, s: Response): void {
    this.store.execute(StoreExecutionType.persist, q.body as ITransaction<EntitySpec>)
  }
}