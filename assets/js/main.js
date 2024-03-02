// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyAqLIFCQgjTeKwRGBB5QqgOu9lr0ag9kTs",
    authDomain: "ipallowed-1fa4f.firebaseapp.com",
    projectId: "ipallowed-1fa4f",
    storageBucket: "ipallowed-1fa4f.appspot.com",
    messagingSenderId: "889059844773",
    appId: "1:889059844773:web:ddc06bb1d13eb612a2234c",
    measurementId: "G-8DEL7NDGBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of ips from your database
async function getIps(db) {
    const ipCollectionRef = collection(db, 'allowedips');
    const fetchedIpsSnapshot = await getDocs(ipCollectionRef);
    const fetchedIpsDataList = fetchedIpsSnapshot.docs.map(doc => doc.data());
    return fetchedIpsDataList;
}
// Llamar a la función getIps y manejar el resultado
getIps(db).then(fetchedIpsDataList => {
    // Solicitud HTTP para obtener la IP pública del cliente
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            let ips = [];
            fetchedIpsDataList.forEach(ip => {
                ips.push(ip.ip);
            });
            if (!ips.includes(data.ip)) {
                window.location.href = "/deployment.html";
            }
        })
        .catch(error => {
            console.error('Error al obtener la dirección IP:', error);
        });
}).catch(error => {
    console.error('Error al obtener ips:', error);
});