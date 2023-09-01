### Jamie Lewis
### CST-391
### 9/1/23
### Instructor Bobby Estey

---

<div style="text-align:center;"><h3>Activity 2: Angular Tools & First App</h3></div>

### SCREENSHOTS

Installation (ng version)

![ng version](activity%20screenshots/ng%20version.png)

Run Test Application

![testapp](activity%20screenshots/test%20app%20running.png)

Update Title

![Updated Title](activity%20screenshots/update%20app%20title.png)

Add Message

![Added Message](activity%20screenshots/added%20message.png)

---
### RESEARCH

#### A. Project Structure/Files:

- **node_modules**: Contains all third-party libraries and packages (dependencies) managed by npm (Node Package Manager).
- **src**: This is the source folder containing the core source code and assets for the application.
- **src/app**: Contains components, modules, services, and other application-specific code.
- **src/assets**: Stores static assets such as images, fonts, and other files used in the application.
- **src/environments**: Contains environment-specific configuration files for production and development environments.
- **angular.json**: Configuration file for Angular, used to set up project-specific options, build configurations, and dependencies.
- **package.json**: Configuration file listing project dependencies and scripts. Running 'npm install' installs the listed packages, and can contain custom-defined scripts for various tasks.
- **tsconfig.json**: Configuration file for TypeScript, specifying compiler options, file inclusion/exclusion, and module resolution settings.

#### B. Page Source:

- **main.ts**: Entry point of the Angular application, responsible for bootstrapping the AppModule and initializing the Angular platform.
- **app.component.css**: Contains component-specific CSS styles for the root component, defining its visual appearance.
- **app.component.html**: Defines the HTML template for the root component, specifying its structure and how it should render in the browser.
- **app.component.ts**: TypeScript file for the root component (usually AppComponent), containing the component's logic, data, and methods to connect the template and styles.
- **app.module.ts**: Root module of the Angular application, responsible for importing and declaring components, services, and modules, configuring how they work together. It also handles routing and service providers.
