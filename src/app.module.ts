import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { LoggerMiddleware } from "./common/middleware/log.middleware";
import { ConfigServiceModule } from "./common/config/config-serivce.module";
import { PostgresModule } from "./common/config/postgres.database.module";
import { ToDoModule } from "./app/to-do/to-do.module";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./common/guard/auth.guard";

@Module({
  imports: [ConfigServiceModule, PostgresModule, ToDoModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*path");
  }
}
