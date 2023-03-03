import { IsNotEmpty, IsUUID, Length } from 'class-validator';
export class CreateNotificationBody {
  @IsUUID()
  @IsNotEmpty()
  recipientId: string;

  @IsNotEmpty()
  @Length(12, 240)
  content: string;

  @IsNotEmpty()
  category: string;
}
