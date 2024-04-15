import { PartialType } from '@nestjs/swagger';
import { CreateMovieDto } from './create-anime.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}