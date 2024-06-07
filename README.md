This is a reproducer for the problem using yarn berry (3.2.3) workspaces and nestjs mongoose module.

This problem has been reported in many places but the fix could not be identified.

For information, the problem is:
```
[Nest] 76674  - 06/06/2024, 5:51:49 PM     LOG [NestFactory] Starting Nest application...
[Nest] 76674  - 06/06/2024, 5:51:49 PM     LOG [InstanceLoader] MongoModule dependencies initialized +7ms
[Nest] 76674  - 06/06/2024, 5:51:49 PM     LOG [InstanceLoader] MongooseModule dependencies initialized +0ms
[Nest] 76674  - 06/06/2024, 5:51:49 PM   ERROR [ExceptionHandler] Nest can't resolve dependencies of the MongooseCoreModule (MongooseConnectionName, ?). Please make sure that the argument ModuleRef at index [1] is available in the MongooseCoreModule context.

Potential solutions:
- Is MongooseCoreModule a valid NestJS module?
- If ModuleRef is a provider, is it part of the current MongooseCoreModule?
- If ModuleRef is exported from a separate @Module, is that module imported within MongooseCoreModule?
  @Module({
    imports: [ /* the Module containing ModuleRef */ ]
  })

Error: Nest can't resolve dependencies of the MongooseCoreModule (MongooseConnectionName, ?). Please make sure that the argument ModuleRef at index [1] is available in the MongooseCoreModule context.

Potential solutions:
- Is MongooseCoreModule a valid NestJS module?
- If ModuleRef is a provider, is it part of the current MongooseCoreModule?
- If ModuleRef is exported from a separate @Module, is that module imported within MongooseCoreModule?
  @Module({
    imports: [ /* the Module containing ModuleRef */ ]
  })

    at Injector.lookupComponentInParentModules (/Users/ssi/workspace/scratchpad/server-core-demo.monorepo-issue.basic/app/node_modules/@nestjs/core/injector/injector.js:254:19)
    at Injector.resolveComponentInstance (/Users/ssi/workspace/scratchpad/server-core-demo.monorepo-issue.basic/app/node_modules/@nestjs/core/injector/injector.js:207:33)
    at resolveParam (/Users/ssi/workspace/scratchpad/server-core-demo.monorepo-issue.basic/app/node_modules/@nestjs/core/injector/injector.js:128:38)
    at async Promise.all (index 1)
    at Injector.resolveConstructorParams (/Users/ssi/workspace/scratchpad/server-core-demo.monorepo-issue.basic/app/node_modules/@nestjs/core/injector/injector.js:143:27)
    at Injector.loadInstance (/Users/ssi/workspace/scratchpad/server-core-demo.monorepo-issue.basic/app/node_modules/@nestjs/core/injector/injector.js:70:13)
    at Injector.loadProvider (/Users/ssi/workspace/scratchpad/server-core-demo.monorepo-issue.basic/app/node_modules/@nestjs/core/injector/injector.js:97:9)
    at /Users/ssi/workspace/scratchpad/server-core-demo.monorepo-issue.basic/app/node_modules/@nestjs/core/injector/instance-loader.js:56:13
    at async Promise.all (index 0)
    at InstanceLoader.createInstancesOfProviders (/Users/ssi/workspace/scratchpad/server-core-demo.monorepo-issue.basic/app/node_modules/@nestjs/core/injector/instance-loader.js:55:9)
```

# KO Test

To reproduce the problem using workspaces: `./test-ko.sh`

# OK Test

To see that the application should be working (except that workspaces are not used): `./test-ok.sh`
This is for information only and not a valid workaround as workspaces should be usable.

(Note that the application may display a connection error if no mongo server is available on your system
 but this is fine, all the required initialization has been done)
