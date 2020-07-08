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
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSucesssfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeWithParameter(){
    this.service.executeHelloWorldBeanServicePathVariable(this.username).subscribe(
      response => this.handleSucesssfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSucesssfulResponse(response){
    this.beanMessage = response.message;
  }

  handleErrorResponse(error){
    this.beanMessage = error.error.message;
  }
}
