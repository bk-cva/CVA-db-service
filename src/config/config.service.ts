import * as dotenv from 'dotenv';
import * as Joi from '@hapi/joi';
import * as fs from 'fs';
import * as path from 'path';
import { EnvVarsSchema } from './schema/env.schema';

export interface EnvConfig {
    [key: string]: string;
}

export class ConfigService {
    private readonly envConfig: EnvConfig;

    constructor() {
        const configFile = path.join('env', process.env.NODE_ENV === 'production' ? 'prod.env'
            : process.env.NODE_ENV === 'test' ? 'test.env'
            : 'dev.env');
        if (!fs.existsSync(configFile)) {
            throw new Error(`File ${configFile} not found.`);
        }
        const config = dotenv.parse(fs.readFileSync(configFile));
        this.envConfig = this.validateInput(config);
    }

    /**
     * Ensures all needed variables are set, and returns the validated JavaScript object
     * including the applied default values.
     */
    private validateInput(envConfig: EnvConfig): EnvConfig {
        const envVarsSchema: Joi.ObjectSchema = Joi.object(EnvVarsSchema);

        const { error, value: validatedEnvConfig } = envVarsSchema.validate(
            envConfig,
        );
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedEnvConfig;
    }

    get(key: string): string {
        if (`ENV_${key}` in process.env) {
            return process.env[`ENV_${key}`];
        }
        if (key in this.envConfig) {
            return this.envConfig[key];
        }
        else {
            throw new Error(`Configuration has no ${key} key.`);
        }
    }
}
