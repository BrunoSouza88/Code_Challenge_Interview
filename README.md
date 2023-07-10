<h1>Code Challenge Interview 🚀</h1>

<p>This is a project that includes code challenges for interview preparation. The challenges cover various programming concepts and problem-solving techniques commonly encountered in technical interviews.</p>

<h2>Challenge Description 📚</h2>

<p>The challenge is to create three routes using JavaScript and Express.js running on port 4000:</p>

<ol>
  <li>Register an account: For this, an array `accounts = []` with number, person's name, and balance must be used.</li>
  <li>Authenticate: A token will be returned upon successful authentication.</li>
  <li>Perform debit between accounts: The source account, destination account, and the amount of money to be transferred must be provided in the body of the request. The money should be debited from the source account and credited to the destination account. To perform this operation, the user must be authenticated with a token.</li>
</ol>

<p>Validations:</p>

<ol>
  <li>If `req.body` is empty at the time of registration, send status 400.</li>
  <li>If the user already exists in the `accounts` array at the time of registration, send status 409.</li>
  <li>When authenticating, the token must be saved within the `accounts` array, in a `token = []` field.</li>
  <li>If there is no token in the headers with the name 'authentication-headers' at the time of transfer between accounts, send status 401.</li>
  <li>For all elements that successfully complete what is expected in their endpoint, send status 200. *There are other implicit validations that can be done.</li>
</ol>

<p>Example of an object to be saved in `accounts = []`:</p>

<pre><code>const accounts = [
  { number: 12345, balance: 1000, user: 'jorge' },
  { number: 54321, balance: 500, user: 'maria' },
  { number: 98765, balance: 2500, user: 'teresa' },
];
</code></pre>

<h2>Technologies Used 💻</h2>

<p>The project utilizes the following technologies:</p>

<ul>
  <li>JavaScript</li>
  <li>Express.js</li>
</ul>

<h2>Usage ⚙️</h2>

<p>The code challenges are designed to help you practice your problem-solving skills and familiarize yourself with common interview questions. Each challenge includes a problem statement and a sample solution to guide you. You can try to solve the challenges on your own and compare your solutions with the provided samples.</p>

<h2>Contributing 🤝</h2>

<p>Contributions are what make the open-source community a fantastic place to learn, inspire, and create. Any contributions you make are greatly appreciated.</p>

<ol>
  <li>Fork the project.</li>
  <li>Create a branch for your feature (git checkout -b feature/AmazingFeature).</li>
  <li>Commit your changes (git commit -m 'Add some amazing feature').</li>
  <li>Push to the branch (git push origin feature/AmazingFeature).</li>
  <li>Open a Pull Request.</li>
</ol>

<h2>License 📝</h2>

<p>This project is licensed under the MIT License. See the LICENSE file for details.</p>

<h2>Contact 📬</h2>

<p>Bruno Souza - bmsouza88@gmail.com</p>

<p>Project Link: <a href="https://github.com/BrunoSouza88/Code_Challenge_Interview">https://github.com/BrunoSouza88/Code_Challenge_Interview</a></p>
