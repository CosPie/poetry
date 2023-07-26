import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TangPoetryService } from "./tangPoetry.service";
import { TangPoetryControllerBase } from "./base/tangPoetry.controller.base";

@swagger.ApiTags("tangPoetries")
@common.Controller("tangPoetries")
export class TangPoetryController extends TangPoetryControllerBase {
  constructor(
    protected readonly service: TangPoetryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
