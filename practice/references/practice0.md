### 도약하기

여러분 들여쓰기 한다고 고생 많으셨죠?  
이 챕터에서는 타입스크립트를 공부하기 전에 필요한 것들과 코딩에 유용한  
기능들을 설치해보는 시간을 가져보겠습니다.

이제 편하게 개발해봅시다. 여러분에게 extension을 소개합니다!!!

### extension

일단 visual studio code로 작업한다고 가정하겠습니다. 아니라면 설치하세요!!

extension을 아시는 분들도 있겠지만, 코딩을 편하게 하는 유용한 extension들이  
매우 많습니다. 이중에서 핵심적으로 꼭 있으면 좋은 extension들에 대해 알아보겠습니다.  
vscode 왼쪽 위에서 5번째 아이콘을 눌러보세요. 마켓플레이스가 뜰 겁니다.  
여기서 원하는 익스텐션을 검색해 다운받아 사용할 수 있답니다.

유용한 extension들을 소개할게요!

### Auto Rename Tag

한 태그만 변경해도 감싸고 있는 태그가 자동으로 변환됩니다.

<img src="https://github.com/formulahendry/vscode-auto-rename-tag/raw/HEAD/images/usage.gif"/>

### Error Lens

오류를 코드 단에 바로 보여주는 익스텐션입니다.

<img src="https://raw.githubusercontent.com/usernamehw/vscode-error-lens/master/img/demo.png"/>

### HTML CSS Support

HTML CSS를 Support해줍니다.

### HTML End Tag Labels

어떤 태그가 어디서 닫히는지 표시해줍니다.
<img src="https://github.com/anteprimorac/vscode-html-end-tag-labels/raw/HEAD/images/screenshot-1.png"/>

### Image Preview

이미지를 갖고왔을 때 코드 왼쪽에 미리 이미지를 보여주는 익스텐션입니다.  
이미지를 잘 가지고 왔는지 확인할 때 유용합니다.
<img src="https://raw.githubusercontent.com/kisstkondoros/gutter-preview/master/images/sample.png"/>

### Material Icon Theme

파일들의 아이콘을 조금 더 이쁘게 보여줍니다.
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/images/fileIcons.png"/>

### Pretty TypeScript Errors

타입스크립트의 에러를 조금 더 정확하게 보여줍니다.

### Prettier

익스텐션의 꽃입니다. 들여쓰기나 코드의 방식을 저장버튼을 누를 때마다  
자동으로 지정해줍니다.

아래 블로그의 1번을 보고 따라하도록 합니다.

<a href="https://velog.io/@dum6894/%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-vscode-prettier-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%82%AC%EC%9A%A9%EB%B2%95">링크</a>

1-3번의 설정 코드를 다음과 같이 변경하도록 합니다.

```json
{
	"prettier.printWidth": 80,
	"prettier.semi": true,
	"prettier.singleQuote": false,
	"prettier.trailingComma": "all",
	"prettier.tabWidth": 2,
	"prettier.bracketSpacing": true,
	"prettier.endOfLine": "auto",
	"prettier.useTabs": false,
	"prettier.arrowParens": "always"
}
```

그다음, 원하는 파일에 들어가 저장 버튼을 한번 눌러봅시다.  
어떤가요??? 안되면 바로 얘기하세용  
이제 조금 더 편하게 코딩을 할 수 있겠죠?
