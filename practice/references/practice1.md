### 타입스크립트

인서트 미션3 입니다.  
이번에도 동일하게 PR을 통해 미션을 진행합니다.  
미션2에서는 자바스크립트에 대해 알아보았습니다.  
이번 미션에서는 타입스크립트에 대해 알아보도록 하겠습니다.

타입스크립트(Typescript)는 자바스크립트의 느슨한 타입 관리를 보완해줄 수 있는 JS기반의 슈퍼셋(Superset)언어입니다.  
언어의 이름에서 유추해볼 수 있듯 타입 관리에 있어서 상당한 도움을 줄 수 있는 언어로 많은 프론트엔드 개발자들에게 사랑받고 있습니다.

### 왜쓸까?

그럼 우리가 타입스크립트를 왜 사용해야 하는지 간단하게 알아봅시다.

#### 1. 런타임 에러를 코드 단에서 미리 잡을 수 있다.

자바스크립트에서 타입 에러가 날 경우, 코드를 실행했을 때 실행 단에서 에러가 발생합니다.  
허나 타입스크립트에서는 미리 에러를 잡아주어, 실행 전에 미리 에러를 예방할 수 있게 도와줍니다.

#### 2. 더욱 구체적으로 에러를 명시해준다.

타입스크립트에서는 에러가 어떤 것 때문에 발생했는지 더욱 명시적이고 구체적으로  
알려주며, 그에 대한 솔루션까지 제공합니다. 약간 예를 들면 이런 셈입니다.  
다음과 같은 코드를 보겠습니다.

```js
const like = 3

console.log(liek)
// JS ERROR : 히히 liek를 찾ㅇ을 수 엄습니다 !!ㅣ !ㅏㅓ! ㅣ! !!!
// TS ERROR : liek라는 변수명을 찾을 수 없습니다. like를 의미하시는 건가요?
```

대충 뭐 이런식으로 알려주기 때문에, 더욱 빠르게 에러를 찾을 수 있습니다.

#### 3. 간지가 난다.

깃허브에 커밋했을 때 노란색 자바스크립트가 박혀있는 것보단 파란색이 박혀있으면  
간지가 납니다. 기분이 좋습니다. 암튼 그렇습니다. 내가 뭔가 특별해지는 기분이 듭니다.

사실 저는 반년동안 3번 때문에 타입스크립트를 사용하다가, 최근에서야 사용 이유를  
조금 느끼고 있답니다. 어쨌든 타입스크립트를 배워서 마이너스될 건 없으니, 잘 갈고닦읍시다.

### 타입스크립트 설치하기

먼저 타입스크립트를 설치하기 위해, npm이라는 패키지 매니저가 필요합니다.  
https://nodejs.org/ko  
다음 링크에 들어가 자신의 컴퓨터 사양에 알맞는 LTS를 설치합시다.  
그 다음, cmd를 열어 다음 명령어를 입력해보세요.

```
> node -v
> npm -v
```

버전을 뜻하는 숫자 세 자리가 나온다면 설치에 성공한 겁니다.  
command not found 등의 오류가 발생한다면, 제대로 설치되지 않은 상태입니다.

설치를 완료했다면, 타입스크립트를 설치해봅시다.

```
> npm install -g typescript
```

다음 명령어를 친 후, tsc -v를 입력해보세요.  
버전이 잘 확인이 되었나요?

### 컴파일하기

이제 여러분이 저번 미션에서 만들었던 투두리스트 폴더에 들어가,  
최상위에서 다음과 같은 명령어를 입력해봅시다.

```
> tsc --init
```

이 명령어를 입력하면 tsconfig.json이라는 파일이 하나 생길겁니다.  
tsconfig.json은 타입스크립트를 설정하는 설정 파일입니다.  
다음과 같이 구성되어있을 겁니다.

