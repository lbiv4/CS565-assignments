import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";
import { ApplicationRef, enableProdMode, NgModuleRef } from "@angular/core";

platformBrowserDynamic().bootstrapModule(AppModule);
