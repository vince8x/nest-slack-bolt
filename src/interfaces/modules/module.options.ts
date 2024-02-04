import { ModuleMetadata, Type } from '@nestjs/common';
import { AppOptions } from '@slack/bolt';

export interface SlackModuleOptions extends AppOptions {}

export interface SlackModuleOptionsFactory {
  createSlackModuleOptions(): Promise<SlackModuleOptions> | SlackModuleOptions;
}

export interface SlackModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<SlackModuleOptionsFactory>;
  useClass?: Type<SlackModuleOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<SlackModuleOptions> | SlackModuleOptions;
  inject?: any[];
}
