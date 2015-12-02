import {bootstrap, Component, View} from 'angular2/angular2';
import {ROUTER_PROVIDERS, RouterOutlet, RouteConfig} from 'angular2/router';
import {HomePage} from "./pages/home/home";
import {AboutPage} from "./pages/about/about";
import {NavigationBarComponent} from "./components/navigationBar/navigationBar";

@View({
    templateUrl: 'app/app.html',
    directives: [NavigationBarComponent, RouterOutlet]
})
@Component({
        selector: 'app'
})
@RouteConfig([
    { path: '/',   as: 'Home',   component: HomePage },
    { path: '/about', as: 'About', component: AboutPage }
])
class AppComponent{}

bootstrap(AppComponent, [ROUTER_PROVIDERS]);
