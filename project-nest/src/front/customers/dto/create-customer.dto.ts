import { IsNotEmpty } from 'class-validator';
export class CreateCustomerDto {
    @IsNotEmpty()
    phone_number: string;

    last_name: string;

    first_name: string;
}
