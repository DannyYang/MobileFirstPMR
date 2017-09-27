# MobileFirstPMR
This project is only for PMR. It shows Android APP unable to connect after the application is restarted


Project setup:
1. modify js : www/js/index.js  => YOUR_CERT.cer
2. replace cert file : www/certificates/YOUR_CERT.cer
3. modify config.xml : https://{SERVER_NAME}:9445
4. if use proxy , modify this file : grade.properties

	systemProp.http.proxyHost=YOUR_PROXY_HOST
	systemProp.http.proxyPort=PROXY_PORT
  
  
The test scenario:
1. cordova prepare
2. mfpdev app webencrypt (with certificate pinning)
3. debug on android device
4. first run works fine. but fail to connect when reload this app

refer SO link : https://stackoverflow.com/questions/46342633/mobilefirst-8-android-app-cannot-connect-to-mobilefirst-server-after-direct-update
