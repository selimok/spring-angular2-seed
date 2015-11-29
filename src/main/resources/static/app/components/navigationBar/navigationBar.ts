import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@View({
    templateUrl: 'app/components/navigationBar/navigationBar.html',
    directives: [RouterLink]
})
@Component({
    selector: 'navigation-bar'
})

export class NavigationBarComponent {}