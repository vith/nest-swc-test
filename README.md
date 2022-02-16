# nest-swc-test

Reproduce an issue with NestJS/TypeORM repository injection when compiling with swc.

```console
$ pnpm run start
...
this.userRepo is present
```

```console
$ pnpm run start:swc
...
this.userRepo is undefined
```

