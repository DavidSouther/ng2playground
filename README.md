* [Angular 2](http://angular.io)
* [Rupert](https://github.com/rupertjs/rupert)
* [JEFRi](https://github.com/jefri)

```
npm install
npm start
```

* [Running App](http://localhost:8080)
* [Test Runner](http://localhost:8080/unit-tests.html)

## Task list
* [X] Create Superhero context
* [X] Generate .d.ts for context
* [ ] Execute tests consistently in Karma & Mocha
* [ ] Load JEFRi context in server
* [ ] Load JEFRi data in client
  * [ ] Create JEFRi angular2 service
  * [ ] Inject JEFRi service to HeroService
  * [ ] Migrate components from shared/hero to shared/heroes
* [ ] JACKi CRUD
  * [ ] /heroes
  * [ ] /heroes/:id
* [ ] Growing with Jacki
  * [ ] Add entity incidents {name: string, heroes: Hero* []}
  * [ ] /incidents
  * [ ] /incident/:id
  * [ ] /incident/:id/assign/:id (Assign a hero to an incident, and show hero as on-task
  * [ ] /incident/:id/resolved (Mark incident resolved, and show heroes as available)
* [ ] Calculator with Jacki
  * [ ] Reset project to empty
  * [ ] Add "Simple Interest Calculator"
    * [ ] {name, principal, rate, time, PERT()}
    * [ ] /loans
    * [ ] /loans/:id
    * [ ] Show PERT, update as values change
* [ ] TabletTop
  * [ ] Load TabletTop context
    * [ ] Character Sheet
    * [ ] /characters
    * [ ] /characters/:id
    * [ ] Replace stats with stat blocks
    * [ ] ... more blocks
    * [ ] Weapons
    * [ ] Magic
    * [ ] Class Picker
    * [ ] Abilities
    * [ ] Levels