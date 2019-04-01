# Angular Flex Layout Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.

It was created in March 2019.

It is loosely based on the [Demo App](https://github.com/angular/flex-layout/tree/master/src/apps/demo-app) provided with Angular Flex Layout.

## Differences with original Demo App
* I have split out the inline Styles and HTML into separate .scss and .html files.
* Moved `style=""` within html to the separate component .scss file as a named class and then replaced the inline style with a class="" reference in the html.
* I have added three Angular services to provide information about:
  * Which version of Angular is being used
  * Which version of Angular Material is being used
  * Which version of Angular Flex Layout is being used
* I created separate *Development* vs. *Production* configurations inside `angular.json` and use them in my modified version of `package.json` which contains separate `ng build` and `ng serve` commands for both configurations.

## Additional Information
* [Angular Flex-Layout on GitHub](https://github.com/angular/flex-layout)
* [Angular Flex WiKi](https://github.com/angular/flex-layout/wiki)
* [Online Demos](https://tburleson-layouts-demos.firebaseapp.com/)
* [Demo Source Code this repository is based upon](https://github.com/angular/flex-layout/tree/master/src/apps/demo-app)
* [Article: Angular In Depth - Angular Flex-Layout](https://blog.angularindepth.com/angular-flex-layout-flexbox-and-grid-layout-for-angular-component-6e7c24457b63)
