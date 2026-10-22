EMIS 농구 매니저 배포 패키지 (V45)

1) HTML 단독 실행
- index.html 파일만 친구에게 보내면 됩니다.
- iPad에서는 파일 미리보기/브라우저 정책에 따라 일부 기능이 제한될 수 있으므로, 가능하면 GitHub Pages 주소 사용을 권장합니다.

2) GitHub Pages에서 앱처럼 설치(PWA)
- 저장소의 기존 배포 파일을 백업합니다.
- 이 폴더 안의 index.html, manifest.webmanifest, service-worker.js 파일과 icons 폴더를 저장소 루트에 업로드합니다.
- 기존 index.html을 교체하고 나머지 파일/폴더도 추가한 뒤 Commit changes를 누릅니다.
- 배포 완료 후 Safari에서 사이트를 열고 공유 버튼 > 홈 화면에 추가를 선택합니다.

참고: 이 패키지는 앱스토어용 IPA가 아닙니다. GitHub Pages는 HTTPS에서 PWA 설치를 지원합니다. HTML 파일을 직접 실행하는 경우에는 서비스 워커/설치 기능이 동작하지 않을 수 있습니다. 저장 데이터는 기기/브라우저별로 별도일 수 있습니다.
