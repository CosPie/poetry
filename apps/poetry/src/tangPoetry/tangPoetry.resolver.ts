import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TangPoetryResolverBase } from "./base/tangPoetry.resolver.base";
import { TangPoetry } from "./base/TangPoetry";
import { TangPoetryService } from "./tangPoetry.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TangPoetry)
export class TangPoetryResolver extends TangPoetryResolverBase {
  constructor(
    protected readonly service: TangPoetryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
