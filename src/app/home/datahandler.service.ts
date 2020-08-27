import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
 } from 'angularfire2/firestore';
 import { HomeModel, BlogModel, Upcoming, Teams, Member, Registration, Years, Division, Event } from './home-model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService {

  homeDataCollection: AngularFirestoreCollection<HomeModel>
  homeDataDoc: AngularFirestoreDocument<HomeModel>

  blogDataCollection: AngularFirestoreCollection<BlogModel>
  blogDataDoc: AngularFirestoreDocument<BlogModel>

  upcomingDataCollection: AngularFirestoreCollection<Upcoming>
  upcomingDataDoc: AngularFirestoreDocument<Upcoming>

  eventDataCollection: AngularFirestoreCollection<Event>
  eventDataDoc: AngularFirestoreDocument<Event>

  teamsDataCollection: AngularFirestoreCollection<Teams>
  teamsDataDoc: AngularFirestoreDocument<Teams>

  memberDataCollection: AngularFirestoreCollection<Member>
  memberDataDoc: AngularFirestoreDocument<Member>

  yearsDataCollection: AngularFirestoreCollection<Years>
  divDataCollection: AngularFirestoreCollection<Division>

  arr: any[]

  registrationDataCollection: AngularFirestoreCollection<Registration>;

  constructor(private afs: AngularFirestore) {
    this.homeDataCollection = this.afs.collection('homepage');
    this.blogDataCollection = this.afs.collection('blog');
    this.upcomingDataCollection = this.afs.collection('upcoming');
    this.teamsDataCollection = this.afs.collection('teams');
    this.memberDataCollection = this.afs.collection('council');
    this.yearsDataCollection = this.afs.collection('years');
    this.divDataCollection = this.afs.collection('divisions');
    this.eventDataCollection = this.afs.collection('events');
  }

  getHomeData(){
    return this.homeDataCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as HomeModel
        const id = a.payload.doc.id
        return {id, ...data}
      });
     }));
  }

  getBlog(){
    return this.blogDataCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as BlogModel
        const id = a.payload.doc.id
        return {id, ...data}
      });
     }));
  }

  getUpcoming(){
    return this.upcomingDataCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Upcoming
        const id = a.payload.doc.id
        return {id, ...data}
      });
     }));
  }

  getEvents(){
    return this.eventDataCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Event
        const id = a.payload.doc.id
        return {id, ...data}
      });
     }));
  }

  getTeams(){
    return this.teamsDataCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Teams
        const id = a.payload.doc.id
        return {id, ...data}
      });
     }));
  }

  getMenbers(){
    return this.memberDataCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Member
        const id = a.payload.doc.id

        return {id, ...data}
      });
     }));
    }

    getUpcomingData(id:string){
      this.upcomingDataDoc = this.afs.doc<Upcoming>(`upcoming/${id}`)
      return this.upcomingDataDoc.valueChanges()
    }

    register(id:string, data: Registration){
      this.registrationDataCollection = this.afs.collection(`upcoming/${id}/registrations`);
      this.registrationDataCollection.add(data);
    }

    getYears(){
      return this.yearsDataCollection.snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Years
          const id = a.payload.doc.id
          return {id, ...data}
        });
       }));
    }

    getDivisions(){
      return this.divDataCollection.snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Division
          const id = a.payload.doc.id
          return {id, ...data}
        });
       }));
    }

}
