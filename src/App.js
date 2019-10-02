import React from 'react';
import logo from './logo.svg';
import './App.css';
const CryptoJS = require('crypto-js');
function App() {
  function decrypt(url, decryptKey) {
            
    var data = CryptoJS.enc.Base64.parse(url).toString(CryptoJS.enc.Hex);
    var key = CryptoJS.enc.Utf8.parse(decryptKey);
    var iv = CryptoJS.enc.Hex.parse(data.substr(0, 32));
    var message = CryptoJS.enc.Hex.parse(data.substr(32));

    var options = {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    };

    var params = CryptoJS.lib.CipherParams.create({ ciphertext: message });
    var decryptedMessage = CryptoJS.AES.decrypt(params, key, options);
    return decryptedMessage.toString(CryptoJS.enc.Utf8);
    
    
}
// console.log(decrypt(urlFromDocs, secret_key));
//MAKE SURE IF THESE ARE NOT DEFINED VARIABLES YOU WRAP THEM IN QUOTES
// IT DOESN'T UNDERSTAND ANYTHING BUT STRINGS.
const works = decrypt(urlFromDocs, secret_key);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="decrypted-output">
          Decrypted URL: {works}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
