import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {

  // Aquí se podría implementar la lógica para validar que el ID sea un ObjectId de MongoDB, por ejemplo:

  transform(value: string, metadata: ArgumentMetadata) {
    //console.log({ value, metadata });  
    
    if (!isValidObjectId(value)) {
      throw new BadRequestException(`The value ${value} is not a valid MongoDB ObjectId`);
    }
    
    return value;
  }

}