```json
{
	"compilerOptions": {
		/* Visit https://aka.ms/tsconfig to read more about this file */

		/* Projects */
		// "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
		// "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
		// "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
		// "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
		// "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
		// "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

		/* Language and Environment */
		"target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
		// "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
		// "jsx": "preserve",                                /* Specify what JSX code is generated. */
		// "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
		// "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
		// "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
		// "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
		// "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
		// "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
		// "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
		// "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
		// "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

		/* Modules */
		"module": "commonjs" /* Specify what module code is generated. */,
		// "rootDir": "./",                                  /* Specify the root folder within your source files. */
		// "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
		// "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
		// "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
		// "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
		// "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
		// "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
		// "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
		// "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
		// "resolveJsonModule": true,                        /* Enable importing .json files. */
		// "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

		/* JavaScript Support */
		// "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
		// "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
		// "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

		/* Emit */
		// "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
		// "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
		// "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
		// "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
		// "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
		// "outDir": "./",                                   /* Specify an output folder for all emitted files. */
		// "removeComments": true,                           /* Disable emitting comments. */
		// "noEmit": true,                                   /* Disable emitting files from a compilation. */
		// "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
		// "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */
		// "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
		// "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
		// "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
		// "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
		// "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
		// "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
		// "newLine": "crlf",                                /* Set the newline character for emitting files. */
		// "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
		// "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
		// "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
		// "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
		// "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
		// "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

		/* Interop Constraints */
		// "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
		// "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
		"esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
		// "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
		"forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,

		/* Type Checking */
		"strict": true /* Enable all strict type-checking options. */,
		// "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
		// "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
		// "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
		// "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
		// "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
		// "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
		// "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
		// "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
		// "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
		// "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
		// "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
		// "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
		// "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
		// "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
		// "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
		// "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
		// "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
		// "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

		/* Completeness */
		// "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
		"skipLibCheck": true /* Skip type checking all .d.ts files. */
	}
}
```

다음의 블로그를 참고하여 속성에 대해 공부하세요.  
<a href="https://velog.io/@sooran/tsconfig.json-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%95%8C%EA%B3%A0-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0">링크</a>

그 다음, 설정 파일을 다음과 같이 설정합니다.  
타입스크립트는 컴파일러의 설정을 어떻게 하느냐에 따라  
오류나 발생하는 상황들이 천차만별이기에, 부마위키 프론트엔드의  
tsconfig.json 파일과 함께 설정해봅시다.

바닐라 타입스크립트에서는 에러가 발생할 수 있으니 문제 생기면 연락 바랍니다!

```json
{
	"compilerOptions": {
		"module": "commonjs",
		"moduleResolution": "node",
		"lib": ["es2015", "es2016", "es2017", "es2018", "es2019", "es2020", "es2021"],
		"target": "es5",
		"esModuleInterop": true,
		"noImplicitAny": true,
		"strict": true,
		"noImplicitThis": true,
		"baseUrl": "./"
	}
}
```

이제 index.ts 파일을 생성하고, 타입스크립트 문법을 사용해  
아무 코드나 작성해봅시다.

```ts
// index.ts

const A: number = 3

const func = (parameter: string[]) => {
	const B = parameter.map((item) => {
		if (item.includes('A')) return item
	})

	return B
}

const result = func([A.toString(), '321', 'ABCD'])

console.log(result)

export default A
```

이제 파일을 작성한 다음, 명령어에 "tsc"를 입력해봅시다.  
그럼 index.js 파일이 하나 생길겁니다. 확인이 되었나요?

이런식으로 타입스크립트는 바로 브라우저에 올라가는 것이 아닌,  
트랜스파일 작업이 필요합니다. typescript compiler를 줄여서  
tsc라고 키워드로 정한답니다. 이렇게 사용하면 타입스크립트를 사용할 때마다  
js로 트랜스파일을 해야해서 매우 번거롭겠지만, 특정 라이브러리를 사용하면  
자동으로 트랜스파일을 해주기도 한답니다.  
그런 라이브러리들은 리액트를 시작할 때 배워보겠습니다.

