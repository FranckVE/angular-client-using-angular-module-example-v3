# project building process

## preparation commands

```bash
cd ~/Documents/WebStormProjects2017
curl -u 'FranckVE' https://api.github.com/user/repos -d '{"name":"angular-client-using-angular-module-example-v3", "private": false, "has_issues": true, "has_projects": true, "has_wiki": true}'
ng new angular-client-using-angular-module-example-v3 --routing
cd angular-client-using-angular-module-example-v3
git remote add origin https://github.com/FranckVE/angular-client-using-angular-module-example-v3
ng g module blue-butterfly
ng g component blue-butterfly
```

## open in WebStorm

### add to git the blue-butterfly folder

```
right-click on the blue-butterfly folder
[menu] > Git > Add
```

### test the app

```
ng serve --port 5456
```

go to http://localhost:5456 


## export the blue-butterfly component from the blue-butterfly module

In `blue-butterfly.module.ts` :

```
...
import { BlueButterflyComponent } from './blue-butterfly.component';
...
@NgModule({
  ...
  exports: [
    ...
    BlueButterflyComponent
    ...
  ],
  ...
})
...
```

## import and use blue-butterfly in the main app module

### in `app.module.ts`

```
...
import { BlueButterflyModule } from './blue-butterfly/blue-butterfly.module';
...
@NgModule({
  ...
  imports: [
    ...
    BlueButterflyModule
    ...
  ],
  ...
})
...
```

### in `app.component.html`

```html
<app-blue-butterfly></app-blue-butterfly>
```

## add an external dependency of your own (public GitHub project `angular-module-example-v3`)

```bash
yarn add https://github.com/FranckVE/angular-module-example-v3
```

Will output :

```
yarn add v0.24.6
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
└─ angular-module-example-v3@0.1.0
✨  Done in 7.71s.
```

Check the change in `package.json` inside `"dependencies": {`:

```
    "angular-module-example-v3": "https://github.com/FranckVE/angular-module-example-v3",
```

## use the external module `angular-module-example-v3`

In blue-butterfly, `blue-butterfly.module.ts` :

```javascript
...
import { SquareOakModule } from 'angular-module-example-v3/src/app';
...

@NgModule({
  imports: [
    ...
    SquareOakModule,
    ...
  ],
  ...
})
...
```

In blue-butterfly, `blue-butterfly.component.html` :

```html
<app-square-oak></app-square-oak>
```

Check everything works with `ng serve`.



# original readme.md for AngularClientUsingAngularModuleExampleV3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
