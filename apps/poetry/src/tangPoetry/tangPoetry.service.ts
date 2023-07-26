import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TangPoetryServiceBase } from "./base/tangPoetry.service.base";

@Injectable()
export class TangPoetryService extends TangPoetryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