이제 타입스크립트를 컴파일하는 방법도 알았으니, 시작해봅시다.

### import & export

import와 export 입니다.  
import, export 지시자는 타입스크립트만의 문법은 아니지만,  
앞으로 계속 사용해야 하기에 이번 미션에서 함께 알아볼겁니다.

import, export는 각각의 단어의 뜻처럼 모듈과 모듈 내의 함수나 객체 등을 내보내고 불러올 수 있도록 해줍니다.  
즉, 모듈화가 가능해집니다.

적절한 모듈화를 통해 기능별로 파일을 나눠 관리할 수 있으며 이는 유지보수에 훨씬 유리합니다.

```ts
// Add.js
const Add = (num1, num2) => num1 + num2

export default Add
```

```ts
// App.js
import Add from './Add.js'

const App = () => {
	console.log(Add(1, 2)) // 3
}
```

위 코드처럼 export, import를 통해 함수를 모듈화 시키고 호출할 수 있습니다.

한 파일에서 하나만 export 하고자 한다면 export default로 작성하여 명시하여 줄 수 있고,

```ts
    export default const a = 10;
```

여러개를 export 하고자 하면 각각의 함수, 변수, 객체 등 앞에 export를 사용하여 내보낼 수 있습니다.

```ts
export const a = 10
export const b = 20
const c = 30
//a와 b만 내보내짐
```

### export와 export default

export default는 한 파일에서 기본적으로 내보내는 값을 지정해주는 키워드입니다.  
이 키워드를 사용하면, import할 때 사용자가 원하는 명칭으로 import할 수 있다는 특징이 있습니다.

```ts
    // Add.js
    ...
    export default Add;
```

```ts
// App.js
import aislvlbkljv from './Add.js'

const App = () => {
	console.log(aislvlbkljv(1, 2)) // 3
}
```

export는 여러 함수나 메서드들을 내보낼 수 있습니다. export 키워드로 내보낸 속성들을 import할 때에는,  
반드시 이름이 같아야 하며 중괄호를 통해 객체 형식으로 import해야합니다.

```ts
// Theme.js
const primary_color = 'blue'
const sub_color = 'yellow'

const getColor = () => {
	console.log(primary_color)
	console.log(sub_color)
}

export { primary_color, sub_color, getColor }
```

```ts
// App.js
import { sub_color, getColor } from './Theme.js' // 반드시 모든 내보내기 파일을 import할 필요는 없습니다.

getColor()
alert(`제 최애 색상은 ${sub_color}입니다!`)
```

이 import와 export를 통해 파일을 모듈화하면, 잘 모듈화한만큼 코드의 가독성이 높아지고 유지보수가 편해집니다.  
프론트엔드 개발자의 실력 기준에 있어 한 가지 요소가 되는 것은 "모듈화를 얼마나 잘 하는가?"이기도 합니다.

### 타입(type)

```ts
// 타입스크립트에서 사용되는 타입에는 크게 12가지가 존재합니다.
- boolean // true, false
- number  // 실수, 정수
- string  // 문자
- object  // 객체
- array   // 배열
- tuple   // 튜플
- enum    // 열거형
- any     // 아무 타입이나 다 들어갈 수 있음
- void    // 리턴이 없는 함수
- null    // null
- undefined //undefined
- never   // 불가능을 명시
```

앞으로 수도없이 보게될 친구들입니다.  
여기서 문제점은 any는 사용해서는 안됩니다.  
any 타입은 어떤 타입이든지 모두 들어갈 수 있기 떄문에,  
일반 자바스크립트를 사용하는 것과 차이가 없습니다.

앞으로 any 한 개를 쓸 때마다 명치를 한 대씩 맞아야한다고 생각하면 좋습니다.

<img src="https://media.discordapp.net/attachments/1036162758875549761/1104322100124205147/2f0b5bf915c778ccd241c767a30be757.png?width=455&height=469"/>

이러면 죽는다^^..

### 타입 주석 (type annotation)

