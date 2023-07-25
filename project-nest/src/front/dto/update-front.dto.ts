import { PartialType } from '@nestjs/mapped-types';
import { CreateFrontDto } from './create-front.dto';

export class UpdateFrontDto extends PartialType(CreateFrontDto) {}
