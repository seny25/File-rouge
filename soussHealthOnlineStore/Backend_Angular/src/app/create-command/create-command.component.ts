import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandService } from '../command-service/command.service';
import { Command } from '../models/command';

@Component({
  selector: 'app-create-command',
  templateUrl: './create-command.component.html',
  styleUrls: ['./create-command.component.css']
})
export class CreateCommandComponent implements OnInit {


  command:Command = new Command();
constructor(private commandService: CommandService, 
  private router: Router) { }

ngOnInit(): void {
}

saveCommand(){
this.commandService.createCommand(this.command).subscribe(data => {
console.log(data);
this.goToCommandList();

},
error => console.log(error));
}

goToCommandList(){
  this.router.navigate(['/command']);

}

onSubmit(){
  console.log(this.command);
  this.saveCommand()
  this.goToCommandList();

}
}