변수, 객체, 함수 등에 타입을 직관적으로 명시해주는 것을 타입 주석이라고 합니다.  
변수명 뒤에 콜론 키워드를 붙이고 타입을 적어 주석을 명시할 수 있습니다.

```ts
const a: number = 10
const b: string = 'Hello World'
const c: boolean = true
```

### 타입 추론 (type inference)

타입스크립트가 코드를 해석해 나가는 과정에서 타입을 유추해내는 것을 타입 추론이라 합니다.
타입을 명시하지 않은 상태에서 값이 할당되거나 지정된 상태에서 이루어 지며,  
자바스크립트에서도 타입 추론 기능이 있으나 타입스크립트는 더욱 엄격한 타입 추론을 지원합니다.

```ts
const a = 10 // 타입스크립트는 a의 타입을 number로 인식한다.
```

```ts
let a = 10 // 타입추론을 통해 number타입으로 인식됨
let b: string = 'ing' // string 타입으로 명시해줌

a = 'hello' // X (error)
b = 'world' // O
b = 100 // X (error)
```

주석과 추론을 통해 지정된 타입을 벗어난 동작을 시도하면 오류가 발생합니다.  
타입스크립트는 오류를 발생시키는 방법으로 타입을 관리한답니다.  
가끔 타입스크립트가 추론을 하기 어려울 때가 있는데, 일반적인 예를 들면  
파라미터를 받을 때 추론이 불가능해 무조건 직접 타입을 지정해주어야 합니다.

### 인터페이스(interface)

인터페이스는 상호간에 정의한 약속 혹은 규칙입니다.

타입스크립트의 인터페이스 범주는 다음과 같습니다.

- 객체의 속성과 타입
- 함수의 파라미터, 반환타입
- 클래스
- 배열과 객체를 접근하는 방식

주로 타입 지정으로 많이 사용합니다.

```js
let person = { name: 'Yoonchan', age: 18 }

const age = (obj) => {
	console.log(obj.age) // 18
}

age(person)
```

위와 같은 코드를 인터페이스를 적용하면,

```ts
interface PersonType {
	name: string
	age: number
}

let person = { name: 'Yoonchan', age: 18 }

const age = (obj: PersonType) => {
	console.log(obj.age) //18
}

age(person)
```

위처럼 훨씬 명시적으로 바뀌었으며, 앞서 설명한 export import를 통해  
interface를 따로 파일을 분리하면 훨씬 깔끔하게 관리할 수 있습니다.  
다음은 실제 부마위키의 기여문서 인터페이스입니다.

```ts
interface ContributeDocsType {
	userId: number
	userNickName: string
	docsId: number
	createTime: string
	title: string
	versionDocsId: number
}

const A = (docs: ContributeDocsType){
    ...something code
}
```

### 인터페이스 확장 (interface extends)

extends를 통해 이미 정의된 인터페이스를 통해 인터페이스를 확장시킬 수 있습니다.
예제를 한번 보겠습니다.

```ts
interface Animal {
	type: string
}

interface Cat extends Animal {
	place: string
	feed: string
}
```

위와 같이 Cat이 Animal interface를 확장받아 실질적으로는 아래와 같은 기능을 하게 됩니다.

```ts
interface Cat {
	type: string
	place: string
	feed: string
}
```

> 위처럼 중복될 수 있는 타입이나, 다양한 타입을 포함하는 객체의 인터페이스를 사용해야 할때 용이합니다.

### any(any type)

애니 타입은 말 그대로 아무 타입의 값이나 다 올 수 있다는 것입니다.\
많은 프론트엔드 개발자들은 any 타입의 사용을 혐오합니다.  
왜일까요?

그 이유는 any 타입을 사용하게 되면 타입스크립트를 사용하는 이유가 없기 때문입니다.  
타입을 엄격하게 검사하고 처리하는 타입스크립트에서 any 타입은 치명적인 존재입니다.  
any 타입을 사용하면 의도하지 않은 변수가 발생하여도 타입스크립트가 문제를 인지하지 못합니다.  
그렇게되면 의도하지 않은 값이 들어가더라도 찾아낼 수 없고 사전에 예방하지 못하게 됩니다.

