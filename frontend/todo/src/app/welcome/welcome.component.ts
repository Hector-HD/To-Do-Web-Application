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
  beanMessage :string

  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['name'];
  }

  getWelcome(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSucesssfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log("Last line of welcome message.");
  }

  handleSucesssfulResponse(response){
    this.beanMessage = response.message;
  }

  handleErrorResponse(error){
    this.beanMessage = error.error.message;
  }
}
