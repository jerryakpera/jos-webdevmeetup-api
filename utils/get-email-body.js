module.exports = (name, verificationURL) => {
  return `
    <div>
      <p> Hello, ${name} </p>
      
      <br/>
      
      <p>
        You are seeing this email because you registered for the DevCon in Jos, Plateau.
      </p>

      <p>
        Please click the link below to complete your registration process and verify your email address
      </p>

      <a href="${verificationURL}" target="_blank">
        Verify
      </a>
      
      <br/>
      
      <p>
        Thanks, Jeremiah Akpera
      </p>
    </div>
  `;
};
