import { Injectable } from '@nestjs/common';
import { TshirtGroupDto } from './dto/tshirt-group.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TshirtGroup } from './models/tshirt_group.model';
import { Tshirt } from './models/tshirt.model';
import { TshirtTranslation } from './models/tshirt_translation.model';
import { TshirtGroupTranslation } from './models/tshirt_group_translation.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(TshirtGroup)
    private tshirtGroupModel: typeof TshirtGroup,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  async findAllTshirts(): Promise<TshirtGroupDto[]> {
    const language = 'en';
    const groups = await this.tshirtGroupModel.findAll({
      include: [
        {
          model: Tshirt,
          include: [
            {
              model: TshirtTranslation,
              where: { language: language },
              attributes: ['description'],
            },
          ],
          attributes: ['id'],
        },
        {
          model: TshirtGroupTranslation,
          where: { language: language },
          attributes: ['description'],
        },
      ],
      attributes: [],
    });
    return groups.map((group) => {
      return {
        group: group.translations[0].description,
        items: group.tshirts.map((tshirt) => {
          return {
            id: tshirt.id,
            name: tshirt.translations[0].description,
          };
        }),
      };
    });
  }
}
