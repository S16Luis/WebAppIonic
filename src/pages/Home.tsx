import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider, IonInput, IonItem, IonLabel, IonDatetime, IonFooter
  , IonSlides, IonSlide, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonList, IonGrid, IonRow,
  IonCol, IonButton
} from '@ionic/react';
import './Home.css';
import React, { useState } from 'react';
import { Toast } from '@capacitor/toast';
import { ActionSheet } from '@capacitor/action-sheet';
import { Device } from '@capacitor/device';
import { Browser } from '@capacitor/browser';
import { Dialog } from '@capacitor/dialog';
import { Network } from '@capacitor/network';

const showHelloToast = async () => {
  await Toast.show({
    text: 'Esto es un Toast con capacitor',
  });
};

const logBatteryInfo = async () => {
  const info = await Device.getBatteryInfo();
  var dato = ""+info.batteryLevel;
  await Toast.show({
    text: 'Informacion de la bateria: '+dato.substring(2,4)+'%',
  });
};

const showActions = async () => {
  await ActionSheet.showActions({
    title: 'Acciones',
    message: 'Selecciona una opción',
    options: [
      {
        title: 'Guardar',
      },
      {
        title: 'Editar',
      },
      {
        title: 'Eliminar',
      },
    ],
  });
};

const logCurrentNetworkStatus = async () => {
  const status = await Network.getStatus();
  await Toast.show({
    text: 'Estado de red: '+status.connectionType,
  });
};

const openCapacitorSite = async () => {
  await Browser.open({ url: 'https://ionicframework.com/' });
};

const showAlert = async () => {
  await Dialog.alert({
    title: 'Cuadro de dialogo',
    message: 'Esto es un Dialog con Capacitor',
  });
};

const Home: React.FC = () => {

  const [text, setText] = useState<string>();
  const [selectedDate, setSelectedDate] = useState<string>('2021-01-01T13:47:20.789');
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  const slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Componentes y Plugins</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <IonCard>
              <IonImg src="https://miro.medium.com/max/948/1*JCaJnwaAOCDv-ZHX_M9Exw.png"></IonImg>
              <IonCardHeader>
                <IonCardSubtitle>Framework</IonCardSubtitle>
                <IonCardTitle>Ionic</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Ionic es un SDK de código abierto completo para el desarrollo de aplicaciones móviles híbridas creado por Max Lynch, Ben Sperry y Adam Bradley de Drifty Co. en 2013.
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonList>
            <IonItem>
              <IonLabel>Selecciona una fecha</IonLabel>
              <IonDatetime displayFormat="D MMM YYYY H:mm" min="1997" max="2021" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
            </IonItem>
              <IonItem>
                <IonLabel>Programación Móvil 2</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Web 3</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Inteligencia Artificial</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Lenguajes de Interfaz</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Web 2</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Taller de Invetigación 2</IonLabel>
              </IonItem>
              <IonItem>
              <IonInput value={text} placeholder="Ingresa texto" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
            </IonItem>
            </IonList>
          </IonSlide>
          <IonSlide>
            <IonGrid>
              <IonItemDivider>Plugins de capacitor</IonItemDivider>
              <IonRow>
                <IonCol><IonButton onClick={() => showHelloToast()}>Mostrar Toast</IonButton></IonCol>
                <IonCol><IonButton onClick={() => showActions()}>Mostrar Action Sheet</IonButton></IonCol>
                <IonCol><IonButton onClick={() => logCurrentNetworkStatus()}>Obtener estado de internet</IonButton></IonCol>
              </IonRow>
              <IonRow>
                <IonCol><IonButton onClick={() => openCapacitorSite()}>Ir al navegador</IonButton></IonCol>
                <IonCol><IonButton onClick={() => showAlert()}>Mostrar Dialog</IonButton></IonCol>
                <IonCol><IonButton onClick={() => logBatteryInfo()}>Estado de la bateria</IonButton></IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
        </IonSlides>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          Integrantes: José Luis González Ruiz - Luis Fernando Rojas Martínez
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;

