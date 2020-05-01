import { Test, TestingModule } from '@nestjs/testing';
import { PersonalAddressController } from './personal-address.controller';

describe('PersonalAddress Controller', () => {
    let controller: PersonalAddressController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PersonalAddressController],
        }).compile();

        controller = module.get<PersonalAddressController>(PersonalAddressController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
