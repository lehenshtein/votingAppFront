import {Component, OnInit} from '@angular/core';
import {UserService} from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(
    private userService: UserService
  ) {}

  title = 'voting-app';

  ngOnInit(): void {
    this.userService.getUser()
      .subscribe(res => {
        console.log(res);
      });
  }
}
