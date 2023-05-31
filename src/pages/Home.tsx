import {
    IonButton,
    IonContent,
    IonHeader,
    IonLabel,
    IonPage,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {useState} from "react";
import { Vibration } from '@awesome-cordova-plugins/vibration';
import { Plugins } from '@capacitor/core';
import { Toast } from '@capacitor/toast';
import { LocalNotifications } from '@capacitor/local-notifications';




interface Train {
    lineName: string;
    headsign: string;
    route: string;
    routeDisplayName: string;
    direction: string;
    lineColors: string[];
    status: string;
    projectedArrival: string;
    lastUpdated: string;
  }

  
const Home: React.FC = () => {
    const [source, setSource] = useState('');
    const [destinationOptions, setDestinationOptions] = useState<string[]>([]);
    const [destination, setDestination] = useState('');
    const [isflag, setFlag] = useState(true);
    const [vibrationtTime, setVibrationTime] = useState<number>(10000);

    
   
    const handleSourceChange = (event: CustomEvent) => {
        const sourceValue = event.detail.value;
        setSource(sourceValue);
        fetchDestinationOptions(sourceValue);
    }

    const fetchDestinationOptions = async (source: string) => {
        const response = await fetch(`https://path.api.razza.dev/v1/stations/${source}/realtime`);
        const data = await response.json();
        console.log(data.upcomingTrains);
        const destinationOptions = (data.upcomingTrains.map((station: any) => station.routeDisplayName) as string[]).filter((value, index, self) => self.indexOf(value) === index);
        console.log(destinationOptions);
        setDestinationOptions(destinationOptions);
    }

    const handleDestinationChange = (event: CustomEvent) => {
        const destinationValue = event.detail.value;
        setDestination(destinationValue);
    }

    const handleScheduleVibration = async () => {
        console.log("--");

        if (!source) {
            if (!(await LocalNotifications.requestPermissions())) return;
            await Toast.show({
                text: 'Please select a source before scheduling the vibration.'
            });
            return;
        }


        if (!destination) {
            await Toast.show({
                text: 'Please select a Route before scheduling the vibration.'
            });
            return;
        }

        console.log("00" + source);
        const response = await fetch(`https://path.api.razza.dev/v1/stations/${source}/realtime`);
        const data = await response.json();
        console.log(data);
         
        let nextTrain = null;

        for (const train of data.upcomingTrains) {
        if (train.routeDisplayName === destination) {
            const projectedArrivalTime = new Date(train.projectedArrival).getTime();
            const currentTime = new Date().getTime();
            const timeUntilArrival = projectedArrivalTime - currentTime;

            if (timeUntilArrival > 0) {
            nextTrain = train;
            break;
            }
        }
        }

        if (!nextTrain) {
        await Toast.show({
            text: `No trains are coming to ${destination} in the near future. Please try again later.`
        });
        return;
        }

        const nextTrainProjectedArrival = new Date(nextTrain.projectedArrival);
        const timeUntilArrival = nextTrainProjectedArrival.getTime() - new Date().getTime() 
         //- 5 * 60 * 1000;
        if (timeUntilArrival < 0) {
          await Toast.show({
            text: 'The next train is arriving too soon. Please try again later.'
          });
          return;
        }
         var time: number;
        if (timeUntilArrival <= 5 * 60 * 1000) {
            time = timeUntilArrival;
          } else {
            time = timeUntilArrival- 5 * 60 * 1000
          }
           console.log(time);
           setFlag(false);

           await Toast.show({
            text: `The vibration will be scheduled ${(time / (60 * 1000)).toFixed(2)} minutes before the next train arrives.`
           });

           await LocalNotifications.schedule({
            notifications: [
              {
                title: 'Next train is arriving soon!',
                body: `The next train to ${source} will arrive in ${(time / (60 * 1000)).toFixed(2)} minutes.`,
                schedule: { at: new Date(new Date().getTime() + 300) },
                actionTypeId: '',
                extra: null,
                id: 1,
                channelId: '',
                smallIcon: '',
                iconColor: '',
                largeIcon: '',                  }
            ]
          });

        
          setTimeout(async () => {
            await LocalNotifications.schedule({
                notifications: [
                  {
                    title: 'Hurry Up',
                    body: `The train is arrived at ${source} station`,
                    schedule: { at: new Date(new Date().getTime() + time) },
                    actionTypeId: '',
                    extra: null,
                    id: 1,
                    channelId: '',
                    smallIcon: '',
                    iconColor: '',
                    largeIcon: '',                  }
                ]
              })
           
        }, 350);


        setTimeout(async () => {
            console.log("vibration");
            setFlag(true);
            Vibration.vibrate(vibrationtTime);
           
        }, time);

       ;
    }

  return (
    <IonPage >
        <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle className='iontitle'>Path 5 Minutes Schedule</IonTitle>
        </IonToolbar>
      </IonHeader>
     
      <IonContent   >
        
        <div className='container'>
            <IonLabel className='header' >Every minute counts, so let's save some time</IonLabel>
        <IonSelect
              value={source}
              placeholder="Please select source"
              onIonChange={handleSourceChange}
              interface="action-sheet"
              fill="outline"
              labelPlacement="floating"
              label="Source"
          >
              <IonSelectOption value="newark">Newark</IonSelectOption>
              <IonSelectOption value="harrison">Harrison</IonSelectOption>
              <IonSelectOption value="journal_square">Journal Square</IonSelectOption>
              <IonSelectOption value="grove_street">Grove Street</IonSelectOption>
              <IonSelectOption value="exchange_place">Exchange Place</IonSelectOption>
              <IonSelectOption value="world_trade_center">World Trade Center</IonSelectOption>
              <IonSelectOption value="newport">Newport</IonSelectOption>
              <IonSelectOption value="hoboken">Hoboken</IonSelectOption>
              <IonSelectOption value="christopher_street">Christopher Street</IonSelectOption>
              <IonSelectOption value="ninth_street">Ninth Street</IonSelectOption>
              <IonSelectOption value="fourteenth_street">Fourteenth Street</IonSelectOption>
              <IonSelectOption value="twenty_third_street">Twenty-Third Street</IonSelectOption>
              <IonSelectOption value="thirty_third_street">Thirty-Third Street</IonSelectOption>
          </IonSelect>

          <IonSelect
              value={destination}
              placeholder="Please select Route"
              onIonChange={(e) => setDestination(e.detail.value)}
              interface="action-sheet"
              fill="outline"
              labelPlacement="floating"
              label="Route"
    
          >
              {destinationOptions.map((option) => (
                  <IonSelectOption key={option} value={option}>
                      {option}
                  </IonSelectOption>
              ))}
          </IonSelect>
          {/* console.log(isflag); */}
          {isflag && (<IonButton  onClick={handleScheduleVibration}>Schedule Vibration</IonButton>)}

          {!isflag && (<IonButton  onClick={handleScheduleVibration}>Scheduled</IonButton>)}

          
        </div>
          
      </IonContent>
    </IonPage>
  );
};

export default Home;
