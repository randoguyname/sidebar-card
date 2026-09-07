# Home Assistant Frontend Types
:lollipop: Frontend types for Home Assistant
Download the package here: <br>
https://www.npmjs.com/package/home-assistant-frontend-types

## Disclaimer:
I am not the owner of the Home Assistant Frontend repo https://github.com/home-assistant/frontend.<br>
The files of this repo are auto generated using a custom tsconfig file and are provided as is.
```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "incremental": false,
    "noEmit": false,
    "strict": false,
    "declaration": true,
    "emitDeclarationOnly": true,
    "declarationDir": "./types"
  },
  "include": [
    "./src/**/*.ts"
  ]
}
```