any 타입을 가르쳐 주는 이유는 도덕시간에 범죄에 대해 배우는 것과 비슷한 맥락이라고 보면 된다.  
=> 쓰지말라는 뜻임 ^^

### Unkown(unknown type)

언노운 타입은 애니타입과 동일하게 모든 값을 허용합니다.  
하지만 이름 그대로 어떤 값인지 알 수 없기에 바로 프로퍼티나 연산할 수 없습니다.

```ts
let a: unknown = 10

console.log(a.length) // number형인 숫자 10이 할당되었지만 unknown 타입이므로 에러가 발생함
```

unknown 타입으로 변수를 선언하는 것은 컴파일러에게 어떤 값이든 올 수 있으니 엄격히 검사하라는 요청과 같습니다..
그러므로 다음과 같이 조건문을 사용하여 타입 검사를 진행하는 경우에는 오류가 발생하지 않습니다.

```ts
let a: unknown = 10
let b: unknown = 'ing'

if (typeof a === 'number') {
	console.log(a.length) //오류발생
}

if (typeof b === 'ing') {
	console.log(b.length)
}
```

타입검사는 정상적으로 되었지만 a.length에서 오류가 발생합니다.  
a가 number 타입이라서 length를 사용할 수 없다는 경고문을 띄우게 됩니다.

unknown 타입을 사용하게 되면 체크할 부분이 많아지만, any 타입보다는 훨씬 안정적으로 코드를 작성할 수 있습니다.

### 제네릭 타입(generics)

> 타입을 마치 함수의 파라미터처럼 사용하는 것입니다.

```js
const getText = (text) => text
```

위 함수 getText는 text라는 파라미터에 값을 넘겨 받아 그대로 반환해줍니다.

```ts
getText('h1') // 'hi'
getText(10) //10
getText(false) //false
```

이 관점에서 제네릭을 살펴보면 이해가 빠릅니다.

```ts
const getText = <T>(text: T): T => text
```

위와 같이 작성해주면 호출시 할당된 값의 타입에 따라 반환되는 타입이 바뀌게 됩니다.  
제너릭 타입에 대해서는 깊게 따로 공부해보시는 것을 추천드립니다!

### 미션 1

미션 1은 다음과 같습니다!  
아마 공부해야할 점들이 많을 수도 있답니다~

1. 사람 객체를 생성한다.
2. 사람 객체에는 name, age, gender, job 속성이 있으며, job 속성은 선택적인 요소이다.
3. 인터페이스를 생성하여 사람 객체가 가지고 있는 속성들의 타입을 지정한다.  
   name과 job은 문자 타입, age는 숫자, gender는 반드시 'F'와 'M'만 들어가야 한다.
4. 사람 객체를 구조 분해 할당을 사용해 파라미터로 넘겨받아, 사람의 속성을 console로 출력하는 화살표 함수를 작성한다.
5. 함수에 사람 객체를 넣고 실행시킨다.

practice1.ts 파일에 작성해주시면 됩니다~

### 미션 2

미션 2는 다음과 같습니다!  
JS의 배열 관련 순수 함수인 map, forEach, filter에 대해  
공부해보고, 이를 한 파일에 한 번씩 사용해봅시다!  
조건은, 이 함수들을 사용할 때 타입스크립트 문법을 이용해야 합니다.

### 미션 3

미션 3은, 여러분이 투두리스트를 만들며 작성했던 JS파일을 타입스크립트로  
변환시키는 것입니다! 저번 미션 때 작성했던 파일들의 내용을 복사하여 옮긴 후,  
새롭게 타입스크립트 파일을 생성하도록 합니다. 이번 과제는 많이 빡셀 것으로 예상됩니다^^... 화이팅!
