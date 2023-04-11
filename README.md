<a name="readme-top"></a>
<div align="center">
<a href="http://www.protonative.com/"><img src="./public/icons/logo-no-background.png" alt="ProtoNative" width="445" height="auto"></a>
<br>
<br>
  
  
[![Contributors](https://img.shields.io/github/contributors/oslabs-beta/ProtoNative?color=green&logo=Github%20Sponsors&logoColor=white&style=for-the-badge)](https://github.com/oslabs-beta/ProtoNative/graphs/contributors)
[![Issues](https://img.shields.io/github/issues/oslabs-beta/ProtoNative?&style=for-the-badge)](https://github.com/oslabs-beta/ProtoNative/issues)
[![Release](https://img.shields.io/github/v/release/oslabs-beta/ProtoNative?&style=for-the-badge)](https://github.com/oslabs-beta/ProtoNative/releases)
[![License](https://img.shields.io/github/license/oslabs-beta/ProtoNative?color=lightgrey&style=for-the-badge)](#license)
[![Stars](https://img.shields.io/github/stars/oslabs-beta/ProtoNative?color=teal&logo=GitHub&style=for-the-badge)](https://github.com/oslabs-beta/ProtoNative/stargazers)

<p>

[![Website](https://img.shields.io/badge/-our_website-black.svg?style=for-the-badge&logo=React&logoColor=b39ecd&colorB=17001f)](http://www.protonative.com/)
[![Linkedin](https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0A66C2)](https://www.linkedin.com/company/protonative)
[![Medium](https://img.shields.io/badge/-Medium-black.svg?style=for-the-badge&logo=medium&logoColor=black&colorB=white)](https://medium.com/)

</p>

</div>

----

<div align="center">
ProtoNative is a <b>React Native Prototyping Tool</b> for mobile developers. With its seamless drag-and-drop interface, live code preview, and much, much more, ProtoNative is your all-in-one tool for all things React Native.
<br>
<br>
  <a href="http://www.protonative.com/"><b>Download for Windows or Mac</b></a>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

<ol>
  <li>
    <a href="#built-with">Built With</a>
  </li>
  <li>
    <a href="#installation">Installation</a>
    <ul>
      <li><a href="#windows">Windows</a></li>
      <li><a href="#mac">Mac</a></li>
    </ul>
  </li>
  <li><a href="#getting-started">Getting Started</a></li>
  <li><a href="#running-your-app">Running Your App</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#our-team">Our Team</a></li>
  <li><a href="#license">License</a></li>
</ol>

#

<br>
<br>


## Built With

[![Typescript][TS.js]][TS-url][![JavaScript][JavaScript]][JavaScript-url][![React][React.js]][React-url][![Electron][Electron]][Electron-url][![ElectronBuilder][ElectronBuilder]][ElectronBuilder-url][![ReactDnD][ReactDnD]][ReactDnD-url][![Jest][Jest]][Jest-url][![Babel][Babel]][Babel-url][![Vite][Vite]][Vite-url][![Prettier][Prettier]][Prettier-url][![FileSaver][FileSaver]][FileSaver-url][![Prism][Prism]][Prism-url][![HTML5][HTML5]][HTML5-url][![CSS3][CSS3]][CSS3-url][![SASS][SASS]][SASS-url][![Git][Git]][Git-url]

<br>
<br>


# Installation

### Windows

1. Download the latest release for Windows [here](www.protonative.com).
2. Run the installer.
3. Run ProtoNative from your desktop.

### Mac

1. Download the latest release for Mac [here](www.protonative.com).
2. Run the installer.
3. If you get a warning that the app is from an unidentified developer, go to System Preferences > Security & Privacy > General and click "Open Anyway".
4. Run ProtoNative from your applications folder.

<p align="right"><a href="#readme-top">back to top</a></p>

<br>
<br>


# Getting Started

1. To get started, add any React Native elements by dragging and dropping them from the bottom-left bin onto the "App" canvas in the middle of your screen. Rearrange elements as you see fit or drag them to the trash.
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="gifs/Adding-elements-to-App-Canvas.gif">
    <source media="(prefers-color-scheme: light)" srcset="gifs/Adding-elements-to-App-Canvas.gif">
    <img alt="Adding elements to canvas gif" src="gifs/Adding-elements-to-App-Canvas.gif" width="800px">
  </picture>

2. When you feel like your App needs more depth, click the "Add Custom Component" button in the top left corner and enter a name, pulling it up to the "Component Details" section on the right side of your screen. You can add elements to your custom component by dragging and dropping them from the bottom left bin onto the mini canvas in "Component Details."
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="gifs/Adding-custom-components.gif">
    <source media="(prefers-color-scheme: light)" srcset="gifs/Adding-custom-components.gif">
    <img alt="Add custom components gif" src="gifs/Adding-custom-components.gif" width="800px">
  </picture>

3. Creating a custom component will also add it to your bin of addable children in the bottom-left corner, highlighted in purple. Drag and drop the component onto the App canvas or another component's details to add it.
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="gifs/Add-reuseable-components-as-child.gif">
    <source media="(prefers-color-scheme: light)" srcset="gifs/Add-reuseable-components-as-child.gif">
    <img alt="Add reuseable components as children gif" src="gifs/Add-reuseable-components-as-child.gif" width="800px">
  </picture>

4. If you make multiple custom components, navigate between their details by clicking on the component name in the "Components" section on the left side.
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="gifs/Switch-between-components.gif">
    <source media="(prefers-color-scheme: light)" srcset="gifs/Switch-between-components.gif">
    <img alt="Switch between components gif" src="gifs/Switch-between-components.gif" width="800px">
  </picture>

5. Add state variables to your components by clicking the "Add State" button in the "Component Details" section. Remove by clicking on the variable's name.
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="gifs/Add-state-to-components.gif">
    <source media="(prefers-color-scheme: light)" srcset="gifs/Add-state-to-components.gif">
    <img alt="Add state to components gif" src="gifs/Add-state-to-components.gif" width="800px">
  </picture>

6. Switch to the "Tree" tab above your App canvas to see a visual representation of your App's structure.
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="gifs/Tree-view.gif">
    <source media="(prefers-color-scheme: light)" srcset="gifs/Tree-view.gif">
    <img alt="View components as a tree gif" src="gifs/Tree-view.gif" width="800px">
  </picture>

<p align="right"><a href="#readme-top">back to top</a></p>

## Running Your App

1. When you're ready to export your app, click the "Export" button in the top right corner.
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="gifs/Export.gif">
    <source media="(prefers-color-scheme: light)" srcset="gifs/Export.gif">
    <img alt="Export app gif" src="gifs/Export.gif" width="800px">
  </picture>

2. Install dependencies and make any changes to your app as you see fit in a code editor of your choosing.
3. Run your app with "npm start" and scan the QR code using the Expo Go mobile app to view your application in real time.
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="gifs/Start-expo-app.gif">
    <source media="(prefers-color-scheme: light)" srcset="gifs/Start-expo-app.gif">
    <img alt="Export app gif" src="gifs/Start-expo-app.gif" width="800px">
  </picture>

<p align="right"><a href="#readme-top">back to top</a></p>


<!--
// installation instructions (maybe with images)

// articles 
// next steps / roadmap : link to another readme for devs who want to iterate
// our team
// license
-->


[React.js]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React-url]: https://reactjs.org/
[TS.js]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TS-url]: https://www.typescriptlang.org/
[JavaScript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: https://www.javascript.com/
[Jest]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/
[Vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[Git]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[Git-url]: https://git-scm.com/
[CSS3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS/
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Web/HTML/
[SASS]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
[SASS-url]: https://sass-lang.com/
[Electron]: https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white
[Electron-url]: https://www.electronjs.org/
[ElectronBuilder]: https://img.shields.io/badge/Electron_Builder-2094f3?style=for-the-badge&logo=electron-builder&logoColor=white
[ElectronBuilder-url]: https://www.electron.build/
[Babel]: https://img.shields.io/badge/Babel-323330?style=for-the-badge&logo=Babel
[Babel-url]: https://babeljs.io/
[Prism]: https://img.shields.io/badge/Prism-blue?style=for-the-badge&logo=Prisma
[Prism-url]: https://Prismjs.com/
[FileSaver]: https://img.shields.io/badge/FileSaver-darkgreen?style=for-the-badge&logo=Files&logoColor=white
[FileSaver-url]: https://www.npmjs.com/package/file-saver
[Prettier]: https://img.shields.io/badge/Prettier-1a2b34?style=for-the-badge&logo=Prettier
[Prettier-url]: https://prettier.io/
[ReactDnD]: https://img.shields.io/badge/React_DnD-%2320232a?style=for-the-badge&logo=createreactapp
[ReactDnD-url]: https://react-dnd.github.io/react-dnd/about
