import {Component, View} from 'angular2/angular2';
import {RouterLink, RouteConfig} from 'angular2/router';
import {NavigationBarComponent} from "../../components/navigationBar/navigationBar";


@View( {
    templateUrl: 'app/pages/home/home.html',
    directives: [NavigationBarComponent]
})
@Component(
    {
        selector: 'home'
    }
)
export class HomePage {}