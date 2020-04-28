import { Test, TestingModule } from '@nestjs/testing';
import * as Joi from '@hapi/joi';

const mockDotEnvParse = jest.fn();

jest.mock('dotenv', () => ({
    parse: mockDotEnvParse,
}));
jest.mock('fs', () => ({
    existsSync: () => true,
    readFileSync: () => '',
}));

import { ConfigService } from './config.service';

jest.mock('./schema/env.schema', () => ({
    EnvVarsSchema: {
        NUMBER: Joi.number().required(),
        STRING: Joi.string().required(),
    },
}));

describe('ConfigService', () => {
    let service: ConfigService;
    const NUMBER = '10';
    const STRING = 'a';
    mockDotEnvParse.mockImplementation(() => ({
        NUMBER,
        STRING,
    }));

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ConfigService],
        }).compile();

        service = module.get<ConfigService>(ConfigService);
    });

    it('test invalidate input', () => {
        mockDotEnvParse.mockImplementationOnce(() => ({}));

        expect(() => new ConfigService()).toThrow(Error);
    });

    it('test get key', () => {
        expect(service.get('NUMBER')).toBe(parseInt(NUMBER, 10));
        expect(service.get('STRING')).toBe(STRING);
    });

    it('test get not exiting key', () => {
        expect(() => service.get('NOT_EXISTING_KEY')).toThrowError('Configuration has no NOT_EXISTING_KEY key.');
    });
});
