// // import { Plugins, LocalNotification } from '@capacitor/core';
// // const { LocalNotifications } = Plugins;
// import { LocalNotifications, ILocalNotificationActionType } from '@ionic-native/local-notifications'

// interface ILocalNotification {
//   title: string;
//   body: string;
//   schedule: {
//     on: {
//       hour: number;
//       minute: number;
//     };
//   };
// }

// const notifications: ILocalNotification[] = [
//   {
//     title: "My Notification",
//     body: "This is my notification",
//     schedule: {
//       on: {
//         hour: 12,
//         minute: 0,
//       },
//     },
//   },
// ];

// class Notifications {
//   public async schedule(hour: number, minute: number) {
//     try {
//       // Request/ check permissions
//       if (!(await LocalNotifications.requestPermission())) return;

//       // // Clear old notifications in prep for refresh (OPTIONAL)
//       // const pending = await LocalNotifications.getPending();
//       // if (pending.notifications.length > 0)
//       //   await LocalNotifications.cancel(pending);

//       await LocalNotifications.schedule({notifications});
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }

// export default new Notifications()
