import { Test, TestingModule } from '@nestjs/testing';
import { PersonalAddressService } from './personal-address.service';

describe('PersonalAddressService', () => {
    let service: PersonalAddressService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PersonalAddressService],
        }).compile();

        service = module.get<PersonalAddressService>(PersonalAddressService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
