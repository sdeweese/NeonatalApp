Neonatal App
---------
This application will have three main components:
1. Story Modules for educational storytelling
1. Resources map 
1. Message Portal with a locally stored (to ensure database to store contact information 

Initial Setup
---------
1. Install node.js: `brew install node` Note, if you do not have homebrew installed, install it using this link: http://osxdaily.com/2018/03/07/how-install-homebrew-mac-os/ (We used version 13.6.0. Check your version with this command `node -v`)
1. Once node is intalled properly, install expo-cli: `npm install -g expo-cli` (We used 3.11.7 Check your version with this command `expo-cli -V`)
1. Clone repo into a folder on your device by using git clone <this_repository_ssh_or_https_key>
1. Go to a command line prompt and navigate to the folder.
1. Once in folder, type in command line `npm install` to install all the dependencies and modules in the folder.
1. To set up a project, run the following commands `expo init <name_of_app>` `cd <name_of_app>`  
1. You can now run the application by using the command `npm start`. This will open up a tab on your browser. Wait until a message appears that says "Tunnel ready." Then, click on the "Tunnel" option in the lower left hand of the browser screen.
Download the Expo Cli app on the phone.
1. Install android-studio `brew cask install android-studio`
1. If you are using iOS, use the built-in camera app on the phone to scan the QR code. A link will come up asking to open the Expo Cli app. However, for Android devices, the QR code can be scanned from within the Expo Cli app itself. (Note: XCODE's iOS simulator is another option for testing the app. Android simulators are also available.)

App-Specific downloads
---------
To be able to naviage between screens, install the following: https://facebook.github.io/react-native/docs/navigation
* `npm install --save react-navigation`
* `npm install --save react-native-gesture-handler`
* `npm install --save react-navigation-stack`

If there are any peer dependencies that need to be installed, install them as your command line prompts you to. For our project we installed these peer dependencies:
* `npm install --save @react-native-community/masked-view`
* `npm install --save react-native-safe-area-context`
