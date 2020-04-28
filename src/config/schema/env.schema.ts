import * as Joi from '@hapi/joi';

export const EnvVarsSchema = {
    // PG
    PG_HOST: Joi.string().required(),
    PG_DATABASE: Joi.string().required(),
    PG_USERNAME: Joi.string().required(),
    PG_PASSWORD: Joi.string().required(),
};
