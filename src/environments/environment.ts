// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { DeviceDetectorService } from 'ngx-device-detector';
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCdMmZKtcVfi6l70yEtAipoa4HQI1PrNqY",
    authDomain: "e-cell-sakec.firebaseapp.com",
    databaseURL: "https://e-cell-sakec.firebaseio.com",
    projectId: "e-cell-sakec",
    storageBucket: "e-cell-sakec.appspot.com",
    messagingSenderId: "576144069304",
    appId: "1:576144069304:web:697dec62a0503129039a4d",
    measurementId: "G-W079L8SLQ1"
  },
  

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
