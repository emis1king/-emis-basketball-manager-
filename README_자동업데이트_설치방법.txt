EMIS 농구 매니저 — 자동 업데이트를 지원하도록 준비한 iPad PWA

포함 파일
- index.html: EMIS V43 게임 본체
- manifest.webmanifest: 홈 화면 앱 설정
- service-worker.js: 온라인 최신 HTML 우선 + 오프라인 캐시
- icons/: 앱 아이콘
- .nojekyll: GitHub Pages 배포용

중요한 사실
이 ZIP만으로 인터넷에 공개된 앱 주소가 자동 생성되지는 않습니다. 사용자가 GitHub 저장소에 업로드하고 Pages를 켜야 합니다. 이 채팅에서 파일을 수정해도 사용자의 저장소에 자동 업로드되지는 않습니다.

처음 한 번만 할 일 (iPad에서도 가능)
1. GitHub 계정에 로그인하고 새 저장소(repository)를 만듭니다. 예: emis-basketball-manager
2. 저장소를 Public으로 설정하고 생성합니다.
3. 저장소의 Add file → Upload files를 누릅니다.
4. ZIP을 먼저 iPad 파일 앱에서 압축 해제한 다음, 압축 해제된 폴더 안의 파일(index.html, manifest.webmanifest, service-worker.js, icons 폴더, .nojekyll)을 저장소 최상위에 업로드합니다. 폴더 안에 또 다른 프로젝트 폴더를 중첩시키지 마세요.
5. Commit changes를 누릅니다.
6. 저장소 Settings → Pages → Build and deployment에서 Deploy from a branch를 선택하고 Branch를 main, Folder를 /(root)로 설정한 뒤 Save를 누릅니다.
7. Pages가 제공하는 https://...github.io/... 주소가 준비되면 iPad Safari에서 엽니다.
8. Safari 공유 버튼 → 홈 화면에 추가를 선택합니다.

앞으로 업데이트하는 방법
1. ChatGPT에서 새 EMIS 버전을 받습니다.
2. 새 HTML을 index.html로 이름을 맞춰 저장합니다.
3. GitHub 저장소에서 기존 index.html을 새 파일로 교체하고 Commit changes를 누릅니다.
4. 앱을 온라인 상태에서 다시 열거나 새로고침합니다. 서비스 워커는 HTML을 서버에서 먼저 확인하고, 인터넷이 없으면 저장된 캐시를 사용합니다.
5. 서비스 워커 자체를 바꾸는 업데이트라면 service-worker.js도 함께 교체합니다. 새 서비스 워커의 캐시 이름을 바꿔야 캐시를 갱신할 수 있습니다.

저장 데이터 주의
- 기존 로컬 HTML 파일에서 플레이하던 데이터는 새 HTTPS 주소로 자동 이전되지 않을 수 있습니다.
- 업데이트 전에 게임 내 저장/백업 기능이 있으면 먼저 백업하세요.
- 같은 HTTPS 주소를 계속 사용하면 브라우저 저장 데이터가 유지될 가능성이 높지만, 브라우저 데이터 삭제/사이트 저장 공간 초기화는 피하세요.
- 서버 업데이트는 게임 코드를 바꾸는 것이며, 사용자 세이브 데이터를 서버에 자동 동기화하는 기능과는 별개입니다.

현재 패키지는 설치형 웹 앱(PWA)입니다. App Store용 네이티브 iOS 앱(IPA)은 아닙니다.
