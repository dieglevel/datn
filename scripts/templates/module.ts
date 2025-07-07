export const generateModule = (moduleName: string, className: string) =>
  `import { Module } from "@nestjs/common";
import { ${className}Service } from "./${moduleName}.service";
import { ${className}Controller } from "./${moduleName}.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [${className}Controller],
  providers: [${className}Service],
})
export class ${className}Module {}
`;
