import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from './../service/data/welcome-data.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username = ''

  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['name'];
  }

  getWelcome(){
    console.log(this.service.executeHelloWorldBeanService());
  }

}
