import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ExploreComponent} from "./components/explore/explore.component";
import {NotificationsComponent} from "./components/notifications/notifications.component";
import {MessagesComponent} from "./components/messages/messages.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {TweetComponent} from "./components/tweet/tweet.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'explore', component: ExploreComponent, pathMatch: 'full'},
  {path: 'notifications', component: NotificationsComponent, pathMatch: 'full'},
  {path: 'messages', component: MessagesComponent, pathMatch: 'full'},
  {path: 'settings', component: SettingsComponent, pathMatch: 'full'},
  {path: ':user-name', component: ProfileComponent, pathMatch: 'full'},
  {path: ':user-name/:id', component: TweetComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
