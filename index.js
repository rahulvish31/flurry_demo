/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Flurry from 'react-native-flurry-sdk';

new Flurry.Builder()
  .withCrashReporting(true)
  .withLogEnabled(true)
  .withLogLevel(Flurry.LogLevel.DEBUG)
  .withPerformanceMetrics(Flurry.Performance.ALL)
  .build("FSQX3VKXRGPDYP6HWP7D", "7VTD5CC3DY4XJFCZ8NRP");

Flurry.setAge(36);
Flurry.setGender(Flurry.Gender.FEMALE);
Flurry.setReportLocation(true);

Flurry.setReportLocation(true);
Flurry.setUserId('Rahul')
Flurry.UserProperties.set('developer',['Developer','Xampr'])
Flurry.logEvent('React Native Event');
Flurry.logEvent('React Native Time',timed = true);
Flurry.endTimedEvent('React Native Time')
Flurry.logEvent('React Native Timed Event', {partestam: 'true'}, true);
Flurry.endTimedEvent('React Native Timed Event');
Flurry.onError('testError','It happened in index','test');

Flurry.Performance.startResourceLogger();
Flurry.Performance.logResourceLogger("resourceLogger");

versionName = Flurry.getVersions();
console.debug(versionName);




AppRegistry.registerComponent(appName, () => App);
