import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail/mail.service';

@Controller()
export class AppController {
  constructor(private readonly mailSercive: MailService) {}

  @Get('/hello')
  getHello(): string {
    return this.mailSercive.sendEmail();
  }
}
