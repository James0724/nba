import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyClh6aDF_FnTgVG6bIUw00Sq60wM8pAT0k',
	authDomain: 'epl-webapp.firebaseapp.com',
	databaseURL: 'https://epl-webapp-default-rtdb.firebaseio.com',
	projectId: 'epl-webapp',
	storageBucket: 'epl-webapp.appspot.com',
	messagingSenderId: '595983439131',
	appId: '1:595983439131:web:d3c86ebdcf0d1ff1e6afbe',
};

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
	const data = [];
	snapshot.forEach((childSnapshot) => {
		data.push({
			...childSnapshot.val(),
			id: childSnapshot.key,
		});
	});
	return data;
};

export {
	firebase,
	firebaseDB,
	firebaseArticles,
	firebaseVideos,
	firebaseTeams,
	firebaseLooper,
};
