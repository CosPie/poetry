import { Module } from "@nestjs/common";
import { TangPoetryModuleBase } from "./base/tangPoetry.module.base";
import { TangPoetryService } from "./tangPoetry.service";
import { TangPoetryController } from "./tangPoetry.controller";
import { TangPoetryResolver } from "./tangPoetry.resolver";

@Module({
  imports: [TangPoetryModuleBase],
  controllers: [TangPoetryController],
  providers: [TangPoetryService, TangPoetryResolver],
  exports: [TangPoetryService],
})
export class TangPoetryModule {}
