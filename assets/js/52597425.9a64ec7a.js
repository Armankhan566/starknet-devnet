"use strict";(self.webpackChunkstarknet_devnet=self.webpackChunkstarknet_devnet||[]).push([[825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:19},i="Development",l={unversionedId:"guide/development",id:"guide/development",title:"Development",description:"If you're a developer willing to contribute, be sure to have installed Poetry and all the dependency packages by running the installation script. Prerequisites for running the script: gcc, g++, gmp, npm.",source:"@site/docs/guide/development.md",sourceDirName:"guide",slug:"/guide/development",permalink:"/starknet-devnet/docs/guide/development",draft:!1,editUrl:"https://github.com/0xSpaceShard/starknet-devnet/blob/master/page/docs/guide/development.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Cairo 1 support",permalink:"/starknet-devnet/docs/guide/cairo1-support"}},p={},s=[{value:"Development - Run",id:"development---run",level:2},{value:"Development - Run in debug mode",id:"development---run-in-debug-mode",level:2},{value:"Development - Format and Lint",id:"development---format-and-lint",level:2},{value:"Development - Test",id:"development---test",level:2},{value:"Development - Check versioning consistency",id:"development---check-versioning-consistency",level:2},{value:"Development - Adapting to a new version of cairo-lang",id:"development---adapting-to-a-new-version-of-cairo-lang",level:2},{value:"Development - Updating accounts",id:"development---updating-accounts",level:2},{value:"Development - Predeployment",id:"development---predeployment",level:2},{value:"Development - Build",id:"development---build",level:2},{value:"Development - Version release",id:"development---version-release",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development"},"Development"),(0,r.kt)("p",null,"If you're a developer willing to contribute, be sure to have installed ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/poetry/"},(0,r.kt)("strong",{parentName:"a"},"Poetry"))," and all the dependency packages by running the installation script. Prerequisites for running the script: ",(0,r.kt)("inlineCode",{parentName:"p"},"gcc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"g++"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gmp"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),"."),(0,r.kt)("p",null,"To use an existing Cairo 1 compiler repository, set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"CAIRO_1_COMPILER_MANIFEST")," to the path of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," of the compiler. If this variable is not set, the installation script will download a new compiler repository as a subdirectory of your starknet-devnet directory. This compiler downloading is mainly intended to be used by the CI/CD pipeline, but developers can locally depend on it if they want to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./scripts/install_dev_tools.sh\n")),(0,r.kt)("p",null,"If you locally run this script, it does not set the ",(0,r.kt)("inlineCode",{parentName:"p"},"CAIRO_1_COMPILER_MANIFEST")," in your environment. You can set it manually, or run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ source ./scripts/install_dev_tools.sh\n")),(0,r.kt)("h2",{id:"development---run"},"Development - Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ poetry run starknet-devnet\n")),(0,r.kt)("h2",{id:"development---run-in-debug-mode"},"Development - Run in debug mode"),(0,r.kt)("p",null,"This will restart Devnet on each code change:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ ./scripts/starknet_devnet_debug.sh\n")),(0,r.kt)("h2",{id:"development---format-and-lint"},"Development - Format and Lint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ ./scripts/format.sh\n$ ./scripts/lint.sh\n")),(0,r.kt)("h2",{id:"development---test"},"Development - Test"),(0,r.kt)("p",null,"When running tests locally, do it from the project root."),(0,r.kt)("p",null,"First generate the artifacts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./scripts/compile_contracts.sh\n")),(0,r.kt)("p",null,"To run the tests, use one of these commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./scripts/test.sh [TEST_CASE] # parallelized testing - using auto detected number of CPU cores\n\n$ poetry run pytest -s -v test/ # for more verbose output\n\n$ poetry run pytest test/<TEST_FILE> # for a single file\n\n$ poetry run pytest test/<TEST_FILE>::<TEST_CASE> # for a single test case\n")),(0,r.kt)("p",null,"Some of the tests require a locally present Cairo 1 compiler, set the environment ",(0,r.kt)("inlineCode",{parentName:"p"},"CAIRO_1_COMPILER_MANIFEST")," to the path of your compiler's Cargo.toml; e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ CAIRO_1_COMPILER_MANIFEST=cairo-compiler/Cargo.toml poetry run pytest\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To enable testing of custom recompilation, set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"CAIRO_1_COMPILER_MANIFEST")," to the path of the Cargo.toml file of your local Cairo 1 compiler. If you do not set this variable, that test group will fail.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are experiencing test failures on macOS related to ",(0,r.kt)("inlineCode",{parentName:"p"},"fork()")," command\nconsider running ",(0,r.kt)("inlineCode",{parentName:"p"},"export OBJC_DISABLE_INITIALIZE_FORK_SAFETY=YES")," in your shell.")),(0,r.kt)("h2",{id:"development---check-versioning-consistency"},"Development - Check versioning consistency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$./scripts/check_versions.sh\n")),(0,r.kt)("h2",{id:"development---adapting-to-a-new-version-of-cairo-lang"},"Development - Adapting to a new version of cairo-lang"),(0,r.kt)("p",null,"Install the exact version with ",(0,r.kt)("inlineCode",{parentName:"p"},"poetry add cairo-lang@<VERSION>"),"."),(0,r.kt)("p",null,"If you only know the URL of the archive (e.g. ZIP) of a new cairo-lang version, you can install it with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ poetry add <URL>\n")),(0,r.kt)("p",null,"Why are we installing the exact version? We depend on Starknet's internal code, and any minor change might make Devnet unusable. E.g. a missing or moved function in a patch version of cairo-lang."),(0,r.kt)("p",null,"The cairo compiler version (git tag) might need to be changed, both for your local development (git checkout in your compiler repo) and in the CI (in install_dev_tools.sh)."),(0,r.kt)("p",null,"After adding a new cairo-lang version, you need to recompile contract artifacts."),(0,r.kt)("p",null,"Check if the Solidity contracts have been updated."),(0,r.kt)("p",null,"When adapting to a new cairo-lang version, to make the tests pass, some hashes will need to be replaced (at least a different version string is stored in the compilation artifacts, leading to a different hash). This is the main argument for keeping the hardcoded hash values in tests: they are only expected to change if a new version cairo-lang version is being added or there is a change with the smart contracts themselves, otherwise a change in the expected hash values probably indicates a bug."),(0,r.kt)("h2",{id:"development---updating-accounts"},"Development - Updating accounts"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set up ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/cairo-contracts/"},"https://github.com/OpenZeppelin/cairo-contracts/")," locally"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git clone ... && pip install cairo-nile && nile init")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git checkout")," to desired version")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"nile compile --directory src"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy and minify ",(0,r.kt)("inlineCode",{parentName:"p"},"artifacts/Account.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"artifacts/abi/Account.json"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the precalculated hash"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Predeployed account addresses should be intact"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update directory/file names containing the version")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Adapt to ABI changes")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update expected test paths and addresses")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update docs"))),(0,r.kt)("h2",{id:"development---predeployment"},"Development - Predeployment"),(0,r.kt)("p",null,"Several things are preconfigured on startup to be available on the first user interaction with Devnet. This is done in the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"StarknetWrapper"),". The following is currently executed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deployment of",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fee token contract"),(0,r.kt)("li",{parentName:"ul"},"User accounts"),(0,r.kt)("li",{parentName:"ul"},"Chargeable account",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"for e.g. signing minting txs"))),(0,r.kt)("li",{parentName:"ul"},"UDC",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"supports contract deployment ever since deploy txs have been deprecated"))))),(0,r.kt)("li",{parentName:"ul"},"Declaration of the account class used by Starknet CLI")),(0,r.kt)("h2",{id:"development---build"},"Development - Build"),(0,r.kt)("p",null,"You don't need to build anything to be able to run locally, but if you need the ",(0,r.kt)("inlineCode",{parentName:"p"},"*.whl")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"*.tar.gz")," artifacts, run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ poetry build\n")),(0,r.kt)("h2",{id:"development---version-release"},"Development - Version release"),(0,r.kt)("p",null,"You can check the current version on master with these commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ git checkout master\n$ poetry version\n")),(0,r.kt)("p",null,"To update the version use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ poetry version <VERSION>\n")),(0,r.kt)("p",null,"or any other variation of that ",(0,r.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/cli/#version"},"command")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"starknet_devnet/__init__.py")," you need to manually update the version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'__version__ = "<VERSION>"\n')),(0,r.kt)("p",null,"If you did everything correctly, these commands should result in the same version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ poetry version\n$ poetry run starknet-devnet --version\n")),(0,r.kt)("p",null,"Commit (Notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"v"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ git add starknet_devnet/__init__.py pyproject.toml\n$ git commit -m "Bump version to v<VERSION>"\n$ git push\n')),(0,r.kt)("p",null,"If the CI/CD pipeline ran successfully, tag the new version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git tag v<VERSION>\n$ git push origin v<VERSION>\n")),(0,r.kt)("p",null,"Documentation is deployed automatically to ",(0,r.kt)("a",{parentName:"p",href:"https://0xspaceshard.github.io/starknet-devnet"},"https://0xspaceshard.github.io/starknet-devnet"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uses the FabijanC username and its private GitHub token set in the CircleCI project env vars."),(0,r.kt)("li",{parentName:"ul"},"Done only after a new version is released."),(0,r.kt)("li",{parentName:"ul"},"Initiated in ",(0,r.kt)("inlineCode",{parentName:"li"},"scripts/package_build_and_publish.sh"),".")),(0,r.kt)("p",null,"Lastly:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check if tests and version/image publishing ran successfully on CI"),(0,r.kt)("li",{parentName:"ul"},"Generate release notes with the corresponding tag version on GitHub"),(0,r.kt)("li",{parentName:"ul"},"Inform users on Telegram, ",(0,r.kt)("a",{parentName:"li",href:"https://discord.com/channels/793094838509764618/985824027950055434"},"Discord Devnet channel"),", and ",(0,r.kt)("a",{parentName:"li",href:"https://community.starknet.io/t/starknet-devnet/69"},"Starknet Shamans"),".")))}u.isMDXComponent=!0}}]);